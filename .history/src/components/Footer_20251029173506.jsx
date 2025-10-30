// ./src/components/Footer.jsx

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 pt-16 pb-8 border-t border-violet-800">
            <div className="container mx-auto px-4">

                {/* Seção Principal do Rodapé - Dividida em Colunas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10 mb-8">

                    {/* Coluna 1: Logo e Descrição */}
                    <div>
                        <div className="text-2xl font-extrabold tracking-tight mb-4">
                            <span className="
                                bg-clip-text text-transparent bg-gradient-to-r 
                                from-pink-400 to-violet-400
                            ">
                                JH
                            </span>
                            <span className="text-white ml-1">Informática</span>
                        </div>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Sua fonte de acesso vitalício aos melhores softwares do mercado por um preço único.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Acesso Rápido</h3>
                        <ul className="space-y-2">
                            <li><a href="#funcionalidades" className="text-gray-400 hover:text-pink-400 transition text-sm">Funcionalidades</a></li>
                            <li><a href="#programas" className="text-gray-400 hover:text-pink-400 transition text-sm">Programas Inclusos</a></li>
                            <li><a href="#checkout" className="text-gray-400 hover:text-pink-400 transition text-sm">Compre Agora</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Informações Legais */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Informações</h3>
                        <ul className="space-y-2">
                            <li><a href="/termos" className="text-gray-400 hover:text-pink-400 transition text-sm">Termos de Uso</a></li>
                            <li><a href="/privacidade" className="text-gray-400 hover:text-pink-400 transition text-sm">Política de Privacidade</a></li>
                            <li><a href="/garantia" className="text-gray-400 hover:text-pink-400 transition text-sm">Política de Garantia</a></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato (Simulado) */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
                        <p className="text-sm text-gray-400">Email: jhinformatica@gmail.com</p>
                        <p className="text-sm text-gray-400 mt-2">Suporte 24/7</p>
                        {/* Aqui poderiamos adicionar ícones de redes sociais */}
                    </div>

                </div>

                {/* Linha de Copyright */}
                <div className="text-center pt-6">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} JH Informática. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        Feito com 💖 e Tailwind CSS.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;