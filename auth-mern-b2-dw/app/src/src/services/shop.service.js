import instance from "./api.service";

const API_URL = "http://localhost:8000/api";

const create = async (credentials) => {
    const response = await instance.post(`${API_URL}/shops`, credentials);
    return response.data;
    }

const getAll = async () => {
    const response = await instance.get(`${API_URL}/shops`);
    return response.data;
    }

const getOne = async (credentials) => {
    const response = await instance.get(`${API_URL}/shops/${credentials}`);
    return response.data;
}

const ShopService = {
    create,
    getAll,
    getOne,
}

export default ShopService;