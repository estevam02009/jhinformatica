import PromoBar from "./components/PromoBar"
import HeroSection from "./components/HeroSection"
import KeyMetrics from "./components/KeyMetrics"
import ValueProposition from './components/ValueProposition';
import FeaturesSection from './components/FeaturesSection';
import FinalCTA from "./components/FinalCTA";
import IncludedPrograms from './components/IncludedPrograms';
function App() {

  return (
    <div className="min-h-screen bg-gray-800">
      <PromoBar />
      <HeroSection />
      <KeyMetrics />
      <ValueProposition />
      <FeaturesSection />
      <FinalCTA />
      <IncludedPrograms />
    </div>
  )
  
}

export default App
