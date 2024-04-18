import { Navigate } from "react-router-dom";

export default function ProtectedRout({children}:{children:React.ReactNode}){
    const userInfo = sessionStorage.getItem("userSessionInfo");
    if(userInfo === null || userInfo == ""){
        return <Navigate to="/login" />
    }
    return children;
}