import * as React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function Sample() {
  const navigate = useNavigate();

  // fetch(`https://letspractice-react3.free.beeceptor.com/test`)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response));

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <button onClick={() => navigate('/sample2')}>画面遷移します！</button>
    </div>
  );
}
