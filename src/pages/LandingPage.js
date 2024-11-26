import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage({ onAddToOrder, onAddToFavorites }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://api-sarapan-praktis.vercel.app/product"
                );
                if (response.status === 200 && response.data.status) {
                    setData(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCardClick = (item) => {
        setModalItem(item);
        setModalShow(true);
    };

    // Filter data berdasarkan kategori
    const nasiItems = data.filter((item) => item.type === "Nasi");
    const isianItems = data.filter((item) =>
        ["Ayam", "Cumi", "Tongkol"].includes(item.type)
    );

    return (
        <main>
            <p className="title-LP">Produk Sarapan Praktis</p>
            <p className="perintah-LP">Silakan pilih nasi dan isian dari menu sarapan praktis di bawah:</p>
            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : (
                <>
                    <section>
                        <h4 className="subtitle">Nasi</h4>
                        <div className="card-container">
                            {nasiItems.map((item) => (
                                <Card
                                    key={item._id}
                                    data={item}
                                    onClick={() => handleCardClick(item)}
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h4 className="subtitle">Isian</h4>
                        <div className="card-container">
                            {isianItems.map((item) => (
                                <Card
                                    key={item._id}
                                    data={item}
                                    onClick={() => handleCardClick(item)}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
                onAddToOrder={onAddToOrder} // Properti diteruskan
                onAddToFavorites={onAddToFavorites} // Properti diteruskan
            />
        </main>
    );
}
