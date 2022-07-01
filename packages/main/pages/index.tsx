import About from '../components/container/About/About'
import Header from '../components/container/Header/Header'
import Testimonial from '../components/container/Testimonial/Testimonial'
import Skills from '../components/container/Skills/Skills'
import Work from '../components/container/Work/Work'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/container/Footer/Footer'

export function Index() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Index
