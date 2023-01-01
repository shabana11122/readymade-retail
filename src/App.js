import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coupons from './coupons/Coupons';
import Deals from './deals/Deals';
import Products from './products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coupons />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
