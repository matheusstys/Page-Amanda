import Nav from './components/Nav'
import Hero from './components/Hero'
import Areas from './components/Areas'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Citacao from './components/Citacao'
import Depoimentos from './components/Depoimentos'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

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
        <Depoimentos />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
