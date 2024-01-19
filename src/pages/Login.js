import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
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
      <div className="login-wrapper" style={loginWrapperStyle}>
        <h2 style={{textAlign: "center"}}>Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email adres</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Wachtwoord</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
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