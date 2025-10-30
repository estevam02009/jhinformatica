import PromoBar from "./components/PromoBar"
import Header from './components/Header';
import HeroSection from "./components/HeroSection"
import KeyMetrics from "./components/KeyMetrics"
import ValueProposition from './components/ValueProposition';
import FeaturesSection from './components/FeaturesSection';
import FinalCTA from "./components/FinalCTA";
import IncludedPrograms from './components/IncludedPrograms';
import Footer from './components/Footer';
function App() {

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
      <Footer />
    </div>
  )
  
}

export default App
