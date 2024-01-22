import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IsAdminOrRedirect } from "../../redirector";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Error from "../Error";

const Update = () => {
  IsAdminOrRedirect()

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState({});  
  const [showErrors, setShowErrors] = useState(false);
  const [errorObject, setErrorObject] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    let token = localStorage.getItem('token');

    fetch('http://localhost:5000/admin/users/'+id, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                "Content-type": "application/json",
                'X-API-TOKEN': token
            },        
        }).then((result) => {
          if(!(result.status === 200)){
            result.json().then((error) => {
              setErrorObject(error)
              setShowErrors(true)
            })
          } else{
            result.json().then((json) => {
                setUser(json)
                setInputs({"email": json.email, "role": json.role})
            })
          }
        })
  }, [navigate, setErrorObject, setShowErrors, id]);


  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if(inputs.email === user.email && inputs.role === user.role){
        return navigate("/admin/manage-users", {replace: true});
      }
      
      setShowErrors(false);
      let token = localStorage.getItem('token');

      let works = JSON.stringify(inputs);
      fetch('http://localhost:5000/admin/users/'+id, {
          method: 'PUT',
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
    padding: "1vw 2vw 0vw 2vw",
    margin: "6vw 0vw 0vw 25vw",
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
        <h2 style={{textAlign: "center"}}>Gebruikers ID: {id}</h2>
        <h2 style={{textAlign: "center"}}>Aanpassen</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email adres</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" defaultValue={inputs.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Rol</Form.Label>
            <Form.Select name="role" value={inputs.role} onChange={handleChange}>
              <option value="USER">Gebruiker</option>
              <option value="ADMIN">Admin</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" style={buttonStyle}>Aanpassen</Button>
        </Form>
      </div>
    </>
    );
  };
  
  export default Update;