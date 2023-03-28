import React, {FC} from 'react';
import './AuthForm.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const AuthForm: FC = () => (
    <div className="authform">
        <Title className="authform__title">Авторизация</Title>
        <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="authform__content"

        >
            <Form.Item
                label="Имя"
                name="username"
                rules={[{ required: true, message: 'Введите имя!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                <Checkbox>Запомнить</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    </div>

);

export default AuthForm;