import React from "react";

function Home() {

  const buttonHandler = () => {
    const view = document.querySelector('.App')
    view.scrollTo({top:1500, behavior:'smooth'})
  };

  return (
    <div className="home">
      <div className="home-container">
        <div>
          <h1>Franco Juarez</h1>
        </div>
        <div>
          <h4>Texto 1Texto 1Texto 1Texto 1Texto 1Texto 1Texto 1Texto 1</h4>
        </div>
        <div>
          <h2>Texto2Texto2Texto2Texto2</h2>
        </div>
        <div className="home-container-button" onClick={() => {buttonHandler()}}>Meet me</div>
      </div>
    </div>
  );
}

export default Home;
