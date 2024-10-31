import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './page/HomePage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import NavTop from './component/NavTop';

function App() {

  const [Authorize, setAuthorize] = useState(false); //true일시 로그인

  useEffect(()=>{
    console.log(Authorize)
  },[Authorize])
  return (
    <div>
      <NavTop/>
      <Routes>
        <Route path="/" 
               element={<HomePage/>}/>
        <Route path="/products/:id" 
               element={<ProductDetailPage/>}/>
        <Route path="/login" 
               element={<LoginPage setAuthorize={setAuthorize}/>}/>
      </Routes>
    </div>
  );
}

export default App;
