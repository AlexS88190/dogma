import React, {FC, useEffect, useState} from 'react';
import { ChromeFilled, ProfileFilled, PictureFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Button, Menu, notification} from 'antd';
import Profile from "../Profile/Profile";
import {IUser, IUserStorage, IValuesProfile} from "../../interfaces/interfaces";
import {api} from "../../utils/api";
import News from "../News/News";
import Gallery from "../Gallery/Gallery";

interface MainProps {
    handleLogout: () => void,
}

const Main: FC<MainProps> = ( {handleLogout} ) => {

    const items: MenuProps['items'] = [
        {
            label: 'Профиль',
            key: 'profile',
            icon: <ProfileFilled />
        },
        {
            label: 'Новости',
            key: 'news',
            icon: <ChromeFilled />
        },
        {
            label: 'Галерея',
            key: 'gallery',
            icon: <PictureFilled />
        },
        {
            label: (
                <Button onClick={handleLogout} style={{color: "#000", fontSize: 20}} type="link">Выход</Button>
            ),
            key: 'logout',
            disabled: true
        }
    ];

    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState<string>('profile');
    const [isPreloader, setPreloader] = useState<boolean>(false);
    const [userStorage, setUserStorage] = useState<IUserStorage>({});

    useEffect(() => {
        getUser()
        getUsers()
    }, [])


    const handlePage: MenuProps['onClick'] = (event) => {
        setCurrentPage(event.key);
    };

    const getUser = async () => {
        setPreloader(true)
        try {
            const responseUser:IUser = await api.getUserInfo();
            setUser(responseUser)
        } catch (error) {
            console.log(error)
            notification.open({
                message: 'Ошибка при запросе данных профиля',
                duration: 2
            });
        } finally {
            setPreloader(false)
        }
    }

    const editProfile = async (values: IValuesProfile) => {
        const {name, username, email, city, phone, website, company} = values

        if (user !== undefined) {
            const userData = {
                ...user,
                name,
                username,
                email,
                address: {
                    ...user.address,
                    city
                },
                company: {
                    ...user.company,
                    name: company
                },
                phone,
                website
            }

            try {
                setPreloader(true)
                const userDataResponse = await api.updateProfileInfo(userData);
                setUser(userDataResponse)
                notification.open({
                    message: 'Профиль успешно обновлен',
                    duration: 2
                })
            } catch (error) {
                console.log(error)
                notification.open({
                    message: 'Ошибка при обновлении профиля',
                    duration: 2
                });
            } finally {
                setPreloader(false)
            }
        }
    }

    const getUsers = async () => {
        try {
            const userStorage: IUserStorage = {}
            const responseUsers:IUser[] = await api.getAllUsers();
            responseUsers.forEach((item:IUser) => {
                userStorage[item.id] = item
            })
            setUserStorage(userStorage)
        } catch (error) {
            console.log(error)
            notification.open({
                message: 'Ошибка получения списка авторов',
                duration: 2
            });
        }
    }

    const turnOnPreloader = () => setPreloader(true);
    const turnOffPreloader = () => setPreloader(false);

    let page = null
    switch (currentPage) {
        case 'profile':
            page = <Profile user={user} editProfile={editProfile} isPreloader={isPreloader}/>
            break
        case  'news':
            page = <News userStorage={userStorage} turnOnPreloader={turnOnPreloader} turnOffPreloader={turnOffPreloader} isPreloader={isPreloader}/>
            break
        case  'gallery':
            page = <Gallery turnOnPreloader={turnOnPreloader} turnOffPreloader={turnOffPreloader} isPreloader={isPreloader}/>
            break
    }

    return (
        <>
            <Menu onClick={handlePage} selectedKeys={[currentPage]} mode="horizontal" items={items} style={{fontSize: 20}} />
            {page}
        </>

    );
};

export default Main;