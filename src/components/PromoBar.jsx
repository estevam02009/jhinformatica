import React from "react";

const PromoBar = () => {
    return (
        // extrutura da barra promocional
        <div className="bg-orange-500 text-white p-2 text-center text-sm font-semibold tracking-wider"><div className="container mx-auto flex justify-center items-center"></div>
            <div className="container mx-auto flex justify-center items-center">
                <span>
                    🔥 OFERTA LIMITADA! Esta promoção expira HOJE às 23:59h
                </span>

                <a href="#" className="ml-4 underline hover:text-orange-900 transition duration-300 animate-pulse">
                    Aproveitar Agora
                </a>
            </div>
        </div>
    )
}

export default PromoBar;