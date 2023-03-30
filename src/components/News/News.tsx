import {List, notification} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import {INews, IUserStorage} from "../../interfaces/interfaces";
import {api} from "../../utils/api";
import Preloader from "../Preloader/Preloader";
import {useScroll} from "../../utils/scrollIntersection";
import {limitNews} from "../../utils/constants";

interface ListProps {
    userStorage: IUserStorage,
    turnOnPreloader: () => void,
    turnOffPreloader: () => void,
    isPreloader: boolean
}

const News: FC<ListProps> = ({ userStorage, turnOnPreloader, turnOffPreloader, isPreloader }) => {

    const [news, setNews] = useState<INews[]>([]);
    const [authorId, setAuthorId] = useState<number | undefined>(undefined);
    const [offset, setOffset] = useState<number>(0);
    const [isPageEnd, setIsPageEnd] = useState<boolean>(false);

    const {ref, isIntersecting} = useScroll()

    useEffect(() => {
        updateNews()
    }, [offset, authorId])

    useEffect(() => {
        if (isIntersecting && news.length > 0 && !isPageEnd) {
            setOffset(offset + limitNews)
        }
    }, [isIntersecting, isPageEnd])


    const updateNews = async () => {
        try {
            turnOnPreloader()
            const responseNews:INews[] = await api.getNews(offset, limitNews, authorId);
            setNews((news: INews[]) => [...news, ...responseNews]);
            setIsPageEnd(responseNews.length < limitNews)
        } catch (error) {
            console.log(error)
            notification.open({
                message: 'Ошибка при запросе новостей',
                duration: 2
            });
        } finally {
            turnOffPreloader()
        }
    }

    const filterNews = (newAuthorId: number) => {
        if (newAuthorId !== authorId) {
            setNews([])
            setAuthorId(newAuthorId)
            setOffset(0)
            setIsPageEnd(false)
        } else {
            notification.open({
                message: 'Фильтрация по данному автору уже выбрана',
                duration: 2
            });
        }
    }

    return (
        <>
            <List
                itemLayout="vertical"
                dataSource={news}
                style={{paddingTop: 30}}
                className="list"
                renderItem={(item, index) => (

                    <div className="list__item">
                        <NewsItem newsItem={item} userStorage={userStorage} filterNews={filterNews}/>
                    </div>
                )}

            />
            <div ref={ref}></div>
            <Preloader isPreloader={isPreloader}/>
    </>
    );
}

export default News;