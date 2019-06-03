import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Experiences from './components/Experiences/Experiences';
import './App.scss';

function App() {
  return (
    <div>
      <Header />

      <div className="page-content">
        <Profile id="profile"/>
        <Experiences id="experiences"/>
        <Profile id="abilities"/>
        <Profile id="projects"/>
      </div>
    </div>
  );
}

export default App;
