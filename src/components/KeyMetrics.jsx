// ./src/components/KeyMetrics.jsx

import React from 'react';

// Componente Card Individual (para reutilização)
const MetricCard = ({ number, title }) => (
    <div className="
    flex flex-col items-center justify-center 
    p-6 sm:p-8 
    bg-gray-700          // Fundo do card em cinza escuro
    rounded-xl 
    shadow-lg 
    border border-violet-500 // Borda de destaque
    transform hover:translate-y-[-5px] transition duration-300 // Efeito de levantamento
    w-full
  ">
        <p className="
      text-4xl sm:text-5xl font-extrabold mb-1 
      bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400 // Gradiente no número
    ">
            {number}
        </p>
        <p className="text-sm sm:text-lg font-semibold text-white uppercase tracking-wider text-center">
            {title}
        </p>
    </div>
);


const KeyMetrics = () => {
    const metrics = [
        { number: '+1000', title: 'Programas' },
        { number: '100%', title: 'Ativados' },
        { number: '24/7', title: 'Suporte' },
    ];

    return (
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">

                {/* Título opcional para a seção */}
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Por Que Escolher a Nossa Plataforma?
                </h2>

                {/* Layout dos Cards: Flexbox responsivo */}
                <div className="
          grid grid-cols-1 md:grid-cols-3 // Em telas pequenas (1 coluna), em telas médias (3 colunas)
          gap-8                         // Espaçamento entre os cards
        ">
                    {metrics.map((metric, index) => (
                        <MetricCard
                            key={index}
                            number={metric.number}
                            title={metric.title}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default KeyMetrics;