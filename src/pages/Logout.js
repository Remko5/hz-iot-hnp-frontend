import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({setIsLoggedIn, setIsAdmin}) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear()
    setIsLoggedIn(false)
    setIsAdmin(false)
    return navigate("/", {replace: true})
  }, [setIsLoggedIn, setIsAdmin, navigate]);
  
}

export default Logout;