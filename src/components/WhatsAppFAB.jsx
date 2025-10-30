// ./src/components/WhatsAppFAB.jsx

import React from 'react';

const WhatsAppFAB = ({ phoneNumber, message }) => {
    // Constrói o link do WhatsApp (com a mensagem pré-preenchida)
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        // Posicionamento Fixo (Flutuante) no canto inferior direito
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Fale conosco via WhatsApp"
            className="
                fixed bottom-6 right-6 z-50        
                bg-green-500 hover:bg-green-600      
                text-white 
                p-4 sm:p-5 
                rounded-full 
                shadow-xl 
                text-2xl sm:text-3xl                
                transition duration-300 
                transform hover:scale-110           
                flex items-center justify-center
                border-4 border-white/50             
            ">
            {/* Ícone de Mensagem (substituir por SVG do WhatsApp em produção) */}
            <span className="animate-pulse">💬</span>
        </a>
    );
};

export default WhatsAppFAB;