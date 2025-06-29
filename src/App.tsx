import './App.css'
import Home from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageGenerator from "./components/ImageGenerator.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
              <Route path="/learn-more" element={<div>Learn More Page</div>} />
              <Route path="/image-generator" element={<ImageGenerator />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
