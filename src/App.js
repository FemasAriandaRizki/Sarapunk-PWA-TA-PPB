import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import OrdersPage from "./pages/OrdersPage";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";

// Components
import Header from "./components/header";
import BottomNav from "./components/navigation";

import "./App.css";

function App() {
    const [orders, setOrders] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addToOrder = (item) => {
        setOrders([...orders, item]);
    };

    const addToFavorites = (item) => {
        if (!favorites.some((fav) => fav._id === item._id)) {
            setFavorites([...favorites, item]);
        }
    };

    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <LandingPage
                                onAddToOrder={addToOrder} // Properti diteruskan
                                onAddToFavorites={addToFavorites} // Properti diteruskan
                            />
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <OrdersPage orders={orders} setOrders={setOrders} />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={
                            <FavoritesPage
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                        }
                    />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                <BottomNav />
            </Router>
        </div>
    );
}

export default App;
