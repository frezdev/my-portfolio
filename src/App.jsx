import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@routes/Home';
import Contact from '@routes/Contact';
import Projects from '@routes/Projects';
import About from '@routes/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>ERROR 404: Not Found</h1>} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App