import React, { Children } from 'react'
import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/Order/Order'
import NoPage from './pages/nopage/NoPage';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import MyState from './data/myState';
import ProductInfo from './pages/productInfo/ProductInfo';
import Signup from './pages/registration/SignUp';
import LogIn from './pages/registration/Login';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import AllProducts from './pages/allproducts/AllProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/Order' element={  <ProtectedRoute> <Order /> </ProtectedRoute>} />
          <Route  path='/Cart' element={<Cart />} />
          <Route  path='/dashboard' element={ <ProtectedRouteForAdmin> <Dashboard/> </ProtectedRouteForAdmin>} />
          <Route path='/productinfo/:id' element={<ProductInfo />}/>  
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/addproduct' element={ <ProtectedRouteForAdmin><AddProduct/></ProtectedRouteForAdmin>  } />
          <Route path='/updateproduct' element={<ProtectedRouteForAdmin><UpdateProduct /></ProtectedRouteForAdmin>} />
          <Route path='/allproducts' element={<AllProducts/>} />
          <Route  path='/*' element={<NoPage/>} />
        </Routes>
        <ToastContainer />
    </Router>
  </MyState>     
  )
}

export default App;


//user


export const ProtectedRoute = ({children})=>{
  const user = localStorage.getItem('user');
  if(user){
    return children;
  } else {
    return <Navigate to = {'/'} />
  }
};

//Admin

export const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'));
 
  if(admin.user.email === 'engrabdulrehman@live.com'){
    return children;
  }else {
    return <Navigate to= {'/login'} />
  }
}