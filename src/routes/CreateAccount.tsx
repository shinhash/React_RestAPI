import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`;
const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
`;
const Form = styled.form`

`;

export default function CreateAccount(){
    
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [reUserPw, setReUserPw] = useState("");
    const [userNm, setUserNm] = useState("");
    const [loading, setLoading] = useState(false);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {target : {name, value}} = e;
        switch(name){
            case "userId" : 
                setUserId(value);
                break;
            case "userPw" : 
                setUserPw(value);
                break;
            case "reUserPw" : 
                setReUserPw(value);
                break;
            case "userNm" : 
                setUserNm(value);
                break;
        }
    }

    const onSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputCheck()) return;
        try{
            setLoading(true);
            const userInfo = {
                'userId'   : userId,
                'userPw'   : userPw,
                'userNm'   : userNm,
                'saveType' : "I"
            }
            const response = await axios.post("/api/save/userInfo", null, {params : userInfo});
            // const { userList } = response.data;
            console.log(response);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const inputCheck = () => {
        let isPass = true;
        if(userId === "" || userPw === "" || reUserPw === "" || userNm === "") {
            isPass = false;
        }
        if(userPw !== reUserPw){
            alert("입력한 비밀번호가 일치하지 않습니다.");
            isPass = false;
        }
        return isPass;
    }

    return (
        <Wrapper>
            <Form onSubmit={onSubmit}>
                <Input name="userId"   placeholder="email"      type="email"    onChange={onChange} value={userId}   required />
                <Input name="userPw"   placeholder="password"   type="password" onChange={onChange} value={userPw}   required />
                <Input name="reUserPw" placeholder="rePassword" type="password" onChange={onChange} value={reUserPw} required />
                <Input name="userNm"   placeholder="nickName"   type="text"     onChange={onChange} value={userNm}   required />
                <Input type="submit"     value={ loading ? "loading..." : "CreateAccount" } />
            </Form>
        </Wrapper>
    );
}