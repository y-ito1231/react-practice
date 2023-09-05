import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './Sample';
import Sample2 from './Sample2';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/sample2" element={<Sample2 />} />
      </Routes>
    </BrowserRouter>
  );
}
