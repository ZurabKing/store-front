import { FC, useState } from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

import styles from "./Login.module.css";

export const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch(() => alert("Мы не смогли найти такой аккаунт!"));
  };

  return (
    <Form
      name="normal_login"
      className={styles.loginContainer}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Введенные данные недействительны!",
          },
          {
            required: true,
            message: "Пожалуйста, введите свой адрес электронной почты!",
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Пожалуйста, введите свой пароль!" },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button
          onClick={login}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Войти
        </Button>
        или <Link to="/auth/regist">Зарегистрируйтесь Сейчас!</Link>
      </Form.Item>
    </Form>
  );
};
