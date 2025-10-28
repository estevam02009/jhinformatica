import PromoBar from "./components/PromoBar"
import HeroSection from "./components/HeroSection"
import KeyMetrics from "./components/KeyMetrics"
function App() {

  return (
    <div className="min-h-screen bg-gray-800">
      <PromoBar />
      <HeroSection />
      <KeyMetrics />
      <main className="container mx-auto flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Landing Page em construção
        </h1>
      </main>
    </div>
  )
  
}

export default App
