
import './App.css';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './pages/ProductDetails';
import {Homepage } from './pages/Homepage';
import {Shoppage} from './pages/Shoppage';

import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <h1>e-commerce-project</h1> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collections/all" element={<Shoppage />} />
        <Route path="/collections/all/:id" element={<ProductDetails />} />

      </Routes>
    </div>
  );
}

export default App;
