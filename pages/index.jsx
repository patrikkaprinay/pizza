import Contact from '../components/Contact'
import Info from '../components/Info'
import Menu from '../components/Menu'
import Welcome from '../components/Welcome'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(true)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }, [])
  return (
    <div>
      <Navbar scrolled={scrolled} />
      <Welcome />
      <Menu />
      <Contact />
      <Info />
      <Footer />
    </div>
  )
}
