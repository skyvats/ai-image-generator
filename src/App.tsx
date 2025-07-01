// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ImageGenerator from './components/ImageGenerator';
import Layout from "./components/Layout.tsx";
import AboutProject from "./components/AboutProject.tsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/image-generator" element={<ImageGenerator />} />
                    <Route path="/about" element={<AboutProject/>} />
                    <Route path="/contact" element={<ContactInfo/>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
