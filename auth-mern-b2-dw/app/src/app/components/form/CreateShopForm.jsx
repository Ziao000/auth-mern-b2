import React, {useState } from "react";
import { useNavigate } from "react-router-dom"
import TokenService from "../../../src/services/token.service";
import ShopService from "../../../src/services/shop.service";

const CreateShopForm = () => {

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken } = await ShopService.create(credentials)
            TokenService.setTokenInLocalStorage(accessToken)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    
const handleChange = async (e) => {
    setCredentials({...credentials, [e.target.name] : e.target.value})
}


    return ( 
        <>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="text" name="imageUrl" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="address">location:</label>
                <input type="text" name="location" onChange={handleChange} />
            </div>
            <button type="submit">Create</button>
          </form>
        </>
     );
}
 
export default CreateShopForm;