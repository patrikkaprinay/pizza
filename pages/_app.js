import React from 'react'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import '../css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
