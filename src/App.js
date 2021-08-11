import React from "react";
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Right from "./components/Right";

function App() {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
      {isTabletOrMobile && <MobileNavbar/>}
      <div class="main-container">
        {isDesktopOrLaptop && <Navbar/>}
        <Right/>
      </div>
      <div id="secondary-heading2">
                <p style={{borderBottom:"4px solid red"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </div>
    </>
  );
}

export default App;
