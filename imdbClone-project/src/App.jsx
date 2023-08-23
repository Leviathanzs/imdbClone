import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './pages/Hero'
import Film from './pages/Film'



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' Component={Hero} />
        <Route path='/film' Component={Film} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App