import React from 'react';
import resumeImg from '../assets/images/Andrew-Rowan-Resume-2.6.24.png'

export default function Resume() {
  return (
    <div className='row resumeContainer'>
      <a href='..\assets\documents\Andrew-Rowan-Resume-2.6.24.pdf' download='Andrew-Rowan-Resume'>
      <iframe className='resumeFrame' src="https://docs.google.com/document/d/e/2PACX-1vQZCGqT6ecc_h_lWwwKFqnBsDNQa2PPnXSVLuEk2dEDmGbtNApvoWwBb3wuQzpaJFjwwxAUe6TkF5Q9/pub?embedded=true"></iframe>
      </a>
    </div>
  );
}