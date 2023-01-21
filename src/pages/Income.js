import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Entry(){
const [value, setValue] = useState("");
const [ description, setDescription] = useState("");
const navigate = useNavigate();

function createEntry(e){
    e.preventDefault();
}

    return(
    <>
    <StyledHeader>
        <p>Nova entrada</p>
    </StyledHeader>
    <WrapperForm>
    <form onSubmit={(e) => createEntry(e)}>
    <EntryInput value={value} onChange={e => setValue(e.target.value)} type="text" data-test="registry-amount-input" placeholder="Valor"/>
    <EntryInput value={description} onChange={e=>setDescription(e.target.value)} type="text" data-test="registry-name-input" placeholder="Descrição"/>
    <LoginButton type="submit" data-test="registry-save">Salvar entrada</LoginButton>
    </form>
    </WrapperForm>
    </>
    )
}


const StyledHeader = styled.div`
width: 375px;
display: flex;
justify-content: space-between;
margin-top: 25px;
margin-right: 24px;
margin-bottom: 40px;
p{
    margin-left: 24px;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
}
`
const WrapperForm = styled.div`
width: 326px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const EntryInput = styled.input`
height: 58px;
width: 326px;
border-radius: 5px;
border: 1px solid #8C11BE;
background-color: #fff;
margin-top: 12px;
margin-right: 24px;
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
margin-right:24px;
`