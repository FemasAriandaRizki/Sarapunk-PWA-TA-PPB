import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

// Import icon dari FontAwesome atau library lain
import { FaHome, FaClipboardList, FaHeart, FaUser } from "react-icons/fa";

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className="nav-item" activeClassName="active">
                <FaHome size={24} />
                <span>Beranda</span>
            </NavLink>
            <NavLink to="/orders" className="nav-item" activeClassName="active">
                <FaClipboardList size={24} />
                <span>Pesanan</span>
            </NavLink>
            <NavLink
                to="/favorites"
                className="nav-item"
                activeClassName="active"
            >
                <FaHeart size={24} />
                <span>Favorit</span>
            </NavLink>
            <NavLink
                to="/profile"
                className="nav-item"
                activeClassName="active"
            >
                <FaUser size={24} />
                <span>Profil</span>
            </NavLink>
        </nav>
    );
}
