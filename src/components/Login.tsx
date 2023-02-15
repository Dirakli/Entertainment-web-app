import styled from "styled-components";
import logo from '../images/logo.svg';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import Home from "./Home";


function Login({ click, setClick, handler, homeFunc, openHome }: { openHome: any, homeFunc: any, click: any, setClick?: any, handler: any }) {
    const [email, setEmail] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    const [error, setError] = useState<any>(false);

    function handlerSubmit(e: any) {
        e.preventDefault();
        if (email.length == 0 || password.length == 0) {
            setError(true);
            console.log(error);
        }
        if (email && password) {
            console.log("email:", email, "password:", password)
        }
    }

    function goToHome() {
        if (email.length != 0 && email.includes("@") && password.length != 0) {
            return homeFunc();
        }
    }

    return (
        <MainWrapper>
            <Image src={logo} />
            <Wrapper>
                <LoginWord>Login</LoginWord>
                <Form onSubmit={handlerSubmit}>
                    <EmailDiv>
                        <EmailInput onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                        {error && email.length <= 0 ? <Emptywarning>Can`t be empty</Emptywarning> : ''}
                    </EmailDiv>
                    <Line />
                    <PasswordDiv>
                        <PasswordInput onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        {error && password.length <= 0 ? <Emptywarning>Can`t be empty</Emptywarning> : ''}
                    </PasswordDiv>
                    <Line />
                    <Button onClick={goToHome} >Login to your account</Button>
                </Form>
                <AccoutnQuestion>Don`t have an account? <Signup onClick={handler} >Sign Up</Signup></AccoutnQuestion>
            </Wrapper>
        </MainWrapper>
    )
}

const Emptywarning = styled.label`
    font-size: 13px;
    line-height: 16.38px;
    color: #FC4747;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
`

const EmailDiv = styled.div`
width: 279px;
height: 37px;
margin-top: 40px;
padding-left: 16px;
padding-right: 16px;
display: flex;
align-items: center;
justify-content: space-between;

@media(min-width: 768px) {
    width: 339px;
}
`

const PasswordDiv = styled.div`
width: 279px;
height: 37px;
margin-top: 10px;
padding-left: 16px;
padding-right: 16px;
display: flex;
align-items: center;
justify-content: space-between;

@media(min-width: 768px) {
    width: 339px;
}
`

const Signup = styled.span`
    cursor: pointer;
    font-size: 15px;
    color: #FC4747;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 18.9px;
`

const AccoutnQuestion = styled.p`
    font-size: 15px;
    color: #FFFFFF;
    margin-top: 24px;
    margin-left: 32px;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 18.9px;
    
    @media (min-width: 768px) {
        margin-left: 61px;
    }
`


const Button = styled.button`
    :hover {
    background-color: #FFFFFF;
    color: #161D2F;
    }
    cursor: pointer;
    width: 279px;
    height: 48px;
    border: none;
    border-radius: 6px;
    background-color: #FC4747;
    margin-top: 40px;
    color: #FFFFFF;
    font-size: 15px;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 18.9px;

    @media (min-width: 768px) {
        width: 336px;
    }
`

const LoginWord = styled.h1`
    font-size: 32px;
    color: #FFFFFF;
    font-family: 'Outfit', sans-serif;
    line-height: 40.32px;
    letter-spacing: -0.5px;
    font-weight: 300;
`

const Line = styled.div`
    width: 279px;
    height: 1px;
    background-color: #5A698F;
    margin-top: 15px;

    @media (min-width: 768px) {
        width: 336px;
    }
`

const PasswordInput = styled.input`
    width: 150px;
    height: 37px;
    border: none; 
    background: none;
    font-size: 15px;
    outline: none;
    color: #FFFFFF;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 18.9px;

    @media (min-width: 768px) {
        width: 200px;
    }
`

const EmailInput = styled.input`
    width: 150px;
    height: 37px;
    border: none;
    background: none;
    font-size: 15px;
    outline: none;
    color: #FFFFFF;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 18.9px;

    @media (min-width: 768px) {
        width: 200px;
    }
`

const Form = styled.form`
    width: 279px;

    @media (min-width: 768px) {
        width: 336px;
    }
`

const Wrapper = styled.div`
    margin-top: 58.4px;
    width: 327px;
    height: 365px;
    border-radius: 10px;
    background-color: #161D2F;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 768px) {
        width: 400px;
        height: 373px;
        border-radius: 20px;
        margin-top: 72.4px;
        padding-top: 32px;
        padding-left: 32px;
        padding-right: 32px;
    }

`
const Image = styled.img`
    margin-top: 48px;
    width: 32px;
    height: 25.6px;
`

const MainWrapper = styled.div`
  background: #10141E;
  width: 100%;
  height: 100vh;
  display: flex; 
  align-items: center;
  flex-direction: column;
`


export default Login;
