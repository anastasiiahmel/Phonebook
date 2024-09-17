import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogIn } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import {
  BtnAuth,
  FormLogin,
  GeneralInfo,
  InputInfo,
  InputPassword,
  TitlePage,
} from './LoginStyles.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const dataUser = {
      email: formData.email,
      password: formData.password,
    };

    try {
      await dispatch(loginUser(dataUser)).unwrap();
      message.success('Login success!');
    } catch (error) {
      message.error('Login error, Email or Password wrong!');
    }
  };

  return (
    <GeneralInfo>
      <TitlePage>Authentication</TitlePage>
      <FormLogin onSubmit={handleSubmit}>
        <InputInfo
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputPassword
          placeholder="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <BtnAuth type="primary" htmlType="submit">
          Sign in
        </BtnAuth>
      </FormLogin>
    </GeneralInfo>
  );
};

export default LoginPage;
