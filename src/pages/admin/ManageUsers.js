//import { useState, useEffect } from "react";
import { IsAdminOrRedirect } from "../../redirector";
import Error from "../Error";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManageUsers() {
  IsAdminOrRedirect()

  const navigate = useNavigate();
  const [showErrors, setShowErrors] = useState(false);
  const [errorObject, setErrorObject] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    if(role !== "ADMIN"){
      return
    }

    function deleteAccount(id){
      fetch('http://localhost:5000/admin/users/'+id, {
              method: 'DELETE',
              mode: 'cors',
              credentials: 'same-origin',
              headers: {
                  "Content-type": "application/json",
                  'X-API-TOKEN': token
              },        
          }).then((result) => {
            if(!(result.status === 200)){
              result.json().then((error) => {
                setErrorObject(error)
                setShowErrors(true)
              })
            } else{
              let array = users.pop()
              setUsers(array)
            }
          })
    }

    fetch('http://localhost:5000/admin/users', {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                "Content-type": "application/json",
                'X-API-TOKEN': token
            },        
        }).then((result) => {
          if(!(result.status === 200)){
            result.json().then((error) => {
              setErrorObject(error)
              setShowErrors(true)
            })
          } else{
            result.json().then((json) => {
              let array = []
              array.push(<div key={-1}><span>Email</span><span>Role</span><span>Created At</span><span>Updated At</span></div>)
              json.forEach(element => {
                array.push(<div key={element.id}><span onClick={() => navigate("/admin/update/"+element.id)}><span>{element.email}</span><span>{element.role}</span><span>{element.created_at}</span><span>{element.updated_at}</span></span><span onClick={() => deleteAccount(element.id)}>Delete Account</span></div>)
              });
              setUsers(array)
            })
          }
        })
  }, [navigate, setErrorObject, setShowErrors, users, setUsers]);
    
  return (
      <>
        <h1>Manage Users</h1>
        <span style={{ visibility: showErrors ? "visible" : "hidden" }}>
          <Error errors={errorObject} />
        </span>
        {users}
      </>
  );
}

export default ManageUsers;
