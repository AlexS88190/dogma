import {Card, Space} from 'antd';
import React, {FC} from 'react';
import {INews, IUserStorage} from "../../interfaces/interfaces";
import Preloader from "../Preloader/Preloader";

interface ListProps {
    newsItem: INews
    userStorage: IUserStorage,
}

const NewsItem: FC <ListProps> = ({ newsItem, userStorage}) => {

    const authorContainer = <p>{userStorage[newsItem.userId].name}</p>


    return (
    <Space direction="vertical" size={16}>
        <Card title={newsItem.title} size="small" extra={authorContainer} style={{ width: "100%" }} >
            <p>{newsItem.body}</p>

        </Card>
    </Space>
    );
}

export default NewsItem;