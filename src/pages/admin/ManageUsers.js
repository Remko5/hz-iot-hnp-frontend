//import { useState, useEffect } from "react";
import { IsAdminOrRedirect } from "../../redirector";
import Error from "../Error";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

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
              json.forEach(element => {
                array.push(
                  <tr>
                    <td onClick={() => navigate("/admin/update/"+element.id)}>{element.id}</td>
                    <td onClick={() => navigate("/admin/update/"+element.id)}>{element.email}</td>
                    <td onClick={() => navigate("/admin/update/"+element.id)}>{element.role}</td>
                    <td onClick={() => navigate("/admin/update/"+element.id)}>{element.created_at}</td>
                    <td onClick={() => navigate("/admin/update/"+element.id)}>{element.updated_at}</td>
                    <td onClick={() => deleteAccount(element.id)}>Delete</td>
                  </tr>
                );
              });
              setUsers(array)
            })
          }
        })
  }, [navigate, setErrorObject, setShowErrors, users, setUsers]);
  
  const manageUsersWrapperStyle = {
    width: "70vw",
    margin: "6vw 0vw 0vw 15vw",
    padding: "1vw 0vw 0vw 0vw",
    border: "2px solid black",
    borderRadius: "5px",
    color: "lightgray",
    backgroundColor: "#474748",
  }

  return (
      <>
        <span style={{ visibility: showErrors ? "visible" : "hidden" }}>
          <Error errors={errorObject} />
        </span>
        <div className="manage-users-wrapper" style={manageUsersWrapperStyle}>
          <h2 style={{textAlign: "center"}}>Manage Users</h2>
          <Table variant="dark" striped bordered hover style={{width: "96%", marginLeft: "2%"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </Table>
        </div>
      </>
  );
}

export default ManageUsers;
