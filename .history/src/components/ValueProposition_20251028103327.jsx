// ./src/components/ValueProposition.jsx

import React from 'react';

const ValueProposition = () => {
    return (
        <section className="py-20 bg-gray-900 border-t border-violet-700">
            <div className="container mx-auto px-4 text-center">

                {/* Ícone de Destaque */}
                <p className="text-6xl mb-6 transform rotate-6 animate-pulse">
                    💰
                </p>

                {/* Título de Valor com Gradiente */}
                <h2 className="
          text-4xl md:text-5xl font-extrabold mb-4 
          bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400
          max-w-4xl mx-auto leading-snug
        ">
                    Faça de R$ 1.500 a R$ 2.000 mensal nas suas horas vagas
                </h2>

                {/* Destaque do Preço/Pagamento Único */}
                <div className="
          inline-block 
          bg-pink-500/10       // Fundo rosa muito suave (10% de opacidade)
          text-pink-400 
          font-bold 
          text-2xl sm:text-3xl 
          p-4 rounded-lg 
          mt-6 mb-8
          border border-pink-500 // Borda que destaca
        ">
                    <p>PAGUE UMA ÚNICA VEZ. ESQUEÇA MENSALIDADES.</p>
                </div>

                {/* Descrição Detalhada da Oferta */}
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Tenha acesso vitalício a mais de 1.000 programas premium por apenas{' '}
                    <strong className="text-white bg-violet-600 px-1 rounded">R$17,99</strong>.
                    Sem pegadinhas, sem mensalidades, sem renovações. Um pagamento único para uma vida inteira de acesso.
                </p>

                {/* CTA Opcional (Reafirmação do Botão Principal) */}
                <a
                    href="#checkout"
                    className="
            mt-12 inline-block 
            bg-violet-600 hover:bg-violet-700 
            text-white font-bold 
            py-3 px-8 rounded-lg shadow-lg 
            uppercase tracking-wider transition duration-300
          "
                >
                    QUERO MEU ACESSO VITALÍCIO
                </a>

            </div>
        </section>
    );
};

export default ValueProposition;