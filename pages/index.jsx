import Contact from '../components/Contact'
import Info from '../components/Info'
import Menu from '../components/Menu'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <div>
      <Welcome />
      <Menu />
      <Contact />
      <Info />
    </div>
  )
}
