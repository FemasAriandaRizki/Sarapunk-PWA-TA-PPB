import React from "react";
import "./index.css";

export default function Card({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <figure>
                <img src={data.imageUrl} alt={data.name} />
            </figure>
            <div className="card-info">
                <h3>{data.name}</h3>
                <p>Rp {data.price.toLocaleString()}</p>
            </div>
        </div>
    );
}
