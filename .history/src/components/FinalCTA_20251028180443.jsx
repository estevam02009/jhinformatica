import React from 'react';

const FinalCTA = () => {
    return (
        <section className="bg-violet-900 py-20 text-center border-t border-b border-pink-500">
            <div className='container mx-auto px-4'>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
                    MAIS DE <span className='text-pink-400'>+5000 CLIENTES</span> JÁ ECONOMIZARAM
                </h2>

                <p className='text-xl text-violet-200 mb-10 max-w-3xl mx-auto'>
                    Enquanto outros pagam R$200+ por mês em assinaturas, você paga{' '}
                    <strong className='text-pink-400 font-extrabold'>R$12,99 uma única vez</strong>
                </p>

                <a href="#"
                    className='inline-block bg-pink-500 hover:bg-pink-400 text-white font-bold py-4 px-12 rounded-xl shadow-2xl uppercase text-2xl tracking-wider transition duration-300 transform hover:scale-105'
                >
                    SIM, EU QUERO ECONOMIZAR!
                </a>
            </div>
        </section>
    )
}

export default FinalCTA;