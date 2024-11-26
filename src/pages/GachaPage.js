import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";

export default function GachaPage() {
    const [data, setData] = useState([]);
    const [randomItem, setRandomItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api-sarapan-praktis.vercel.app/product"
                );
                if (response.status === 200 && response.data.status) {
                    setData(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleGacha = () => {
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomItem(data[randomIndex]);
        }
    };

    return (
        <main>
            <h3 className="title-g">Gacha Sarapunk</h3>
            <button className="gacha-btn" onClick={handleGacha}>
                Gacha
            </button>
            {randomItem && (
                <div className="gacha-card">
                    <Card data={randomItem} onClick={() => {}} />
                </div>
            )}
        </main>
    );
}