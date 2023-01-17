import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";


export default function App(){
    return (
        <BrowserRouter>

        <ContainerApp>
            <Routes>
            
            <Route path="/" element={<Login/>}/>
            <Route/>
            </Routes>
        </ContainerApp>

        </BrowserRouter>
        
    )
}


const ContainerApp = styled.div`
width:100vw;
min-height: 100vh;
background-color: #8C11BE;
margin: 0px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
font-family: 'Raleway', sans-serif;

`
