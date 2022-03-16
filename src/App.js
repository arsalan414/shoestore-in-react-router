import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route, NavLink} from "react-router-dom";
import Products from './Products';
import Home from './Home'; 
import ProductsIndex from './ProductsIndex';

const App = () => {
  return (
    <div className='main'>
      <Router>
        <NavLink className={"navlink"} to="/">Home</NavLink>
        <NavLink className={"navlink"} to="Products">Products</NavLink>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Products' element={<Products />} />
          <Route path='/Products/:ProductId' element={<ProductsIndex />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App