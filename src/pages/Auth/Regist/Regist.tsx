import { FC, useState } from "react";

import { Button, Form, Input } from "antd";

import styles from "./Regist.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const Regist: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (copyPassword !== password) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/auth");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch(() => alert("Эта почта уже занята!"));
  };

  return (
    <Form
      onSubmitCapture={register}
      className={styles.registContainer}
      {...formItemLayout}
      form={form}
      name="register"
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
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
        label="Password"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите свой пароль!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Пожалуйста, подтвердите свой пароль!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Новый пароль, который вы ввели, не соответствует!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
