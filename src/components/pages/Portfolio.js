import React from 'react';
import bottomfeeder from '../assets/images/bottomFeeder.png'
import circuitBoard from '../assets/images/circuitBoard.png'
import rhinoPlaceholder from '../assets/images/rhinoPlaceholder.jpg'
import serverPlaceholder from '../assets/images/serverPlaceholder.jpeg'
import passwordPlaceholder from '../assets/images/passwordGeneratorPlaceholder.jpg'

export default function Portfolio() {
  return (
    <div id="work" class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card">
                <a>
                    <img src={circuitBoard} class="img-fluid p-3" alt="picture of a circuit board"/>
                    <div class="card-body">
                        <h5 class="card-title">Project 2</h5>
                        <p class="card-text">Placeholder</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <a>
                    <img src={rhinoPlaceholder} class="img-fluid p-3" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Poject 3</h5>
                        <p class="card-text">Placeholder</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <a>
                    <img src={serverPlaceholder} class="img-fluid p-3" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Project 4</h5>
                        <p class="card-text">Placeholder</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src={passwordPlaceholder} class="img-fluid p-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Project 5</h5>
                    <p class="card-text">Placeholder</p>
                </div>
            </div>
        </div>
      </div>
    </div>  
  );
}
