function ToolResult({results}) {
  let displayResults = []
  const keys = Object.keys(results)
  keys.forEach(element => {
      displayResults.push(<div key={element}>{element}: {results[element]}</div>)
  });
  return (
    <>
      <h1>ToolResult</h1>
      {displayResults}
    </>
    );
  };
  
  export default ToolResult;