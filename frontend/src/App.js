import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Login from './pages/login/Login'
import Home from './pages/Home.jsx'
import Registration from './pages/registration/Registration.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth.js';
import Catalog from './pages/catalog/Catalog.jsx';
import Cart from './components/cart/Cart.jsx';
import Products from './components/Product/Product.jsx'
import Context from './components/Context';
import Tovar from './pages/Tovar/Tovar.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Admin from './pages/admin/Admin.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import ProductForm from './components/ProductForm/ProductForm.jsx';
import CheckOut from './pages/CheckOut/CheckOut.jsx';
import Profile from './pages/profile/Profile.jsx';

function App() {


  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  

  return (
    <>
<Context>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Registration />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/cart' element={<Cart />} />
    <Route path="/tovar/:title" element={<Tovar />} />
    <Route path='/aboutUs' element={<AboutUs />} />
    <Route path='/admin' element={<Admin />} />
    <Route path="/products/new" element={<ProductForm />} />
    <Route path="/products/:id/edit" element={<ProductForm />} />
    <Route path="/checkout" element={<CheckOut />} />
    <Route path="/profile" element={<Profile />} />
      </Routes>
      </Context>
      </>
  );
}

export default App
