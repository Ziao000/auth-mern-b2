import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShopService from '../../src/services/shop.service';
import { Link, useNavigate } from 'react-router-dom';

const ListShop = () => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const { data } = await ShopService.getAll('http://localhost:8000/api/shops');
        setShops(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShops();
  }, []);

  const handleClick = (e, _id) => {
    console.log(_id);
    navigate(`/shop/${_id}`)
    
  }
  return (
    <ul>
        {shops.map((shop) => (
            <li key={shop._id}>
                <h2 onClick={(e)=> handleClick(e, shop._id)}>{shop.name}</h2>
                <p>{shop.description}</p>
                <p>{shop.location}</p>
                <img src={shop.imageUrl}></img>
            </li>
        ))}
    </ul>
  );
};

export default ListShop;
