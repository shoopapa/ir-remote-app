import React from 'react';
import './App.css';

const AppStyle: React.CSSProperties = {
  textAlign: 'center'
}

const AppHeaderStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
}

function App() {
  return (
    <div style={AppStyle}>
      <header style={AppHeaderStyle}>
        <hi>'hi'</hi>
      </header>
    </div>
  );
}

export default App;
