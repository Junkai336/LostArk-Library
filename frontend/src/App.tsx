import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import URL from './constants/url';

import { Button } from '@mui/material';
import CharacterInfo from './pages/Character/CharacterInfo';

function Home() {
  return <Button><a href="/">home</a></Button>;
}

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
    <Router>
      <Routes>
        <Route path={URL.HOME} element={<Home />} />
        <Route path={URL.CHARACTER_INFO} element={<CharacterInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
