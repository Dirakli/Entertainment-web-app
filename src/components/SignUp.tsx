import styled from "styled-components";
import logo from '../images/logo.svg';
import { useState } from "react";

function SignUp ({ click, setClick, handler}: {click: any, setClick?: any, handler: any }) {
    const [email, setEmail] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    const [repeatPassword, setRepeatPassword] = useState<any>("")
    const [error, setError] = useState<any>(false);

    function handlerSubmit(e: any) {
        e.preventDefault();
        if(email.length==0 || password.length==0 || repeatPassword.length==0) {
            setError(true);
            console.log(error);
        }
        if (email&&password&&repeatPassword) {
            console.log("email:", email, "password:", password, "repeatPassword:", repeatPassword)
        }
    }

    function createAccount() {
            if(email !=0 && email.includes("@") && password == repeatPassword && password.length != 0 && repeatPassword !=0){
                return handler()
            }
    }

    return (
        <MainWrapper>
            <Image src={logo}/>
            <Wrapper>
                <LoginWord>Sign Up</LoginWord>
                <Form onSubmit={handlerSubmit} >
                    <EmailDiv>
                    <EmailInput onChange={e => setEmail(e.target.value)} placeholder="Email address"/>
                    {error && email.length<=0 ? <Emptywarning>Can`t be empty</Emptywarning> : ''}
                    </EmailDiv>
                    <Line/>
                    <PasswordDiv>
                    <PasswordInput onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                    {error && password.length<=0 ? <Emptywarning>Can`t be empty</Emptywarning> : ''}
                    </PasswordDiv>
                    <Line/>
                    <RepeatPasswordDiv>
                    <RepeatPasswordIniput onChange={e => setRepeatPassword(e.target.value)} placeholder="Repeat Password"/>
                    {error && repeatPassword.length<=0 ? <Emptywarning>Can`t be empty</Emptywarning> : ''}
                    </RepeatPasswordDiv>
                    <Line/>
                    <Button onClick={createAccount} >Create an account</Button>
                </Form>
                <AccoutnQuestion>Alread have an account? <Signup onClick={handler}>Login</Signup></AccoutnQuestion>
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

@media (min-width: 768px) {
    width: 336px;
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

@media (min-width: 768px) {
    width: 336px;
}
`
const RepeatPasswordDiv = styled.div`
width: 279px;
height: 37px;
margin-top: 10px;
padding-left: 16px;
padding-right: 16px;
display: flex;
align-items: center;
justify-content: space-between;

@media (min-width: 768px) {
    width: 336px;
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
`

const Line = styled.div`
    width: 279px;
    height: 1px;
    background-color: #5A698F;
    margin-top: 10px;

    @media (min-width: 768px) {
        width: 336px;
    }
`

const RepeatPasswordIniput = styled.input`
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
    height: 420px;
    border-radius: 10px;
    background-color: #161D2F;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-left: 24px;

    @media (min-width: 768px) {
    width: 400px;
    height: 418px;
    border-radius: 20px;
    padding-top: 32px;
    padding-left: 32px;
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


export default SignUp;
