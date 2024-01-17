import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ChooseTool from "./pages/ChooseTool";
import Admin from "./pages/admin/Admin";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import "./styles.css"
import { useState } from "react";

export default function App() {
  const [results, setResults] = useState({"username": null, "password": null})

  function handleResults(results) {
    console.log("setting results")
    setResults(results)
  }

  return (
    <>
      <div>Hier wil ik username: {results.username}, password: {results.password} zien!</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home OnSubmitForm={handleResults} />} />
            <Route path="/admin" element={<Admin />}/>
            <Route path="choosetool" element={<ChooseTool />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);