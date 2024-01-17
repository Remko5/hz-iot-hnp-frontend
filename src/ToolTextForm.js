import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ToolTextForm({OnSubmitForm}) {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

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
      return navigate("/login");
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