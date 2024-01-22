import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import { IsUserOrRedirect } from "../redirector";

function TextTool({returnToolResult}) {
  IsUserOrRedirect()

  const navigate = useNavigate();
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
    let token = localStorage.getItem('token');
    inputs.type = "text"
    let works = JSON.stringify(inputs);
    fetch('http://localhost:5000/grade', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
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
        result.json().then((json) => {
          returnToolResult(json)
          return navigate("/tools/result")
        })
      }
    } )
  }

  const textToolWrapperStyle = {
    width: "70vw",
    height: "60vh",
    margin: "5vw 0vw 0vw 15vw",
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
      <div className="text-tool-wrapper" style={textToolWrapperStyle}>
        <h2 style={{textAlign: "center"}}>6P-Tekst-tool</h2>
        <Form style={{width: "95%", marginLeft: "2.5%"}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTextArea">
            <Form.Control as="textarea" name="data" rows={14} placeholder="Enter text" onChange={handleChange} />
          </Form.Group>
          
          <Button variant="dark" type="submit" style={buttonStyle}>Submit</Button>
        </Form>
      </div>
    </>
    );
  };
  
  export default TextTool;
