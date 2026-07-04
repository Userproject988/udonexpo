import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Countdown from './components/Countdown'
import About from './components/About'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-expo-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Countdown />
      <About />
      <Gallery />
      <MapSection />
      <Footer />
    </div>
  )
}
