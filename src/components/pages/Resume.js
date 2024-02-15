import React from 'react';

export default function Resume() {
  return (
    <div className='resumeContainer'>
        <object className='resumeFrame' data='https://docs.google.com/document/d/e/2PACX-1vRAjBOiPh5JZk1b8hoC5QoUpvmcoG6yLZaR5pjrbW3BBk5eBAOf3epEgJhXp0vZVGyyWFAeUtVLVzMc/pub' type='application/pdf'>
          <iframe className='resumeFrame' src="https://docs.google.com/document/d/e/2PACX-1vQZCGqT6ecc_h_lWwwKFqnBsDNQa2PPnXSVLuEk2dEDmGbtNApvoWwBb3wuQzpaJFjwwxAUe6TkF5Q9/pub?embedded=true"></iframe>
        </object>
    </div>
  );
}