import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IsAdminOrRedirect } from "../../redirector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Error from "../Error";
import Message from "../Message";

const Register = () => {
  IsAdminOrRedirect()

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});  
  const [showErrors, setShowErrors] = useState(false);
  const [errorObject, setErrorObject] = useState({});
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(inputs.password !== inputs.password2){
        setShowPasswordError(true);
        return
      }
      setShowErrors(false);
      setShowPasswordError(false);
      let token = localStorage.getItem('token');
      if(inputs.role === undefined){
        inputs.role = "USER";
      }
      let password2 = inputs.password2
      delete inputs.password2

      let works = JSON.stringify(inputs);
      fetch('http://localhost:5000/admin/users', {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
              "Content-type": "application/json",
              'X-API-TOKEN': token
          },
          body: works
      }).then((result) => {
        if(!(result.status === 200)){
          result.json().then((error) => {
            inputs.password2 = password2
            setErrorObject(error)
            setShowErrors(true)
          })
        } else{
          return navigate("/admin/manage-users", {replace: true});
        }
      })
    }

  const registerWrapperStyle = {
    width: "50vw",
    height: "60vh",
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
        <Error errors={errorObject} />
      </span>
      <div className="register-wrapper" style={registerWrapperStyle}>
        <h2 style={{textAlign: "center"}}>Registreren</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email adres</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Wachtwoord</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleChange} />
            <span style={{ display: showPasswordError ? "inline" : "none", minHeight: showErrors ? "100%" : "0px", minWidth: showErrors ? "100%" : "0px" }}>
              <Message message={["Wachtwoorden komen niet overeen"]} />
            </span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Wachtwoord opnieuw</Form.Label>
            <Form.Control type="password" name="password2" placeholder="Enter password" onChange={handleChange} />
            <span style={{ display: showPasswordError ? "inline" : "none", minHeight: showErrors ? "100%" : "0px", minWidth: showErrors ? "100%" : "0px" }}>
              <Message message={["Wachtwoorden komen niet overeen"]} />
            </span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Rol</Form.Label>
            <Form.Select name="role" onChange={handleChange}>
              <option value="USER">Gebruiker</option>
              <option value="ADMIN">Admin</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" style={buttonStyle}>Registreer</Button>
        </Form>
      </div>
    </>
    );
  };
  
  export default Register;
