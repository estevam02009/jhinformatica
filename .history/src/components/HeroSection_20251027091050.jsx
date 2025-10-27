import React from 'react';

const HeroSection = () => {
    return (
        <section className='bg-gradient-to-r from-violet-900 to-gray-900 py-20 md:py-32'>
            <div className='container mx-auto px-4 text-center'>
                <p className="text-xl md:text-2xl text-violet-300 mb-8 max-w-3xl mx-auto">
                    Faça de R$1.500 a R$2.000 mensal nas suas horas vagas.
                </p>
                <h1 className='text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight'>
                    +1000 PROGRAMAS <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400'>PREMIUM</span>
                </h1>
                <h2 className='text-3xl'>PARA WINDOWS</h2>
            </div>
        </section>
    );
}

export default HeroSection;