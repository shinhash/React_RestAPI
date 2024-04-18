import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatMsg from "./ChatMsg";
// import ChatMsg from "./ChatMsg";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const MsgLogArea = styled.div`
    width: 100%;
    height: 80%;
    border: none;
    border-radius: 0 25px 0 0;
    overflow-y: auto;
`;
const MsgInputArea = styled.div`
    width: 100%;
    height: 20%;
    background-color: #4d419b;
    border-radius: 0 0 25px 0;
`;
const Form = styled.form`
    height: 90%;
    padding-top: 10px;
`;
const Input = styled.input`
    height: 80%;
    border: none;
    border-radius: 20px;
    &:hover{
        opacity: 0.8;
    }
    &.disabledBtn{
        opacity: 0.8;
    }
    &[name="conn"] {
        width: 8%;
    }
    &[name="message"] {
        width: 75%;
        padding-left: 10px;
        padding-right: 10px;
    }
    &[name="send"] {
        width: 10%;
        background-color: white;
        color: slateblue;
        font-size: 15px;
        font-weight: bold;
    }
`;
const Spacer = styled.span`
    margin-left: 5px;
`;

export interface ChatMsgInterface {
    userId  : string;
    msg     : string;
}

export default function ChatArea(){
    const [message, setMessage] = useState("");
    const [webSocketData, setWebSocketData] = useState(null);
    const [msgLogList, setMsgLogList] = useState<ChatMsgInterface[]>([]);

    const ws = useRef<WebSocket | null>();
    const msgChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if(name === "message"){
            setMessage(value);
        }
    }
    const sendMessage = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ws.current?.send(message);
        setMessage("");
    };
    const scrollToBottom = () => {
        const msgInputArea = document.getElementById("msgInputArea");
        console.log(msgInputArea?.scrollTop);
        console.log(msgInputArea?.scrollHeight);
    }

    useEffect(() => {
        ws.current = new WebSocket("ws://183.107.121.180:8066/ws/chat");
        ws.current.onmessage = (event : MessageEvent) => {
            const msgSplit = event.data.split("::");
            const msgData = {
                "userId" : msgSplit[0],
                "msg"    : msgSplit[1]
            }
            msgLogList.push(msgData)
            setMsgLogList(msgLogList);
            
            scrollToBottom();
            setWebSocketData(event.data);
        };
        ws.current.onopen = () => {
            console.log("connection opend!!!");
        };
        ws.current.onclose = () => {
            console.log("connection close!!!");
        };
        return () => {
            ws.current?.close();
        }
    }, [webSocketData]);

    return(
        <Wrapper>
            <MsgLogArea>
            { 
                msgLogList.map((item, index) => {
                    return(
                        <ChatMsg key={index} {...item} />
                    )
                })
            }
            </MsgLogArea>
            <MsgInputArea id="msgInputArea">
                <Form onSubmit={sendMessage}>
                    <Spacer />
                    <Input type="button" name="conn"    value="접속" />
                    <Spacer />
                    <Input type="text"   name="message" value={message} onChange={msgChange}/>
                    <Spacer />
                    { message == "" ? <Input type="submit" name="send" value="SEND" className="disabledBtn" disabled /> : <Input type="submit" name="send" value="SEND" /> }
                    <Spacer />
                </Form>
            </MsgInputArea>
        </Wrapper>
    );
}