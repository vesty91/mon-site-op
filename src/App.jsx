import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import Services from './pages/Services';
    import Configurator from './pages/Configurator';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Blog from './pages/Blog';
    import FAQ from './pages/FAQ';

    function App() {
      return (
        <>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/configurator" element={<Configurator />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </>
      );
    }

    export default App;
