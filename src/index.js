import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useState, useEffect } from 'react';
import CharacteristicsTool from "./pages/CharacteristicsTool";
import ChooseTool from "./pages/ChooseTool";
import Home from "./pages/Home";
import ImageTool from "./pages/ImageTool";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ManageUsers from "./pages/admin/ManageUsers";
import NoPage from "./pages/NoPage";
import Register from "./pages/admin/Register";
import Update from "./pages/admin/Update";
import TextTool from "./pages/TextTool";
import ToolResult from "./pages/ToolResult";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [toolResult, setToolResult] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
 
  useEffect(() => {
    let role = localStorage.getItem('role');
    if(role){
      setIsLoggedIn(true)
      if(role === "ADMIN"){
        setIsAdmin(true)
      }
    }
  }, [setIsLoggedIn, setIsAdmin]);

  function login(token, role) {localStorage.setItem('token', token); localStorage.setItem('role', role)}
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}>
          <Route index element={<Home />} />
          <Route path="admin/register" element={<Register />} />
          <Route path="admin/manage-users" element={<ManageUsers />} />
          <Route path="admin/update/:id" element={<Update />} />
          <Route path="tools" element={<ChooseTool />} />
          <Route path="tools/text" element={<TextTool returnToolResult={setToolResult} />} />
          <Route path="tools/image" element={<ImageTool />} />
          <Route path="tools/characteristics" element={<CharacteristicsTool />} />
          <Route path="tools/result" element={<ToolResult results={toolResult} />} />
          <Route path="login" element={<Login returnLoginToken={login} setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
          <Route path="logout" element={<Logout setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
