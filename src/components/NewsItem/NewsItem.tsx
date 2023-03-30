import {Button, Card, Space} from 'antd';
import React, {FC} from 'react';
import {INews, IUserStorage} from "../../interfaces/interfaces";

interface ListProps {
    newsItem: INews
    userStorage: IUserStorage,
    sortNews: (authorName: string) => void
}

const NewsItem: FC <ListProps> = ({ newsItem, userStorage, sortNews}) => {

    const handleChangeSortNews = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLButtonElement;
        sortNews(target.innerHTML)
    }

    const authorContainer = <Button type="link" onClick={handleChangeSortNews}>{userStorage[newsItem.userId].name}</Button>

    return (
    <Space direction="vertical" size={16}>
        <Card title={newsItem.title} size="small" extra={authorContainer} style={{ width: 1200 }} >
            <p>{newsItem.body}</p>

        </Card>
    </Space>
    );
}

export default NewsItem;