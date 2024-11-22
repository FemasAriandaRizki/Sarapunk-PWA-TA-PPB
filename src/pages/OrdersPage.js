import React from "react";

export default function OrdersPage({ orders, setOrders }) {
    const handleRemoveOrder = (index) => {
        const updatedOrders = [...orders];
        updatedOrders.splice(index, 1);
        setOrders(updatedOrders);
    };

    const totalPrice = orders.reduce((total, item) => total + item.price, 0);

    return (
        <main>
            <h3 className="title">Pesanan</h3>
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
                    onClick={() => alert("Buat Pesanan!")}
                >
                    Buat Pesanan
                </button>
            </div>
        </main>
    );
}
