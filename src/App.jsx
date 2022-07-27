import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Layout from '@components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App