import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Page from './components/Page';
import Saved from './components/Saved';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />}  />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
