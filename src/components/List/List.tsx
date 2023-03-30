import {Button, List} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import PhotoItem from "../PhotoItem/PhotoItem";
import NewsItem from "../NewsItem/NewsItem";
import {INews, IUser, IUserStorage} from "../../interfaces/interfaces";
import {api} from "../../utils/api";
import Preloader from "../Preloader/Preloader";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

interface ListProps {
    currentPage: string,
    userStorage: IUserStorage,
    turnOnPreloader: () => void,
    turnOffPreloader: () => void,
    isPreloader: boolean
}


const _List: FC<ListProps> = ({ currentPage, userStorage, turnOnPreloader, turnOffPreloader, isPreloader }) => {

    const [news, setNews] = useState<INews[]>([]);
    const [authorId, setAuthorId] = useState<number | undefined>(undefined);

    const [limit, setLimit] = useState<number>(12);



    useEffect(() => {
        if (authorId) {
            getSortNews(authorId, limit)
        } else {
            getNews(limit)
        }
    }, [limit])


    const getNews = async (limit: number) => {
        turnOnPreloader()
        try {
            const responseNews:INews[] = await api.getNews(limit);
            setNews(responseNews)
            turnOffPreloader()

        } catch (error) {
            console.log(error)
            turnOffPreloader()
        }
    }

    const getNumberNews = () => {
        setLimit(limit + 12)
    }


    const getSortNews = async (authorId: number, limit: number) => {
        turnOnPreloader()
        try {
            const responseNews: INews[] = await api.getNewsUser(authorId, limit);
            setNews(responseNews)
            turnOffPreloader()

        } catch (error) {
            console.log(error)
            turnOffPreloader()
        }
    }

    const sortNews = (authorName: string) => {
        let authorId!: number
        for (const key in userStorage) {
            if (userStorage[key].name === authorName) {
                authorId = userStorage[key].id
                setAuthorId(authorId)
            }
        }
        getSortNews(authorId, limit)
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
                        {currentPage === 'news'
                            ? <NewsItem newsItem={item} userStorage={userStorage} sortNews={sortNews}/>
                            : <PhotoItem/>
                        }
                    </div>


                    // <List.Item>
                    //     <List.Item.Meta
                    //         title={item.title}
                    //         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    //     />
                    // </List.Item>

                    //


                )}

            />
            <Preloader isPreloader={isPreloader}/>
            <Button type="primary" ghost onClick={getNumberNews}>Редактировать</Button>
    </>
    );
}

export default _List;