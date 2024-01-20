import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function IsNotLoggedInOrRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        let role = localStorage.getItem('role');
        if(role){
          return navigate("/",{replace: true})
        }
      }, [navigate]);
    return(<></>)
}

export function IsUserOrRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        let role = localStorage.getItem('role');
        if(!role){
          return navigate("/login",{replace: true})
        }
      }, [navigate]);
    return(<></>)
}

export function IsAdminOrRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        let role = localStorage.getItem('role');
        if(!role){
            return navigate("/login",{replace: true})
        }
        if(role !== "ADMIN"){
            return navigate("/",{replace: true})
        }
      }, [navigate]);
    return(<></>)
}