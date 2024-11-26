import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

// Import icon dari FontAwesome atau library lain
import {
    FaHome,
    FaClipboardList,
    FaHeart,
    FaUser,
    FaDice,
} from "react-icons/fa";

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <FaHome size={24} />
                <span>Beranda</span>
            </NavLink>
            <NavLink
                to="/orders"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <FaClipboardList size={24} />
                <span>Pesanan</span>
            </NavLink>
            <NavLink
                to="/favorites"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <FaHeart size={24} />
                <span>Favorit</span>
            </NavLink>
            <NavLink
                to="/gacha"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <FaDice size={24} />
                <span>Gacha</span>
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <FaUser size={24} />
                <span>Profil</span>
            </NavLink>
        </nav>
    );
}
