import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/Order/Order'
import NoPage from './pages/nopage/NoPage';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Order' element={<Order />} />
        <Route  path='/Cart' element={<Cart />} />
        <Route  path='/dashboard' element={<Dashboard/>} />
        <Route  path='/*' element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App;