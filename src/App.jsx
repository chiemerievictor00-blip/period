import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav.jsx';
import Heropage from './Components/Heropage.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Tips from './Pages/Tips.jsx';
import Tracker from './Pages/Tracker.jsx';
import './App.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Tips" element = {<Tips/>}/>
        <Route path="/Tracker" element = {<Tracker/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App

// import Period from "./Components/Period.jsx"

// function App () {

//   return (

//     <div className = "cycletracker">

//       {/* header details */}

//       <div className="header">
//         <h1>🌸Cycle Tracker</h1>
//       </div>
//       <div className="p">
//         <h5>Track your period to take care of yourself.</h5>
//       </div>


//       {/* form */}


//       <form onSubmit={"handleSubmit"}>

//         <label>Select your last period (date):</label>
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
//         required/>

//         <label>Cycle Length (days):</label>
//         <input type="number" value={cycleLength} onChange={(e) => setCycleLength(Number(e.target.value))} min="28" max="40"
//         required/>

//         <button type="submit">Add Period</button>


//       </form>
    
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import Period from "./Components/Period"
// import "./index.css"

// function App() {
//   const [periods, setPeriods] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("periods"));
//     if (saved) { } setPeriods(saved);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("periods", JSON.stringify(periods));
//   }, [periods]);

//   return (
//     <div>
//       <div className="container">
//   <h1></h1>Cycle Tracker</h1>

//   {<form>
//     <input type="date" />
//     <input type="date" />
//     <button>Add Period</button>
//   </form>}

//   <div className="calendar">
//     <h2>April 2025</h2>
//     <div className="calendar-grid">
//       <div className="day">1</div>
//       <div className="day period">10</div>
//       <div className="day predicted">28</div>
//     </div>
//   </div>

//   <div className="cycle-info">
//     <p>Last Period: April 10</p>
//     <p>Cycle Length: 28 days</p>
//     <p>Next Period: May 8</p>
//   </div>
// </div>
//     </div>
//   );
// }

// export default App;

