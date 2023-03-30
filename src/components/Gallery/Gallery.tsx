import {List, notification} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import {IPicture} from "../../interfaces/interfaces";
import {api} from "../../utils/api";
import Preloader from "../Preloader/Preloader";
import {useScroll} from "../../utils/scrollIntersection";
import GalleryItem from "../GalleryItem/GalleryItem";
import {limitPicture} from "../../utils/constants";

interface ListProps {
    turnOnPreloader: () => void,
    turnOffPreloader: () => void,
    isPreloader: boolean
}

const Gallery: FC<ListProps> = ({ turnOnPreloader, turnOffPreloader, isPreloader }) => {

    const [pictures, setPictures] = useState<IPicture[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [isPageEnd, setIsPageEnd] = useState<boolean>(false);

    const {ref, isIntersecting} = useScroll()

    useEffect(() => {
        updatePictures()
    }, [offset])

    useEffect(() => {
        if (isIntersecting && pictures.length > 0 && !isPageEnd) {
            setOffset(offset + limitPicture)
        }
    }, [isIntersecting, isPageEnd])


    const updatePictures = async () => {
        try {
            turnOnPreloader()
            const responsePictures:IPicture[] = await api.getPictures(offset, limitPicture);
            setPictures((pictures: IPicture[]) => [...pictures, ...responsePictures]);
            setIsPageEnd(responsePictures.length < limitPicture)
        } catch (error) {
            console.log(error)
            notification.open({
                message: 'Ошибка при запросе изображений',
                duration: 2
            });
        } finally {
            turnOffPreloader()
        }
    }

    return (
        <>
            <List
                itemLayout="vertical"
                dataSource={pictures}
                style={{paddingTop: 30}}
                className="list"
                renderItem={(item, index) => (

                    <div className="list__item">
                        <GalleryItem url={item.url}/>
                    </div>
                )}

            />
            <div ref={ref}></div>
            <Preloader isPreloader={isPreloader}/>
    </>
    );
}

export default Gallery;