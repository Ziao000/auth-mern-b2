import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopService from "../../src/services/shop.service";

const ShopPage = () => {

    const { id } = useParams();

    const [shop, setShop] = useState(null);


    const fetchShop = async () => {
        try {
            const { data } = await ShopService.getOne(id);
            setShop(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchShop();
    }, []);

    return ( 
        <>
            <h1>Shop Page</h1>
            {shop && (
                <>
                    <h2>{shop.name}</h2>
                    <p>{shop.description}</p>
                    <p>{shop.location}</p>
                    <img src={shop.imageUrl}></img>
                    </>
            )}
            
        </>
     );
}
 
export default ShopPage;