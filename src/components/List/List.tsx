import {List} from 'antd';
import React, {FC} from 'react';
import PhotoItem from "../PhotoItem/PhotoItem";
import NewsItem from "../NewsItem/NewsItem";

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
    currentPage: string
}

const _List: FC<ListProps> = ({ currentPage }) => (

        <List
            itemLayout="vertical"
            dataSource={data}
            style={{paddingTop: 30}}
            className="list"
            renderItem={(item, index) => (
                <div className="list__item">
                    {currentPage === 'news'
                        ? <NewsItem/>
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
);

export default _List;