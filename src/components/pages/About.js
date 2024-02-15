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
            </br>passionate problem solver based in Houston, Texas. 📍
          </p>
          <div className='row mt-5'>
            <div className='contact'>
              <h4 className='float-start pt-2 mr-2'>Contact | </h4>
              <a className='link' href='https://www.linkedin.com/in/andrew-rowan-0bb5a018b/' target='_blank' rel="noreferrer noopener">
                <img src="https://skillicons.dev/icons?i=linkedin" alt="skill-icon"></img>
              </a>
              <a className='link' href='https://github.com/andrewr50' target='_blank' rel="noreferrer noopener">
                <img src="https://skillicons.dev/icons?i=github" alt="skill-icon"></img>
              </a>
              <a className='link' href='mailto:andrew.rowan50@gmail.com' target='_blank' rel="noreferrer noopener">
                <img src="https://skillicons.dev/icons?i=gmail" alt="skill-icon"></img>
              </a>
            </div>
          </div>
          <div className='techStack'>
            <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,react,gql,mongodb,bootstrap," alt="skill-icon"></img>
          </div>
        </div>
        <div class="flex col-3 mt-4">
          <img class="headshot" id="profilePic" src={headShot} />
        </div>
      </div>
    </div>
  );
}
