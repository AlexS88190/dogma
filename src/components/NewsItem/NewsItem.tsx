import {Button, Card, Space} from 'antd';
import React, {FC} from 'react';
import {INews, IUserStorage} from "../../interfaces/interfaces";

interface NewsItemProps {
    newsItem: INews
    userStorage: IUserStorage,
    filterNews: (authorId: number) => void
}

const NewsItem: FC <NewsItemProps> = ({ newsItem, userStorage, filterNews}) => {

    const handleChangeSortNews = () => {
        filterNews(newsItem.userId)
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