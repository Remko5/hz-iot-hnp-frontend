import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import CharacteristicsTool from "./pages/CharacteristicsTool";
import ChooseTool from "./pages/ChooseTool";
import Home from "./pages/Home";
import ImageTool from "./pages/ImageTool";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ManageUsers from "./pages/ManageUsers";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import TextTool from "./pages/TextTool";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import ToolResult from "./pages/ToolResult";

export default function App() {
  const [toolResult, setToolResult] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function login(token, role) {localStorage.setItem('token', token); localStorage.setItem('role', role)}
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin/register" element={<Register />} />
          <Route path="admin/manage-users" element={<ManageUsers />} />
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
