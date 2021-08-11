import React from 'react'

function Navbar() {
    return (
        <div class="navbar-container sidebar">
          <h1>Lorem <br/>Ipsum</h1>
          <ul id="menu">
            <li class="desk-li"><a href="" className="active">About</a></li>
            {/* Text won't strike as font does not permit */}
            <li class="desk-li"><a href="">Services</a></li>
            <li class="desk-li"><a href="">Cousine</a></li>
            <li class="desk-li"><a href="">Gallery</a></li>
            <li class="desk-li"><a href="">Contact</a></li>
            <li class="desk-li"><a href="">Book</a></li>
          </ul>
          <button>Card</button>
        </div>
    )
}

export default Navbar
