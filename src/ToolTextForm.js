import { useState } from "react";
import { redirect } from "react-router-dom";

function ToolTextForm({OnSubmitForm}) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      console.log("hoi");
      event.preventDefault();
      let result = {username: inputs.username, password: inputs.password}
      OnSubmitForm(result)
      return redirect("/login");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Username:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Password:
          <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" value="send"/>
      </form>
    )
  }

export default ToolTextForm;