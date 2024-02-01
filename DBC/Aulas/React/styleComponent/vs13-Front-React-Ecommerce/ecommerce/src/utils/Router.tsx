import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Checkout } from '../pages/Checkout/checkout'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import { StoreProvider } from '../context/StoreContext'
import React from 'react'

export function Router() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </ShoppingCartProvider>
      </StoreProvider>
    </BrowserRouter>
  )
}
