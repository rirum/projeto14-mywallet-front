import styled from "styled-components";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

export default function Home(){
    return(
        <>
        <StyledHeader>
            <p>Olá, Fulano</p>
           <RiLogoutBoxRLine color="white" size={26}/>
        </StyledHeader>
        <RegistryBox>
            <p>Não há registros de entrada ou saída</p>
        </RegistryBox>

        <WrapperBox>
            <Box><RiAddCircleLine color="white" size={20}/> 
            <p>Nova entrada</p>
            </Box>
            <Box>
            <RiIndeterminateCircleLine color="white" size={20}/>
            <p>Nova saída</p>
            </Box>
        </WrapperBox>
        </>
    )
}




const StyledHeader = styled.div`
width: 375px;
display: flex;
justify-content: space-between;
margin-top: 25px;
margin-right: 24px;
p{
    margin-left: 24px;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
}
`

const RegistryBox = styled.div`
width: 326px;
height: 446px;
background-color: #fff;
border-radius: 5px;
margin-top: 22px;
display: flex;
align-items: center;
justify-content: center;

p{
    width: 180px;
    height: 46px;
    color: #868686;
    font-size: 20px;
    text-align: center;
   
}

`
const WrapperBox = styled.div`
display: flex;
`
const Box = styled.div`
width: 155px;
height:114px;
background-color: #A328D6;
margin-right: 7px;
margin-left: 7px;
margin-top: 13px;
padding-top: 10px;
padding-left: 9px;
box-sizing: border-box;
border-radius: 5px;
p{
    font-size: 17px;
    color: #fff;
    margin-top: 32px;
    width: 60px;
    font-weight: 700;
}
`
