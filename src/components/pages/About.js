import React from 'react';
import headShot from '../assets/images/headshot.jpeg'

export default function About() {
  return (
    <div className='container'>
      <div class='m-5 row justify-content-center' >
        <div class='col-6 mt-4'>
        <h1>Full Stack Web Developer</h1>
          <p class='text-break justify-content-start mt-5'>
            Hi, I'm Andrew Rowan. I'm a Full Stack Web Developer and <br>
            </br>passionate problem solver based in Houston, Texas.
          </p>
          <span></span>
        </div>
        <div class="flex col-3">
          <img class="headshot" id="profilePic" src={headShot} />
        </div>
        <div class=''>
        
        </div>
      </div>
    </div>
  );
}
