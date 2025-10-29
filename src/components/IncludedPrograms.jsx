// ./src/components/IncludedPrograms.jsx

import React from 'react';

// --- Dados dos Programas ---
const programList = [
    { icon: '🎨', name: 'Design Pro Suite' },
    { icon: '💻', name: 'Dev Tools Premium' },
    { icon: '📊', name: 'Data Analysis Pack' },
    { icon: '✏️', name: 'PDF Editor Ultimate' },
    { icon: '🎬', name: 'Video Master Pro' },
    { icon: '🔊', name: 'Audio Studio Pack' },
    { icon: '⚙️', name: 'System Optimizer' },
    { icon: '☁️', name: 'Cloud Storage Pro' },
    // A ideia é que esta lista represente a variedade dos +1000
];

// --- Componente Card Individual do Programa ---
const ProgramCard = ({ icon, name }) => (
    <div className="
        p-4 bg-gray-900 border border-gray-700 rounded-lg 
        flex items-center space-x-3
        transform hover:scale-[1.05] hover:bg-violet-800 transition duration-300
    ">
        <span className="text-2xl">{icon}</span>
        <p className="text-sm font-semibold text-white truncate">{name}</p>
    </div>
);

// --- Componente StarRating (Mantido) ---
const StarRating = ({ rating, count }) => {
    const fullStars = Math.floor(rating);
    const stars = Array(5).fill('⭐');

    return (
        <div className="flex flex-col items-center">
            <div className="flex text-3xl mb-2">
                {stars.map((star, index) => (
                    <span key={index} className={index < fullStars ? 'text-yellow-400' : 'text-gray-500'}>
                        {star}
                    </span>
                ))}
            </div>
            <p className="text-xl font-bold text-white">
                Avaliação {rating}/5
                <span className="text-gray-400 font-normal"> - Mais de {count} reviews</span>
            </p>
        </div>
    );
};


const IncludedPrograms = () => {
    return (
        <section className="py-20 bg-gray-700 border-t border-gray-600">
            <div className="container mx-auto px-4 text-center">

                {/* Título Principal (Mantido) */}
                <h2 className="
          text-4xl md:text-5xl font-extrabold mb-4 
          text-white
          max-w-4xl mx-auto leading-tight
        ">
                    PROGRAMAS INCLUSOS
                </h2>

                {/* Subtítulo Detalhado (Mantido) */}
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    Versões 2024/2025 dos softwares mais utilizados no mundo, prontas para instalar e usar.
                </p>

                {/* Seção de Avaliação (Review Score) - Mantida */}
                <div className="
            p-8 bg-gray-800 
            rounded-xl shadow-2xl 
            max-w-md mx-auto 
            border-b-4 border-pink-500
            transform hover:scale-[1.02] transition duration-300
        ">
                    <StarRating rating={4.9} count={'10.000'} />

                    <p className="mt-4 text-lg text-gray-300">
                        A melhor coleção de programas premium com acesso vitalício do mercado!
                    </p>
                </div>

                {/* NOVO: Grid de Cards de Programas */}
                <div className="
            mt-16
            grid grid-cols-2 md:grid-cols-4 // Layout: 2 colunas em telas pequenas, 4 em médias/grandes
            gap-4 sm:gap-6
            max-w-5xl mx-auto // Limita a largura do grid
        ">
                    {programList.map((program, index) => (
                        <ProgramCard
                            key={index}
                            icon={program.icon}
                            name={program.name}
                        />
                    ))}
                </div>

                {/* Botão para ir para o CTA Final (opcional, para reforçar a compra) */}
                <div className="mt-12">
                    <a
                        href="#checkout"
                        className="
                    inline-block 
                    bg-violet-600 hover:bg-violet-700 
                    text-white font-bold 
                    py-3 px-8 rounded-lg shadow-lg 
                    uppercase tracking-wider transition duration-300
                "
                    >
                        VER TODOS OS PROGRAMAS (+1000)
                    </a>
                </div>


            </div>
        </section>
    );
};

export default IncludedPrograms;