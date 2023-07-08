import * as React from 'react';
import './style.css';
import Box from '@mui/material/Box';

export default function App() {
  // const weather = async () => {
  //   const response = await fetch(
  //     `https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo`
  //   );
  //   return response.json();
  // };
  // console.log(weather());

  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo`
  )
    .then((response) => response.json())
    .then((response) => console.log(response));

  fetch(`localhost:3001/number`)
    .then((response) => response.json())
    .then((response) => console.log(response));

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
    </div>
  );
}
