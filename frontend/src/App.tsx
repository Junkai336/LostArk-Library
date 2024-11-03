import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import URL from './constants/url';

import HomePageMenuContainer from './components/menu/HomePageMenuContainer';

import Home from './pages/home/Home';
import NoMatch from './pages/NoMatch';

import CharacterInfo from './pages/characterinfo/CharacterInfo';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePageMenuContainer />}>
          <Route path="*" element={<NoMatch />} />
          <Route path={URL.HOME} element={<Home />} />
          <Route path={URL.CHARACTER_INFO} element={<CharacterInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
