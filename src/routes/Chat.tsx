import styled from "styled-components";
import ChatRooms from "../components/ChatRooms";
import ChatArea from "../components/ChatArea";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: slateblue;
    border: none;
    border-radius: 25px;
    display: flex;
`;
const ChatLeftArea = styled.div`
    background-color: darkslateblue;
    border: none;
    border-radius: 25px 0px 0px 25px;
    width: 20%;
    height: 100%;
`;
const ChatRightArea = styled.div`
    border: none;
    border-radius: 25px;
    width: 80%;
    height: 100%;
`;


export default function Chat(){

    return (
        <Wrapper>
            <ChatLeftArea>
                <ChatRooms></ChatRooms>
            </ChatLeftArea>
            <ChatRightArea>
                <ChatArea></ChatArea>
            </ChatRightArea>
        </Wrapper>
    );
}