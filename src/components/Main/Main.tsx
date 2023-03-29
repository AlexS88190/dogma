import React, {FC, useState} from 'react';
import { ChromeFilled, ProfileFilled, PictureFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Button, Menu} from 'antd';
import List from '../List/List'
import Profile from "../Profile/Profile";

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


    const [currentPage, setCurrentPage] = useState<string>('profile');

    const handlePage: MenuProps['onClick'] = (event) => {
        console.log('click ', event);
        setCurrentPage(event.key);
    };

    return (
        <>
            <Menu onClick={handlePage} selectedKeys={[currentPage]} mode="horizontal" items={items} style={{fontSize: 20}} />
            {currentPage === 'profile'
                ? <Profile/>
                : <List currentPage={currentPage}/>
            }
        </>

    );
};

export default Main;