import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../src/context/UserContext";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Account from "../pages/user/Account";
import ProtectedRoute from "./ProtectedRoute";
import UpdateUserPage from "../pages/UpdateUserPage";
import CreateShopPage from "../pages/shop/CreateShopPage";
import ListShop from "../pages/ListShop";
import ShopPage from "../pages/ShopPage";

const MainRouter = () => {
    const { user } = useContext(UserContext);

    return ( 
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/form" element={<UpdateUserPage/>} />
                <Route path="/listshop" element={<ListShop />} />
                <Route path="/shop/:id" element={<ShopPage />} />
                
                {!user && <Route path="/auth" element={<AuthPage />} />}

                <Route path="/account" element={
                    <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                } />

                {user && <Route path="/formshop" element={
                    <ProtectedRoute>
                        <CreateShopPage />
                    </ProtectedRoute>
                } />}

            </Routes>
        </>
     );
}
 
export default MainRouter;