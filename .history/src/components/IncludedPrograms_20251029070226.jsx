// ./src/components/IncludedPrograms.jsx

import React from 'react';

// Emojis de Estrela para a Avaliação
const StarRating = ({ rating, count }) => {
  const fullStars = Math.floor(rating);
  const stars = Array(5).fill('⭐'); // Usamos o emoji de estrela para simplificar

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-3xl mb-2">
        {stars.map((star, index) => (
          // Damos destaque às estrelas preenchidas
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
        
        {/* Título Principal */}
        <h2 className="
          text-4xl md:text-5xl font-extrabold mb-4 
          text-white
          max-w-4xl mx-auto leading-tight
        ">
          PROGRAMAS INCLUSOS
        </h2>

        {/* Subtítulo Detalhado */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Versões 2024/2025 dos softwares mais utilizados no mundo, prontas para instalar e usar.
        </p>

        {/* Seção de Avaliação (Review Score) */}
        <div className="
            p-8 bg-gray-800 
            rounded-xl shadow-2xl 
            max-w-md mx-auto 
            border-b-4 border-pink-500 // Destaque visual
            transform hover:scale-[1.02] transition duration-300
        ">
            <StarRating rating={4.9} count={'10.000'} />
            
            <p className="mt-4 text-lg text-gray-300">
                A melhor coleção de programas premium com acesso vitalício do mercado!
            </p>
        </div>
        
        {/* Aqui seria o espaço para colocar ícones/logos dos programas, se tivéssemos a arte */}
        {/* Exemplo de onde colocar logos: */}
        {/* <div className="mt-16 flex justify-center flex-wrap gap-8">
            <img src="/logo-photoshop.png" alt="Photoshop" className="h-12 opacity-70 hover:opacity-100 transition" />
            <img src="/logo-premiere.png" alt="Premiere" className="h-12 opacity-70 hover:opacity-100 transition" />
            ...
        </div> */}

      </div>
    </section>
  );
};

export default IncludedPrograms;