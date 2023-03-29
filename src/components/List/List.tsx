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

interface ICounter {
    start: number,
    limit: number
}

const _List: FC<ListProps> = ({ currentPage, userStorage, turnOnPreloader, turnOffPreloader, isPreloader }) => {

    const [news, setNews] = useState<INews[]>([]);

    const [counter, setCounter] = useState<ICounter>({start: 0, limit: 12});



    useEffect(() => {
        getNews(counter.start, counter.limit)
    }, [counter])


    const getNews = async (start: number, limit: number) => {
        turnOnPreloader()
        try {
            const responseNews:INews[] = await api.getNews(start, limit);
            console.log(responseNews)
            setNews(responseNews)
            turnOffPreloader()

        } catch (error) {
            console.log(error)
            turnOffPreloader()
        }
    }

    const getNumberNews = () => {
        setCounter(
            {
                ...counter,
                limit: counter.limit + 12
            }
        )
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
                            ? <NewsItem newsItem={item} userStorage={userStorage}/>
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