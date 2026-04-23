import { useState} from "react";

function Period() {

    const [lastPeriod, setLastPeriod] = useState("");
    const [cycleLength, setCycleLength] = useState(28);
    const [result, setResult] = useState(null);


    const calculateNextPeriod = (date, cycle) => {
    const last = new Date(date);
    const next = new Date(last);
    next.setDate(last.getDate() + Number(cycle));
    return next.toDateString();
  };

  const calculateOvulation = (date, cycle) => {
    const last = new Date(date);
    const ovulation = new Date(last);
    ovulation.setDate(last.getDate() + Number(cycle) - 14);
    return ovulation.toDateString();
  };

  const calculateFertileWindow = (date, cycle) => {
    const last = new Date(date);

    const start = new Date(last);
    start.setDate(last.getDate() + Number(cycle) - 19);

    const end = new Date(last);
    end.setDate(last.getDate() + Number(cycle) - 10);

    return {
      start: start.toDateString(),
      end: end.toDateString(),
    };
  };

  const handleCalculate = () => {
    if (!lastPeriod) return;

    const nextPeriod = calculateNextPeriod(lastPeriod, cycleLength);
    const ovulation = calculateOvulation(lastPeriod, cycleLength);
    const fertile = calculateFertileWindow(lastPeriod, cycleLength);

    setResult({
      nextPeriod,
      ovulation,
      fertile,
    });
  };
};
export default Period






