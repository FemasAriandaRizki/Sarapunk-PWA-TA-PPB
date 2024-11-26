import React, { useState } from "react";

export default function OrdersPage({ orders, setOrders }) {
    const [showQRModal, setShowQRModal] = useState(false); // State untuk modal

    const handleRemoveOrder = (index) => {
        const updatedOrders = [...orders];
        updatedOrders.splice(index, 1);
        setOrders(updatedOrders);
    };

    const totalPrice = orders.reduce((total, item) => total + item.price, 0);

    return (
        <main>
            <h3 className="title-o">Pesanan</h3>
            <ul className="order-list">
                {orders.map((item, index) => (
                    <li key={index} className="order-item">
                        <span>{item.name}</span>
                        <span>Rp {item.price.toLocaleString()}</span>
                        <button
                            className="remove-btn"
                            onClick={() => handleRemoveOrder(index)}
                        >
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
            <div className="order-summary">
                <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>
                <button
                    className="checkout-btn"
                    onClick={() => setShowQRModal(true)} // Tampilkan modal
                >
                    Buat Pesanan
                </button>
            </div>

            {showQRModal && (
                <div
                    className="qr-modal-bg"
                    onClick={() => setShowQRModal(false)}
                >
                    <div className="qr-modal">
                        <img
                            src="https://github.com/FemasAriandaRizki/gambar-api-sarapan-praktis/blob/main/images/qris.png?raw=true"
                            alt="QRIS"
                        />
                        <p>Silakan scan untuk melakukan pembayaran</p>
                        <button
                            className="close-btn"
                            onClick={() => setShowQRModal(false)}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
