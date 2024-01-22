const ImageTool = () => {
  const imageToolWrapperStyle = {
    width: "50vw",
    height: "50vh",
    margin: "10vw 0vw 0vw 25vw",
    border: "2px solid black",
    borderRadius: "5px",
    color: "lightgray",
    backgroundColor: "#474748",
  }
  
  return (
    <>
      <div className="image-tool-wrapper" style={imageToolWrapperStyle}>
        <h2 style={{textAlign: "center"}}>6P-Beelden-tool</h2>
        <h5 style={{textAlign: "center", paddingTop: "15%"}}>Aan deze tool wordt nog gewerkt en kan helaas niet gebruikt worden op dit moment.</h5>
      </div>
    </>
  );
};

export default ImageTool;
