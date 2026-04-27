import React from 'react'
import '../Styles/Tips.css'

const Tips = () => {
  return (
    <>
      <div className="tipsheropage">
        <h1>🌸 Health Tips</h1>
        <p>Your Menstral health matters. <br /><span>Learn helpful tips on nutrotion, hygiene, and self-care to fell your best throughout your cycle.</span></p>

      </div>

      <div className="tipsiconsbox">

        <div className="icon">
          <i class="bx bx-water-drop" />
          <h3>Stay Hydrated</h3>
          <p>Drink plenty of water through out the day to keep your body hydrated and energized.</p>
        </div>

        <div className="icon">
          <i class="bx bx-bowl-bubbles" />
          <h3>Eat Healthy Foods</h3>
          <p>Eat a balanced diet with fruits, vegetables and whole grains to support your overall health.</p>
        </div>

        <div className="icon">
          <i class="bx bx-moon-stars" />
          <h3>Get Enough Rest</h3>
          <p>Good sleep helps your body recover and improves your mood and energy levels.</p>
        </div>

      </div>
      
    </>
  );
}

export default Tips
