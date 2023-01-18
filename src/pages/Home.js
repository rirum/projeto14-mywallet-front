import styled from "styled-components";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine,RiCloseLine } from "react-icons/ri";

export default function Home(){
    return(
        <>
        <StyledHeader>
            <p>Olá, Fulano</p>
           <RiLogoutBoxRLine color="white" size={26}/>
        </StyledHeader>

        {/* <RegistryBoxEmpty>
            <p>Não há registros de entrada ou saída</p>
           
        </RegistryBoxEmpty> */}

        <RegistryBox>
        <EntryWrapper>

                <Entry>
                <StyleDate>30/11</StyleDate>
                <StyleDescription>Compras churrascoooo</StyleDescription>
                <WrapperValue>
                <StyleValue>39,90</StyleValue> <RiCloseLine color="#C6C6C6"/>
                </WrapperValue>
                </Entry>




        </EntryWrapper>







                
                <Balance>
                    <p>Saldo</p>
                    <BalanceValue>4856,09</BalanceValue>
                </Balance>

            
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

const RegistryBoxEmpty = styled.div`
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
const RegistryBox = styled.div`
width: 326px;
height: 446px;
background-color: #fff;
border-radius: 5px;
margin-top: 22px;
display: flex;

position: relative;
::-webkit-scrollbar {
    width: 0px;
}
`
const EntryWrapper = styled.div`
overflow-y: scroll;
`
const Entry=styled.div`
width: 300px;
margin-top:22px;
margin-left: 12px;
margin-right: 12px;
margin-bottom: 20px;
display: flex;
justify-content: space-around;



`

const StyleDate = styled.p`
width:48px;
font-size: 16px;
color: #c6c6c6;
`
const StyleDescription = styled.div`
width: 160px;
justify-content: flex-start;
margin-left: 5px;
word-break: break-word;
`
const WrapperValue = styled.div`
display: flex;
width: 90px;
margin-left: 20px;
`
const StyleValue=styled.p`
width: 70px;
color: #C70000; //#03AC00
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

const Balance = styled.div`
width: 326px;
height: 40px;
background-color: #fff;
display: flex;
justify-content:space-between;
position: absolute;
align-items: center;
bottom: 0;
left: 0;

z-index: 2;
p{
    margin-left: 15px;
    font-size:17px;
    font-weight: 700;
    color: #000;
}
`

const BalanceValue = styled.div`
font-size: 17px;
font-weight: 400;
margin-right: 15px;
color: #03AC00; //#C70000
`