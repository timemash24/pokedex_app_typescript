import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import MiniGame from 'pages/MiniGame';
import GameResult from 'pages/GameResult';
import { GlobalStyle } from 'global-style';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="/minigame" element={<MiniGame />} />
        <Route path="/minigame/result" element={<GameResult />} />
      </Routes>
    </Router>
  );
}

export default App;
