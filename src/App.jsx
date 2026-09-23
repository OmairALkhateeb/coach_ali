import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Achievements from './components/sections/Achievements'
import Apply from './components/sections/Apply'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import TitleMarquee from './components/sections/TitleMarquee'
import Transformations from './components/sections/Transformations'
import { useApplicationForm } from './hooks/useApplicationForm'

export default function App() {
  // Form state is lifted here so service cards can pre-select a program.
  const applicationForm = useApplicationForm()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TitleMarquee />
        <About />
        <Achievements />
        <Services onSelectProgram={applicationForm.selectProgram} />
        <Transformations />
        <Apply form={applicationForm} />
      </main>
      <Footer />
    </>
  )
}
