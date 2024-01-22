import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles.css";

const Home = () => {
  

  // padding: top, right, bottom, left

  const pageTitleStyle = {
    padding: "60px 0px 0px 60px",
  }

  const pageTextStyle = {
    width: "400px",
    padding: "0px 0px 0px 60px",
    textWrap: "wrap",
  }
  
  const buttonDivStyle = {
    padding: "0px 0px 0px 60px",
  }
  
  return (
    <>
      <div className="title">
        <h1 style={pageTitleStyle}>Mensen op zoek naar menselijke behoeftes!</h1>
      </div>
      <div className="page-text" style={pageTextStyle}>
        <p>Zet abstracte menselijke behoeftes om in objectieve nummers met onze online tool en breng je doelgroep in kaart aan de hand van het 6P-model.</p>
      </div>
      <div className="try-now-button" style={buttonDivStyle}>
        <Link to="/tools"><Button variant="dark" type="submit">Probeer nu!</Button></Link>
      </div>
    </>
    );
}
  
  export default Home;
