import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './landing_page/signUp/SignUp'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import ProductsPage from './landing_page/products/ProductsPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)
