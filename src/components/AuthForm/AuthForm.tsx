import React, {FC} from 'react';
import './AuthForm.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;



interface AuthFormProps {
    handleLogin: () => void,
}

interface IValues {
    email: string,
    password: string,
    remember: boolean
}



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const AuthForm: FC <AuthFormProps> = ({ handleLogin }) => {

    const handleSubmit = (values: IValues) => {
        const successAuth = values.email === process.env.REACT_APP_LOGIN && values.password === process.env.REACT_APP_PASSWORD;
        if (successAuth) {
            handleLogin()
        }
    };


    return (


        <div className="authform">
            <Title className="authform__title">Авторизация</Title>
            <Form
                name="basic"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="authform__content"

            >
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        {type: 'email', message: 'Формат почты не корректен!'},
                        {required: true, message: 'Введите свой E-mail!'}
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: 'Введите пароль!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
                    <Checkbox>Запомнить</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default AuthForm;