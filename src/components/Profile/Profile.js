import React from 'react';
import './profile.scss';

const Profile = ({ id }) => {
  return (
    <div id={id} className="profile">
      <h2>Profile</h2>
      <p className="sub-header">I'm a creative web developer</p>
      <hr />

      <div className="flex-row">
        <div className="flex-col">
          <h3>About me</h3>
          <p>
            I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
          </p>
        </div>


        <div className="flex-col">
          <img src="http://www.pascalvangemert.nl/view/images/pascal_van_gemert.png" alt="Random pic" />
        </div>


        <div className="flex-col">
          <h3>Details</h3>
          <p>
            <strong>Name:</strong>
            <br />
            Rupak Lamsal
            <br />
            <strong>Age:</strong>
            <br />
            26 years
            <br/>
            <strong>Location:</strong>
            Warwick, RI
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
