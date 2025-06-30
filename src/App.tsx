// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ImageGenerator from './components/ImageGenerator';
import Layout from "./components/Layout.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/image-generator" element={<ImageGenerator />} />
                    <Route path="/about" element={<div>About Page</div>} />
                    <Route path="/contact" element={<div>Contact Page</div>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
