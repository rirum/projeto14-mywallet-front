import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    return(
        <>
        <ContainerLogo>
            <h1> MyWallet</h1>
        </ContainerLogo>

        <LoginInput data-teste="email" type="email" placeholder="E-mail" required/>
        <LoginInput data-teste="password" type="password" placeholder="Senha" required/>

        <LoginButton data-test="sign-in-submit">Entrar</LoginButton>


        <Link to="/cadastro" style={{textDecoration:'none'}}>
        <ContainerSignUp>Primeira vez? Cadastre-se!</ContainerSignUp>
        </Link>
        </>
    )
}


const ContainerLogo = styled.div`
font-family: 'Saira Stencil One', cursive;
font-size: 32px;
font-weight: 400;
color: #fff;
margin-top:159px;
margin-bottom: 24px;
`
const LoginInput = styled.input`
height: 58px;
width: 326px;
border-radius: 5px;
border: 1px solid #8C11BE;
background-color: #fff;
margin-top: 12px;
box-sizing: border-box;
padding-left: 15px;
font-size: 15px;
&::placeholder{
    font-size:20px;
    color: #000;
    padding-left: 15px;
}
`
const LoginButton = styled.button`
height: 58px;
width: 326px;
background-color: #A328D6;
border: 1px solid #A328D6;
border-radius: 5px;
color: #fff;
font-size: 20px;
margin-top: 13px;
`
const ContainerSignUp = styled.div`
font-size: 15px;
font-weight: 700;
color: #fff;
margin-top: 36px;
`
