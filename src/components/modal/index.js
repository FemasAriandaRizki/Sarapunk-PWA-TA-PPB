import React from "react";
import "./index.css";
import { FaHeart, FaTimes } from "react-icons/fa";

export default function Modal({
    isShow,
    data,
    onCancel,
    onAddToOrder,
    onAddToFavorites,
}) {
    if (!isShow || !data) return null;

    return (
        <div className="modal-container">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="modal-image"
                />
                <div className="modal-info">
                    <h3>{data.name}</h3>
                    <p>
                        <strong>Jenis:</strong> {data.type}
                    </p>
                    <p>
                        <strong>Harga:</strong> Rp {data.price.toLocaleString()}
                    </p>
                    <p>{data.description}</p>
                </div>
                <div className="modal-actions">
                    <button
                        className="modal-action-btn add-to-favorites"
                        onClick={() => onAddToFavorites(data)}
                    >
                        <FaHeart />
                    </button>
                    <button
                        className="modal-action-btn add-to-order"
                        onClick={() => onAddToOrder(data)}
                    >
                        Tambah Pesanan
                    </button>
                    <button
                        className="modal-action-btn close-btn"
                        onClick={onCancel}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
    );
}
