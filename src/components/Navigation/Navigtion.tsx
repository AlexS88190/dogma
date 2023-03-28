import React, {FC, useState} from 'react';
import { ChromeFilled, ProfileFilled, PictureFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

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

const Navigation: FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (event) => {
        console.log('click ', event);
        setCurrent(event.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{fontSize: 20}} />;
};

export default Navigation;