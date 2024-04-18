import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * style components
 */
const Wrapper = styled.div`
    min-width: 640px;
    min-height: 360px;
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
    padding-right: 20px;
`;
const Input = styled.input`
    width: 150px;
    height: 100px;
    border: none;
    border-radius: 20px;
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

export default function Init(){

    const navigator = useNavigate();
    /**
     * fuction
     */
    const Home = () => {
        navigator("/home");
    }
    return(
        <Wrapper>
            <Title>HASH '#'</Title>
            <InputArea>
                <Input type="button" value="HOME" onClick={Home} />
                <Spacer />
                <Input type="button" value="CHAT" />
            </InputArea>
        </Wrapper>
    );
}