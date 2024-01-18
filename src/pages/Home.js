import Button from "react-bootstrap/Button";
import "../styles.css";

const Home = () => {
  // padding: top, right, bottom, left

  const pageTextStyle = {
    width: "500px",
    padding: "0px 0px 0px 60px",
  }
  
  const buttonStyle = {
    color: "rgba(255, 255, 255, 0.55)",
    backgroundColor: "#212529",
    borderColor: "#212529",
  }
  
  return (
    <>
      <div class="title">
        <h1 style={{padding:"60px 60px 60px 60px"}}>Mensen op zoek naar menselijke behoeftes!</h1>
      </div>
      <div class="page-text" style={pageTextStyle}>
        <p>Zet abstracte menselijke behoeftes om in objectieve nummers met onze online tool en breng je doelgroep in kaart aan de hand van het 6P-model.</p>
      </div>
      <Button variant="dark">Probeer nu!</Button>
    </>
    );
  };
  
  export default Home;
