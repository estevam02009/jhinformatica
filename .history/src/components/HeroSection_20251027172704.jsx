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
                <h2 className='text-3xl md:text-4xl font-bold mt-8 mb-8 max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400'>PARA WINDOWS</h2>
                <p className='text-lg md:text-xl text-violet-300'>
                    TOTALMENTE ATIVADOS E ATUALIZADOS
                </p>

                <div className='mt-8 mb-10 max-w-xs mx-auto p-4 rounded-xl bg-red-800 shadow-2xl border-4 border-red-500 transform hover:scale-105'>
                    <p className='text-sm font-semibold text-violet-200 uppercase -tracking-widest'>
                        preço especial
                    </p>
                    <p className='text-3xl font-bold text-white my-1'>
                        APENAS R$ 12,99
                    </p>
                    <p className='text-sm font-medium text-violet-200 uppercase'>
                        vitalício - pague uma vez só
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;