import { ChatMsgInterface } from "./ChatArea";

export default function ChatMsg({userId, msg}:ChatMsgInterface){
    return(
        <div> 
            [ {userId} ] : {msg} 
        </div>
    );
}