import Nav from './components/Nav'
import Hero from './components/Hero'
import Areas from './components/Areas'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Citacao from './components/Citacao'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'
import WppFloat from './components/WppFloat'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Areas />
        <Sobre />
        <ComoFunciona />
        <Citacao />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WppFloat />
    </>
  )
}
