import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useMemo, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import { GlobalStyle } from 'global-style';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
