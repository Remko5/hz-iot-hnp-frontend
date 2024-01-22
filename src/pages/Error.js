export default function Error({errors}) {
  let displayErrors = []
  const keys = Object.keys(errors)
  keys.forEach(element => {
    displayErrors.push(<div key={element}>{element}: {errors[element]}</div>)
  });

  const errorWrapperStyle = {
    width: "30vw",
    height: "1vh",
    margin: "2vh 0vw 0vw 35vw",
    textAlign: "center",
  }

  return (
    <>
      <div className="error-wrapper" style={errorWrapperStyle}>
          <h1>Oops!</h1>
          <div>There seem to be a problem:</div>
          {displayErrors}
      </div>
    </>
  )
}