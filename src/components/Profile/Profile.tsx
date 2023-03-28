import React, {FC} from "react";
import {Button, Form, Input} from "antd";
import { Typography } from 'antd';
import './Profile.css';
import Navigation from "../Main/Main";

const { Title } = Typography;

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const Profile: FC = () => (
    <>
        <Navigation/>
        <div className="profile">
            <Title className="profile__title">Профиль пользователя</Title>
            <Form
                name="basic"
                labelCol={{ span: 6, offset: 0 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="profile__content"
                disabled={false}

            >
                <Form.Item
                    label="Полное имя"
                    name="name"
                    rules={[{required: true, message: 'Введите имя пользователя'}]}
                    // wrapperCol={{ offset: 0, span: 16 }}
                    // labelCol={{ offset: 0, span: 8 }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Никнейм"
                    name="username"
                    // labelCol={{ offset: 5, span: 0 }}
                    // wrapperCol={{ offset: 5, span: 16 }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        {type: 'email', message: 'Формат почты не корректен!'},
                        {required: true, message: 'Введите свой E-mail!'}
                    ]}
                    // labelCol={{ offset: 5, span: 3 }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Город проживания"
                    name="city"
                    rules={[{required: true, message: 'Введите ваш город проживания'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Телефон"
                    name="phone"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Веб-сайт"
                    name="website"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Место работы"
                    name="company"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 11 }}
                    // labelCol={{ offset: 5, span: 3 }}
                >
                    <Button type="primary" ghost disabled={false}>
                        Редактировать
                    </Button>
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 10 }}
                >
                    <Button type="primary" htmlType="submit">
                        Сохранить изменения
                    </Button>
                </Form.Item>

            </Form>
        </div>
    </>
);

export default Profile;