import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import Countdown from './components/Countdown'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-darkness text-daisy overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <MapSection />
      <Countdown />
      <Footer />
    </div>
  )
}
