import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sample() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>画面遷移します！</button>
    </div>
  );
}
