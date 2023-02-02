import instance from './api.service';

const API_URL = 'http://localhost:8000/api/user';

const update = async (credentials) => {
    const response = await instance.post(`${API_URL}/update`, credentials);
    return response.data;
}

const Userserivce = {
    update,
}

export default Userserivce;