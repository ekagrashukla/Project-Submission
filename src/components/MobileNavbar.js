import React from 'react'


function MobileNavbar() {
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    return (
        <div>
            <div class="topnav">
            <p class="active2">Lorem</p>
            <div id="myLinks">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Cousine</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
                <a href="#">Book</a>
            </div>
            <a href="javascript:void(0);" class="icon-left" onClick={myFunction}>
                <i class="fa fa-bars"></i>
            </a>
            <a class="icon-right">
            <i class="fas fa-shopping-cart"></i>
            </a>
            </div>
        </div>
    )
}

export default MobileNavbar
