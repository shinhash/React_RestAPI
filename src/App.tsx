import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useEffect } from 'react'
// import axios from 'axios';
import styled from 'styled-components';

import Home from './routes/Home';
import CreateAccount from './routes/CreateAccount';
import Chat from './routes/Chat';
import ProtectedRout from './components/ProtectedRout';
import Login from './routes/Login';

const Wrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
  `;

function App() {
  const router = createBrowserRouter([
    { path : "/login", element : <Login />},
    { path : "/home", element : <Home />},
    { path : "/createAccount", element : <CreateAccount />},
    { 
      path : "/chat", 
      element : <ProtectedRout><Chat/></ProtectedRout>,
    },
  ]);

  
  
  // const [object, setObject] = useState<Array<Map<string,object>>|null>();

  // const fn_onclick = async () => {
  //   const response = await axios.post("/api/main/user");
  //   const { userList } = response.data;
  //   console.log(response.data);
  //   setObject(userList);
  // }

  // useEffect(() => {
  //   if(object){
  //     console.log("object : ", object);
  //   }
  // }, [object]);

  return (
    <Wrapper>
      {/* <button onClick={fn_onclick}>ajax test</button> */}
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App
