import React from 'react';
import './experiences.scss';

const Experiences = () => (
  <div className="container">
    <h2>Experiences</h2>
    <p className="sub-header">
      “Protons give an atom its identity, electrons its personality.”<br />- Bill Bryson, A short history of nearly
      everything
    </p>
    <hr />

    <h3>Educations</h3>
    <div className="experiences">
      <div className="experience-row">
        <div className="experience-title">
          <h4>Worcester Polytechnic Institute</h4>
          <p className="experience-period">
            Mar 2014 -
            May 2014
          </p>
        </div>
        <div className="experience-description">
          Right
        </div>
      </div>
    </div>
  </div>

);

export default Experiences;