import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Layout from '@components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App