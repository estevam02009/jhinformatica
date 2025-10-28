// ./src/components/FeaturesSection.jsx

import React from 'react';

// Dados das Funcionalidades, incluindo ícones (usando Emojis para simplicidade)
const features = [
    {
        icon: '🔒',
        title: '100% Seguro',
        description: 'Todos os programas são testados e livres de vírus.'
    },
    {
        icon: '⚡',
        title: 'Ativação Automática',
        description: 'Instale e use imediatamente, sem complicação.'
    },
    {
        icon: '📧',
        title: 'Suporte por E-mail',
        description: 'Atendimento 24/7 via e-mail para o que precisar.'
    },
    {
        icon: '⬇️',
        title: 'Download Imediato',
        description: 'Acesso instantâneo a todos os programas após a compra.'
    },
    {
        icon: '✨',
        title: 'Atualizações Gratuitas',
        description: 'Receba sempre as versões mais recentes, sem custo adicional.'
    },
    {
        icon: '✅',
        title: 'Garantia de 7 Dias',
        description: 'Devolvemos 100% do seu dinheiro se não ficar satisfeito.'
    },
];

// Componente Card de Funcionalidade
const FeatureCard = ({ icon, title, description }) => (
    <div className="
        p-6 sm:p-8 
        bg-gray-700 
        rounded-xl 
        shadow-xl 
        border border-gray-600
        hover:border-pink-500 transition duration-300 
    ">

        {/* Ícone com Destaque de Gradiente (cor de fundo no círculo) */}
        <div className="
            inline-flex items-center justify-center 
            w-12 h-12 mb-4 rounded-full 
            bg-gradient-to-r from-pink-500 to-violet-500 // Fundo do círculo com Gradiente
            text-2xl 
            shadow-lg
        ">
            {icon}
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        {/* Descrição */}
        <p className="text-gray-400">{description}</p>
    </div>
);


const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-extrabold text-center text-white mb-16">
                    Tudo que Você Precisa para Ter Sucesso
                </h2>

                {/* Layout dos Cards: Grid 3 Colunas (md:grid-cols-3) */}
                <div className="
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                    gap-8 sm:gap-10                              
                ">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;