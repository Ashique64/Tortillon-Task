import Products from './Pages/Products/Products'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import About from './Pages/About/About';
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Products />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
