import {Image} from 'antd';
import React, {FC} from 'react';

interface GalleryItemProps {
        url: string
}

const GalleryItem: FC <GalleryItemProps> = ({ url }) => (
        <Image
            width={400}
            src={url}
            style={{marginBottom: 20}}
        />
);

export default GalleryItem;