// ./src/components/Header.jsx

import React from 'react';

const Header = () => {
    return (
        // Estrutura do Header: Fundo escuro, Fixo no topo e largura total
        <header className="
            sticky top-0 z-50              
            w-full 
            bg-gray-900/95               
            backdrop-blur-sm              
            shadow-lg
            py-4
            border-b border-violet-800
        ">
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Logo/Nome do Produto */}
                <div className="text-2xl font-extrabold tracking-tight">
                    <span className="
                        bg-clip-text text-transparent bg-gradient-to-r 
                        from-pink-400 to-violet-400
                    ">
                        JH
                    </span>
                    <span className="text-white ml-1">Informática</span>
                </div>

                {/* Links de Navegação (Simulados) */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#funcionalidades" className="text-gray-300 hover:text-pink-400 transition">Funcionalidades</a>
                    <a href="#programas" className="text-gray-300 hover:text-pink-400 transition">Programas</a>
                    <a href="#suporte" className="text-gray-300 hover:text-pink-400 transition">Suporte</a>
                </nav>

                {/* CTA do Header */}
                <a
                    href="#checkout"
                    className="
                        bg-pink-500 hover:bg-pink-600 
                        text-white font-bold 
                        py-2 px-6 rounded-full 
                        text-sm 
                        transition duration-300 
                        hidden sm:inline-block 
                    ">
                    COMPRAR R$12,99
                </a>

            </div>
        </header>
    );
};

export default Header;