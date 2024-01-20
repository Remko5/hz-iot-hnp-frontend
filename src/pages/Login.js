import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

function Login({returnLoginToken, setIsLoggedIn, setIsAdmin}) {
  const navigate = useNavigate();
  let role = localStorage.getItem('role');
  useEffect(() => {
    if(role){
      return navigate("/",{replace: true})
    }
  }, [role, navigate]);
  
  const [inputs, setInputs] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [errorObject, setErrorObject] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowErrors(false);
    let works = JSON.stringify(inputs);
    fetch('http://localhost:5000/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            "Content-type": "application/json",
        },
        body: works
    }).then((result) => {
      if(!(result.status === 200)){
        result.json().then((error) => {
          setErrorObject(error)
          setShowErrors(true)
        })
      } else{
        result.json().then((json) => {
          returnLoginToken(json.auth_token, json.role)
          setIsLoggedIn(true)
          if(json.role === "ADMIN"){
            setIsAdmin(true)
          }
          return navigate("/", {replace: true});
        })
      }
    })
  }
  
  const loginWrapperStyle = {
    width: "50vw",
    height: "50vh",
    padding: "4vw 2vw 0vw 2vw",
    margin: "10vw 0vw 0vw 25vw",
    border: "2px solid black",
    borderRadius: "5px",
    color: "lightgray",
    backgroundColor: "#474748",
  }

  const buttonStyle = {
    width: "40%",
    margin: "0% 30% 0% 30%",
    borderColor: "white",
  }
  
  return (
    <>
      <span style={{ visibility: showErrors ? "visible" : "hidden" }}>
        <Error errors={errorObject}></Error>
      </span>
      <div className="login-wrapper" style={loginWrapperStyle}>
        <h2 style={{textAlign: "center"}}>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email adres</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Wachtwoord</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Ingelogd blijven" />
          </Form.Group>

          <Button variant="dark" type="submit" style={buttonStyle}>Log in</Button>
        </Form>
      </div>
    </>
    );
  };
  
  export default Login;