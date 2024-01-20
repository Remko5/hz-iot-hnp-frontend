// import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import books from "./images/books.jpg";
import characteristics from "./images/characteristics.png";
import dog from "./images/dog.jpg";
import { useEffect } from "react";

const ChooseTool = () => {
  const navigate = useNavigate();
  let role = localStorage.getItem('role');
  useEffect(() => {
    if(!role){
      return navigate("/login",{replace: true})
    }
  }, [role, navigate]);

  const toolSelectorWrapperStyle = {
    width: "80vw",
    height: "50vh",
    border: "2px solid black",
    borderRadius: "5px",
    margin: "6vw 10vw 0vw 10vw",
    backgroundColor: "#474748",
    color: "lightgray",
  }

  const selectButtonWrapperStyle = {
    width: "95%",
    height: "85%",
  }

  const cardStyle = {
    width: "30%",
    height: "100%",
    marginLeft: "calc(10% / 3)",
    border: "2px solid lightgray",
    borderRadius: "5px",
    float: "left",
    textAlign: "center",
    backgroundColor: "#212528",
    color: "lightgray",
  }

  const imageStyle = {
    height: "84%",
    width: "100%",
    objectFit: "cover",
  }
  
  return (
    <>
      <div className="tool-selector-wrapper" style={toolSelectorWrapperStyle}>
        <h2 style={{textAlign: "center"}}>Selecteer 6P-tool</h2>
        <div className="select-tool-button-wrapper" style={selectButtonWrapperStyle}>
          <Link to="/tools/text">
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Tekst</Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={books} style={imageStyle} />
            </Card>
          </Link>

          <Link to="/tools/image">
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Beelden</Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={dog} style={imageStyle} />
            </Card>
          </Link>

          <Link to="/tools/characteristics">
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Eigenschappen</Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={characteristics} style={imageStyle} />
            </Card>
          </Link>
        </div>
      </div>
    </>
    );
  };
  
  export default ChooseTool;