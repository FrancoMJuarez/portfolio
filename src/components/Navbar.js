import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(true);

  const navbarHandler = () => {
    console.log("scroll");
    // if (window.scrollY >= 80) {
    //   setActive(true);
    // } else {
    //   setActive(false);
    // }
  };

  // window.addEventListener("scroll", navbarHandler);
  const screen = document.querySelector(".App");
  console.log(screen);
  // screen.addEventListener("scroll", navbarHandler)

  const buttonHandler = (selector) => {
    const view = document.querySelector(".App");
    view.scrollTo({ top: selector, behavior: "smooth" });
  };

  const showPosition = () => {
    const screen = document.querySelector(".App");
    console.log(window.scrollY);
  };

  return (
    <nav className={active ? "navbar active" : "navbar"}>
      <div className='navbar-border'></div>
      <div className="navbar-title" onClick={showPosition}>
        Franco Juarez
        <div className="navbar-title-logo"></div>
      </div>
      <div className="navbar-links">
        <ul className="navbar-links-ul">
          <li onClick={() => buttonHandler(0)}>Home</li>
          <li onClick={() => buttonHandler(600)}>Projects</li>
          <li onClick={() => buttonHandler(1200)}>About me</li>
          <li onClick={() => buttonHandler(0)}>Extra</li>
          <li onClick={() => buttonHandler(1800)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
