import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import URL from './constants/url';

import HomePageMenuContainer from './components/home/HomePageMenuContainer';

import Home from './pages/home/Home';
import NoMatch from './pages/NoMatch';

import CharacterInfo from './pages/characterinfo/CharacterInfo';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => {
        console.log(response);

        if (!response.ok) {
          throw new Error('백엔드 연결 실패!');
        }
        return response.text();
      })
      .then(data => setHello(data))
      .catch(error => {
        console.error('백엔드 연결 실패:', error.message);
      });
  }, []);



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
