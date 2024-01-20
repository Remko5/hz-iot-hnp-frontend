import Message from "./Message";

function ToolResult({results}) {
  return (
    <>
      <h1>ToolResult</h1>
      <Message message={results} />
    </>
    );
  };
  
  export default ToolResult;