import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import PageLayout from '../components/PageLayout.jsx'
import Projects from '../components/Projects/Projects.jsx'

export default function Home() {
  return (
    <PageLayout title="Blagabo">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </PageLayout>
  )
}
