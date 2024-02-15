import React from 'react';

export default function Contact() {
  return (
    <div className='m-5'>
      <h1 className='text-center'>Contact</h1>
      <div className='mt-4 text-center'>
      <i class="fa-brands fa-linkedin"></i>
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
  );
}
