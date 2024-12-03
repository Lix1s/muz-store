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
    <Route path='/tovar' element={<Tovar />} />
      </Routes>
      </Context>
      </>
  );
}

export default App
