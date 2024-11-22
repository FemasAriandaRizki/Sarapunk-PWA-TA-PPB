import React from "react";

export default function FavoritesPage({ favorites, setFavorites }) {
    const handleRemoveFavorite = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites.splice(index, 1);
        setFavorites(updatedFavorites);
    };

    return (
        <main>
            <h3 className="title">Favorit</h3>
            <ul className="favorite-list">
                {favorites.map((item, index) => (
                    <li key={index} className="favorite-item">
                        <span>{item.name}</span>
                        <button
                            className="remove-btn"
                            onClick={() => handleRemoveFavorite(index)}
                        >
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
