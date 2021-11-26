import React from 'react'
import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../css/styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
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
    <React.Fragment>
      <Navbar scrolled={scrolled} />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
