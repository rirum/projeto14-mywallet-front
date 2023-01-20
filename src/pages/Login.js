import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";



export default function Login(){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ status, setStatus ] = useState(false); //travar botoes 
   
    const navigate = useNavigate();

    function signIn(event) {
        event.preventDefault();
        setStatus(true);

        const object = {
            email,
            password,
        }
    
        try{
            const URL=('localhost:5000/sign-in')
            const response =  axios.post((URL), object);
            console.log(response.data);
            navigate("/Home");
            
        } catch (error) {
            alert(error.response.data.message)
            window.location.reload();    
        }

    }

   


    return(
        <>
        <ContainerLogo>
            <h1> MyWallet</h1>
        </ContainerLogo>
        <WrapperForm>
        <form disabled={status} onSubmit={signIn}>
        <LoginInput data-test="email" type="email" placeholder="E-mail" required disabled={status} value={email} onChange={e => setEmail(e.target.value)}/>
        <LoginInput data-test="password" type="password" placeholder="Senha" required disabled={status} value={password} onChange={e => setPassword(e.target.value)}/>
        
        <LoginButton data-test="sign-in-submit" type="submit" disabled={status}>Entrar</LoginButton>
        </form>
        </WrapperForm>

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
const WrapperForm = styled.div`
width: 326px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
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
    padding-left: 10px;
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
