import React, { useEffect, useState } from 'react';

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
    <div>
      <p>hello react! : {hello}</p>
    </div>
  );
}

export default App;
