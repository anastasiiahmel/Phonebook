import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { message } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import {selectLogIn } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import { BtnAuth, FormLogin, GeneralInfo, InputInfo, InputPassword, TitlePage } from './LoginStyles.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(loginUser(dataUser))
    .then(() => {  
      message.success('Login success!');
    }).catch((e) => {
      message.error('Login error, Email or Password wrong!');
  });
  };

  return (
    <GeneralInfo>
      <TitlePage >Authentication</TitlePage>
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
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
          />
          <BtnAuth type="primary" htmlType="submit">
            Sign in
          </BtnAuth>
        </FormLogin>
    </GeneralInfo>
  );
};

export default LoginPage;
