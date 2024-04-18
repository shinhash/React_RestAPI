import { Link } from "react-router-dom";
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

export default function Layout(){
    return(
        <Wrapper>
            <Link to="/chat"></Link>
        </Wrapper>
    );
}