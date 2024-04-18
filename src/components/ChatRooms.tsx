import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const RoomsArea = styled.div`
    width: 100%;
    height: 80%;
`;
const ButtonArea = styled.div`
    width: 100%;
    height: 20%;
    
`;
const Input = styled.input`
    &[name="home"] {
        width: 75px;
        height: 30px;
        text-align: center;
        border: none;
        border-radius: 25px;
        font-size: 15px;
        font-weight: bold;
        color: slateblue;
        &:hover{
            opacity: 0.8;
        }
    }
`;


export default function ChatRooms(){
    const navigate = useNavigate();
    const homeNav = () => {
        navigate("/home");
    }

    return(
        <Wrapper>
            <RoomsArea></RoomsArea>
            <ButtonArea>
                <Input type="button" name="home" value="HOME" onClick={homeNav} />
            </ButtonArea>
        </Wrapper>
    );
}