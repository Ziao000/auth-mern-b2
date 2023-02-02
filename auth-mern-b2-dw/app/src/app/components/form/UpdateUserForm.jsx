import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../src/context/UserContext";
import TokenService from "../../../src/services/token.service";
import Userservice from "../../../src/services/user.service";

const UpdateUserForm = ({ user, onSubmit }) => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState()
  const { setUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { accessToken } = await Userservice.update(credentials)
        TokenService.setTokenInLocalStorage(accessToken)
        const user = TokenService.getUserFromLocalToken()
        setUser(user)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

const handleChange = async (e) => {
    setCredentials({...credentials, [e.target.name] : e.target.value})
}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
        
          
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
        
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUserForm;
