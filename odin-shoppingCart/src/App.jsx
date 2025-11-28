import React from 'react';
import { useState } from 'react';
import TopBar from "./components/TopBar/TopBar.jsx"
import HomeContent from "./components/HomeContent/HomeContent.jsx"
import Shop from "./components/Shop/Shop.jsx"
import Checkout from './components/Checkout/Checkout.jsx';
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <TopBar />
        <main>
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/shop' element={<Shop cart={cart} setCart={setCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </div>
  )
}

export default App
