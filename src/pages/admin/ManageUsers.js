//import { useState, useEffect } from "react";
import { IsAdminOrRedirect } from "../../redirector";
function ManageUsers() {
  IsAdminOrRedirect()

    return (
        <>
        <h1>Manage Users</h1>
    </>
  );
}

export default ManageUsers;
