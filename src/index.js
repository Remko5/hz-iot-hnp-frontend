import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import CharacteristicsTool from "./pages/CharacteristicsTool";
import ChooseTool from "./pages/ChooseTool";
import Home from "./pages/Home";
import ImageTool from "./pages/ImageTool";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ManageUsers from "./pages/ManageUsers";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import TextTool from "./pages/TextTool";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [results, setResults] = useState({"username": null, "password": null})

  function handleResults(results) {
    console.log("setting results")
    setResults(results)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin/register" element={<Register />} />
          <Route path="admin/manage-users" element={<ManageUsers />} />
          <Route path="tools" element={<ChooseTool />} />
          <Route path="tools/text" element={<TextTool />} />
          <Route path="tools/image" element={<ImageTool />} />
          <Route path="tools/characteristics" element={<CharacteristicsTool />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
