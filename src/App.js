import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import OrdersPage from "./pages/OrdersPage";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import GachaPage from "./pages/GachaPage"; // Import halaman Gacha

// Components
import Header from "./components/header";
import BottomNav from "./components/navigation";
import SplashScreen from "./components/SplashScreen";

import "./App.css";

function App() {
    const [isSplashVisible, setSplashVisible] = useState(true);
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

    if (isSplashVisible) {
        return <SplashScreen onComplete={() => setSplashVisible(false)} />;
    }

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
                                onAddToOrder={addToOrder}
                                onAddToFavorites={addToFavorites}
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
                    <Route path="/gacha" element={<GachaPage />} />{" "}
                    {/* Tambahkan rute Gacha */}
                </Routes>
                <BottomNav /> {/* Navbar dengan ikon tambahan */}
            </Router>
        </div>
    );
}

export default App;
