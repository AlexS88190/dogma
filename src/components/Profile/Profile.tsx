import React, {FC} from "react";
import {Button, Form, Input} from "antd";
import { Typography } from 'antd';
import './Profile.css';
import {IUser, IValuesProfile} from "../../interfaces/interfaces";
import Preloader from "../Preloader/Preloader";

const { Title } = Typography;

interface ProfileProps {
    user: IUser | undefined,
    isPreloader: boolean,
    editProfile: (values: IValuesProfile) => Promise<void>
}

const Profile: FC <ProfileProps> = ({ user, isPreloader, editProfile }) => {

    return (
            <div className="profile">
                <Title className="profile__title">Профиль пользователя</Title>
                <Form
                    name="basic"
                    labelCol={{ span: 6, offset: 0 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={editProfile}
                    autoComplete="off"
                    className="profile__content"
                    disabled={false}
                    fields={[
                        {name:["name"], value: user?.name},
                        {name:["username"], value: user?.username},
                        {name:["email"], value: user?.email},
                        {name:["city"], value: user?.address.city},
                        {name:["phone"], value: user?.phone},
                        {name:["website"], value: user?.website},
                        {name:["company"], value: user?.company.name}
                    ]}
                >
                    <Form.Item
                        label="Полное имя"
                        name="name"
                        rules={[{required: true, message: 'Введите имя пользователя'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Никнейм"
                        name="username"
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
                    >
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 10 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Сохранить изменения
                        </Button>
                    </Form.Item>
                </Form>
                <Preloader isPreloader={isPreloader} />
            </div>

    );
}

export default Profile;