import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TextTool = () => {
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
      <div className="text-tool-wrapper" style={textToolWrapperStyle}>
        <h2 style={{textAlign: "center"}}>6P-Tekst-tool</h2>
        <Form style={{width: "95%", marginLeft: "2.5%"}}>
          <Form.Group className="mb-3" controlId="formBasicTextArea">
            <Form.Control as="textarea" rows={14} placeholder="Enter text" />
          </Form.Group>

          <Button variant="dark" type="submit" style={buttonStyle}>Submit</Button>
        </Form>
      </div>
    </>
    );
  };
  
  export default TextTool;
