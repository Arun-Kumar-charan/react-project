import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Gallery from './pages/Gallery/Gallery'
import Register from './pages/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterForm from './components/RegisterForm'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Gallery' element={<Gallery />}></Route>
          <Route path='Service' element={<Service />}></Route>
          <Route path='Register' element={<Register />}></Route>
          <Route path="/RegisterForm" element={<RegisterForm />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;