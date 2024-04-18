import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * style components
 */
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: slateblue;
    border: none;
    border-radius: 25px;
`;
const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Form = styled.form``;
const InputArea = styled.div`
    text-align: center;
    margin-top: 80px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;
const Input = styled.input`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 25px;
    padding-left: 10px;
    color: slateblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    &:hover{
        opacity: 0.8;
    }
    &[type="submit"] {
        cursor: pointer;
        width: 200px;
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        background-color: white;
    }
`;
const Error = styled.span`
    color: tomato;
    text-align: center;
    font-size: 14px;
`;

export default function Login(){
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [logInErr, setLogInError] = useState(false);
    const [logInErrRst, setLogInErrRst] = useState("");
    const navigate = useNavigate();

    const inputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        switch(name){
            case "userId" : 
                setUserId(value);
                break;
            case "userPw" : 
                setUserPw(value);
                break;
        }
    }
    const loginForm = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            setIsLogin(true);
            setLogInError(false);
            setLogInErrRst("");

            const inputUserInfo = {
                "userId" : userId,
                "userPw" : userPw
            };

            const inputResult = await axios.post("/api/login/user", null, {params : inputUserInfo});
            const signRst = inputResult.data;

            if(signRst.signInRst.signInRstCode == "SUCCESS"){
                const userSessionInfo = signRst.signUserSessionId;
                sessionStorage.setItem("userSessionInfo", userSessionInfo);
                navigate("/home");
            }else if(signRst.signInRst.signInRstCode == "ERROR"){
                setLogInError(true);
                setLogInErrRst(signRst.signInRst.signInRst);
            }
        }catch(error){
            console.log("error" + error);
        }finally{
            setIsLogin(false);
        }
    }

    return(
        <Wrapper>
            <Title>LOGIN '#'</Title>
            <Form onSubmit={loginForm}>
                <InputArea>
                    <Input  name="userId" type="text"     value={userId}  onChange={inputChange} placeholder="email"    required />
                    <Input  name="userPw" type="password" value={userPw}  onChange={inputChange} placeholder="password" required />
                    <Error>{logInErr ? logInErrRst : ""}</Error>
                    <Input type="submit" value={isLogin ? "Loging..." : "Login"} />
                </InputArea>
            </Form>
        </Wrapper>
    );
}