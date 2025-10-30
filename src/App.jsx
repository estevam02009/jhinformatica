import PromoBar from "./components/PromoBar"
// import Header from './components/Header';
import HeroSection from "./components/HeroSection"
import KeyMetrics from "./components/KeyMetrics"
import ValueProposition from './components/ValueProposition';
import FeaturesSection from './components/FeaturesSection';
import FinalCTA from "./components/FinalCTA";
import IncludedPrograms from './components/IncludedPrograms';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB'
function App() {

  // Defina seu número e mensagem padrão aqui (Substitua!)
  const numeroWhatsapp = '5584991151003'; // Exemplo: 55 (código do país) 11 (DDD) 987654321 (Número)
  const mensagemPadrao = 'Olá! Gostaria de saber mais sobre a oferta de Programas Premium.';

  return (
    <div className="min-h-screen bg-gray-800">
      <PromoBar />
      <Header />
      <HeroSection />
      <KeyMetrics />
      <ValueProposition />
      <FeaturesSection />
      <FinalCTA />
      <IncludedPrograms />
      {/* <Footer /> */}

      <WhatsAppFAB phoneNumber={numeroWhatsapp} message={mensagemPadrao} />
    </div>
  )
  
}

export default App
