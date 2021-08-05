import React, { useState, useEffect } from "react";
import "../css/dashboard.css";

// The Dashboard page

function Dashboard() {

  // Switching the inline styling results in fade-in/fade-out animations
  let dashboardStyle = { 
    opacity: "0%", 
    transition: "1s linear"
  }

  let dashboardAnimated = {
    opacity: "100%",
    transition: "1s ease-in",
  }

  // The useEffect hook is used to switch styles on page load, resulting in the animation

  useEffect(() => {
      animatePage();
  }, []);

  const [animate, setAnimate] = useState(false)

  function animatePage() {
      setAnimate(true);
  }

  // Resets animate back to the default style (goes from 100% opacity to 0%)

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    setAnimate(false)
  });

  return (
      <main id="main-dashboard-container" style={animate ? dashboardAnimated : dashboardStyle}>
            <div className="columns is-gapless has-text-centered">
                <div className="column">
                    <div className="dash-container" id="top-left">
                        <div className="box is-desktop is-vcentered">
                            <h1 className="box-title">Your current workout streak:</h1>
                            <p id="streak">3 days! 🔥</p>
                        </div>
                    </div>
                    <div className="dash-container" id="bottom-left">
                        <div className="box">
                            <h1 className="box-title">Quote</h1>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="dash-container" id="top-right">
                        <div className="box">
                            <h1 className="box-title">Your favorite workouts:</h1>
                        </div>
                    </div>
                    <div className="dash-container" id="bottom-right">
                        <div className="box">
                            <h1 className="box-title">Settings</h1>
                        </div>
                    </div>
                </div>
            </div>
      </main>
  );
}

export default Dashboard;