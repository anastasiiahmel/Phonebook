import {  Input, Button } from 'antd';
import styled from '@emotion/styled';


const TitlePage = styled.h2`
   font-size: 35px;
   color: #fff;
   background-color: #838383;
   border-radius: 5px;
   padding: 10px 30px;
`

const GeneralInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const FormLogin = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 500px;
`

const InputPassword = styled(Input.Password)`
  width: 100%;
  max-width: 500px; 
  color: #fff;
  line-height: calc(18 / 14);
  height: 50px;
  margin-bottom: 10px;
  background-color: transparent !important;
  box-shadow: 0;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: transparent !important;
    border-color: #959583 !important;
  }

  .anticon {
    color: #959583 !important;
    padding: 15px;

    &:hover,
    &:focus,
    &:focus-within {
      color: black !important;
    }
  }
  `
  const InputInfo = styled(Input)`
  width: 100%;
  max-width: 500px; 
  color: #000;
  line-height: calc(18 / 14);
  height: 50px;
  margin-bottom: 10px;
  background-color: transparent !important;
  box-shadow: 0;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: transparent !important;
    border-color: #959583 !important;
  }

  .ant-input{
    &::placeholder {
      color: red !important;
      font-size: 18px;
      background-color: transparent !important;
    }
  };
  `

  const BtnAuth = styled(Button)`
    width: 190px;
    height: 45px;
    margin-top: 10px;
    background-color: #7c7c6a;
    font-size: 20px;
    color: #fff !important;

    &:hover,
    &:focus {
      background-color: #959583 !important;
    }
  `
;

  export  {InputPassword, InputInfo,TitlePage, GeneralInfo, BtnAuth,FormLogin };