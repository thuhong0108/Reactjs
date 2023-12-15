import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Category from './components/Category';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import InstagramStyle from './components/InstagramStyle';
import ProductByCategory from './components/ProductByCategory';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='instagram-shop' element={<InstagramStyle />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Banner />} /> 
      </Routes>
      
      <Routes>
        <Route path='/' element={<Category />} /> 
      </Routes>

      <Routes>
        <Route path='/' element={<Products />} /> 
      </Routes>

      <Routes>
        <Route path='product/:productId' element={<ProductDetail />} /> 
        <Route path='product-category/:category' element={<ProductByCategory />} /> 
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
