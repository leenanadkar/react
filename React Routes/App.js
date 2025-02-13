import React from "react";
import {BrowserRouter as 
Router, Route, Routes, Link} from
"react-router-dom";

//BrowserRouter - Component
// Does? Enables routing inside
//the react app

//Router - defining all routes

//Route - tells component will be 
//rendered at what path
//eg: /about - About component

//Routes - container which stores
//multiple Router

//Link - React version for Anchor 
//tag 
//<Link to = "/about"> About us
//</Link>

//Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/contact">Contact</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" 
        element={<Home/>}/>

        <Route path = "/about" 
        element={<About/>}/>

        <Route path = "/contact" 
        element={<Contact/>}/>
      </Routes>

    </Router>  
  );
}

export default App;
