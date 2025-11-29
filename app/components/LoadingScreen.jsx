"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import img1 from "../assets/logo.png"


const LoadingScreen = () => {
    // Modern Portfolio Website JavaScript - 2025

    useEffect(() => {
        const timer = setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.remove();
            }
        }, 3000); // Remove loading screen after 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div id="loading-screen" className="loading-screen">
                <div className="loading-content">
                    <div className="loading-logo">
                        <Image src={img1} alt="Logo" className="loading-logo-img"></Image>
                            <div className="loading-logo-glow"></div>
                    </div>
                    <div className="loading-text">
                        <h1 className="loading-title">
                            <span className="loading-word">Welcome</span>
                            <span className="loading-word">to</span>
                            <span className="loading-word">my</span>
                            <span className="loading-word">portfolio.</span>
                        </h1>
                    </div>
                </div>
                <div className="loading-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen

