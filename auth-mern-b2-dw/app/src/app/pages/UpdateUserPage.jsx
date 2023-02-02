import React, { useState, useEffect } from "react";
import UpdateUserForm from "../components/form/UpdateUserForm";
import axios from "axios";

const UpdateUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/api/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleSubmit = (data) => {
    axios.put("/api/user/update", data).then((res) => {
      setUser(res.data);
    });
  };

  return (
   
    <UpdateUserForm user={user} onSubmit={handleSubmit} />
  );
};

export default UpdateUser;
