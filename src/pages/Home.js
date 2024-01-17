import ToolTextForm from "../ToolTextForm";
function Home({OnSubmitForm}){

  function handleFormSubmit(results) {
    OnSubmitForm(results)
  }

  return (
    <>
      <h1>Home</h1>
      <ToolTextForm OnSubmitForm={handleFormSubmit} />
    </>
    );
}
  
export default Home;