import { useState } from "react";
import "../Styles/Tracker.css";

function Tracker() {
  const [startDate, setStartDate] = useState("2026-04-30");
  const [cycleLength, setCycleLength] = useState(28);
  const [nextPeriod, setNextPeriod] = useState("");
  const [ovulationDate, setOvulationDate] = useState("");

  const calculateDates = () => {
    const start = new Date(startDate);

    const next = new Date(start);
    next.setDate(start.getDate() + Number(cycleLength));

    const ovulation = new Date(start);
    ovulation.setDate(start.getDate() + (cycleLength - 14));

    setNextPeriod(next.toDateString());
    setOvulationDate(ovulation.toDateString());
  };

  return (
    <div className="container">
      <div className="card left">
        <h2>Track Your Cycle</h2>

        <label>Last Period Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>Cycle Length (days)</label>
        <select
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}>
          {[21,22,23,24,25,26,27,28,29,30,31].map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>

          <div className="trackbtn">
             <button onClick={calculateDates}> Calculate Next Period</button>
          </div>
       

      </div>

      <div className="card right">
        <h3 className="title">Your Predictions</h3>

        <div className="prediction">
          <div>
            <p className="label">Next Period</p>
            <h4>{nextPeriod || "—"}</h4>
          </div>
          <span className="badge pink">In {cycleLength} days</span>
        </div>

        <div className="prediction">
          <div>
            <p className="label">Ovulation Date</p>
            <h4>{ovulationDate || "—"}</h4>
          </div>
          <span className="badge purple">~14 days before</span>
        </div>

        <div className="note">
          <p>
            Predictions are based on your average cycle length.
            They may vary each month.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
