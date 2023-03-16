import React from "react";
import Sidebar from "./components/Sidebar";
// import Submenu from "./components/Submenu";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Sharedlayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sharedlayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Sharedlayout>
        <Sidebar />
        {/* <Submenu /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
