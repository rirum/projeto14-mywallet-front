import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine,RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../AppContext/Context";
import axios from "axios";


export default function Home(){
    const [ transactions, setTransactions ] = useState([]);
    const [balanceValue, setBalanceValue] = useState(0);
    const { user, setUser} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/transactions`;
        const configuration = {
            headers: {
                Authorization: `Bearer ${user.token}`
            },
        };

        axios
        .get(URL, configuration)
        .then((response) => {
            setBalanceValue(response.data.totalBalance);
            setTransactions(response.data.transactions);
        })
        .catch((error) => {
            setTransactions([]);
            alert(error);
            navigate("/");
        });
    }, [user, navigate,setTransactions,setBalanceValue]);


    const onLogout = () => {
        setUser(null);
        navigate("/");
    }
    return(
        <>
        <StyledHeader>

            <p>Olá, {user.name}</p>
            
            <Link to="/">
            <ButtonLogout className="no-style" type="button" data-test="logout" onClick={onLogout}>
           <RiLogoutBoxRLine color="white" size={26}/>
           </ButtonLogout>
           </Link>
        </StyledHeader>

        {/* <RegistryBoxEmpty>
           
           
        </RegistryBoxEmpty> */}

        <RegistryBox>
            {transactions.length === 0 && (
            <h1 data-test="">Não há registros de entrada ou saída</h1>
            )}
            {transactions.length > 0 &&
            transactions.map((trc) => (
                <Entry>
                <StyleDate>{trc.date}</StyleDate>
                <StyleDescription data-test="registry-name">{trc.description}</StyleDescription>
                <WrapperValue>
                <StyleValue type={trc.type} data-test="registry-amount">{trc.value}</StyleValue> {" "}
                </WrapperValue>
                </Entry>

            ))}
                {transactions.length > 0 && (
                            <Balance>
                            <p>Saldo</p>
                            <BalanceValue data-test="total-amount" total={balanceValue}>{balanceValue}</BalanceValue>
                            </Balance>
                )}            
               

            
        </RegistryBox>



        <WrapperBox>
            
            <Box data-test="new-income" onClick={() => navigate("/nova-entrada")}><RiAddCircleLine color="white" size={20}/> 
            <p>Nova entrada</p>
            </Box>
            
           
            <Box data-test="new-expense" onClick={() => navigate("/nova-saida")}>
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

const ButtonLogout = styled.button`
background-color: #8C11BE;
border: 1px solid #8C11BE;
`

const RegistryBox = styled.div`
width: 326px;
height: 446px;
background-color: #fff;
border-radius: 5px;
margin-top: 22px;
display: flex;
flex-direction: column;
position: relative;
overflow: auto;
::-webkit-scrollbar {
    width: 0px;
}
h1{
    width: 180px;
    height: 46px;
    color: #868686;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 200px;
}
`
// const EntryWrapper = styled.div`
// overflow-y: scroll;
// `
const Entry=styled.div`
width: 330px;
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
color: ${(props) => (props.type === "entry" ? "#03AC00" : "#c70000")};

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
position: sticky;
align-items: center;
bottom: 0;
left: 0;
p{
    height: 30px;
    margin-left: 15px;
    font-size:17px;
    font-weight: 700;
    text-align: center;
    color: #000;
}
`

const BalanceValue = styled.div`
height: 30px;
font-size: 17px;
font-weight: 400;
margin-right: 15px;
color: ${(props) => (props.total > 0 ? "#03ac00" : "#c70000")}; 

`