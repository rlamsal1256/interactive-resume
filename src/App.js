import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import './App.scss';

function App() {
  return (
    <div>
      <Header />

      <div className="page-content">
        <Profile id="profile"/>
        <Profile id="experiences"/>
        <Profile id="abilities"/>
        <Profile id="projects"/>
      </div>
    </div>
  );
}

export default App;
