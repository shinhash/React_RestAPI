import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: slateblue;
    border: none;
    border-radius: 25px;
`;
const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const InputArea = styled.div`
    text-align: center;
    margin-top: 80px;
    padding-right: 25px;
`;
const Input = styled.input`
    width: 150px;
    height: 100px;
    border: none;
    border-radius: 25px;
    font-size: 20px;
    font-weight: bold;
    color: slateblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    &:hover{
        opacity: 0.8;
    }
`;
const Spacer = styled.span`
    margin-left: 10px;
`;

export default function Home(){

    const navigator = useNavigate();
    /**
     * fuction
     */
    const boardNav = () => {
        navigator("/board");
    }
    const chatNav = () => {
        navigator("/chat");
    }

    return(
        <Wrapper>
            <Title>HASH '#'</Title>
            <InputArea>
                <Input type="button" value="BOARD" onClick={boardNav} />
                <Spacer />
                <Input type="button" value="CHAT" onClick={chatNav}/>
            </InputArea>
        </Wrapper>
    );
}