import React from 'react';
import headShot from '../assets/images/IMG_2342.jpg'

export default function About() {
  return (
    <div className='m-5 row'>
      <h1 className='text-center'>About Page</h1>
      <div class="col-4 align-center">
            <img class="m-3" id="profilePic" src={headShot} />
        </div>
      <p className='col-8 mt-4'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
