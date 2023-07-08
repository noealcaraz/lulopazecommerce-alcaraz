import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import InicioPage from './pages/Inicio/InicioPage'
import ContactPage from './pages/Contacto/ContactPage'
import ShopPage from './pages/Shop/ShopPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import ProductCategoryPage from './pages/ProductCategory/ProductCategoryPage';

//COMPONENTS
import NavbarHeader from './components/NavBar/NavBar'
import CartOverlay from './pages/Carrito/CartOverlay';

//CONTEXT
import ShoppingCartContextProvider from './context/ShoppingCartContext';



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <NavbarHeader/>
            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product-detail/:id" element={<ProductDetailPage />} />
              <Route path="/product-category/:category" element={<ProductCategoryPage />} />
              <Route path="/carrito" element={<CartOverlay />} />
            </Routes>
        </ShoppingCartContextProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App;