import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import NavTop from './component/NavTop';

function App() {
  return (
    <div>
      <NavTop/>
      <Routes>
        <Route path="/" 
               element={<HomePage/>}/>
        <Route path="/products/:id" 
               element={<ProductDetailPage/>}/>
        <Route path="/login" 
               element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
