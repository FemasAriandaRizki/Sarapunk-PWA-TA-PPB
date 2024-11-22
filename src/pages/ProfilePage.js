import React from "react";

export default function ProfilePage() {
    return (
        <main className="profile">
            <h3 className="title">Profil Sarapunk</h3>
            <p className="profile-description">
                Sarapunk merupakan layanan pengisian perut di pagi hari untuk
                Anda yang sibuk dan tidak ingin melewatkan sarapan. Kami ada
                untuk Anda dengan memberikan sarapan yang enak, praktis, dan
                harga ramah di kantong.
            </p>
            <div className="profile-information">
                <p>
                    <strong>Kontak:</strong> 083120632986
                </p>
                <p>
                    <strong>Email:</strong> femas375@gmail.com
                </p>
                <p>
                    <strong>Alamat:</strong> Jl. Tirtasari No 5 Tembalang
                    Semarang
                </p>
            </div>
        </main>
    );
}
