import {Card, Space} from 'antd';
import React, {FC} from 'react';

const NewsItem: FC = () => (
    <Space direction="vertical" size={16}>
        <Card title="Default size card" size="small" extra={<p>Автор: Graham</p>} style={{ width: "100%" }} >
            <p>eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam lor\nut et est repudiandae\nest voluptatem vel debitis et magnam eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam lor\nut et est repudiandae\nest voluptatem vel debitis et magnam eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam</p>

        </Card>
    </Space>
);

export default NewsItem;