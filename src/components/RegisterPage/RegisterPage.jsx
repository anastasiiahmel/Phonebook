import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { selectLogIn } from 'redux/auth/selectors';
import { BtnAuth, FormLogin, GeneralInfo, InputInfo, InputPassword, TitlePage } from 'components/LoginPage/LoginStyles.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,

    }

    dispatch(registerUser(dataUser)).unwrap()
      .then(() => {
        message.success('Register success!');
        return navigate('/contacts');
      }).catch((e) => {
        message.error('Duplicate, Email !');
    });
  };
  
  return (
    <GeneralInfo>
      <TitlePage>Registration</TitlePage>
      <FormLogin onSubmit={handleSubmit}>
        <InputInfo
         placeholder="Name"
         type="text"
         name="name"
         value={formData.name}
         onChange={handleChange}
       />
          <InputInfo
            placeholder="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputPassword
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <BtnAuth type="primary" htmlType='submit'>
            Sign up
          </BtnAuth>
          </FormLogin>
    </GeneralInfo>
  );
};

export default RegisterPage;