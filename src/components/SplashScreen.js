import React, { useEffect } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onComplete }) {
    useEffect(() => {
        // Splash screen akan hilang setelah 3 detik
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timer); // Bersihkan timer jika komponen di-unmount
    }, [onComplete]);

    return (
        <div className="splash-screen">
            <img
                src="/letter-s.png"
                alt="Sarapunk Logo"
                className="splash-logo"
            />
            <p className="splash-text">Sarapunk</p>
        </div>
    );
}
