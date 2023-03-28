import React, {FC, useState} from 'react';
import { ChromeFilled, ProfileFilled, PictureFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import List from '../List/List'
import Profile from "../Profile/Profile";

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

    // {
    //     label: (
    //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //             Navigation Four - Link
    //         </a>
    //     ),
    //     key: 'alipay',
    // },
];

const Main: FC = () => {
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