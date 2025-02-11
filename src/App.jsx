import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import TimerPage from "./components/TimerPage";

function App() {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState(0);

  return (
    <>
      {!isTimerStarted ? (
        <HomePage
          setSelectedTimer={setSelectedTimer}
          setIsTimerStarted={setIsTimerStarted}
          selectedTimer={selectedTimer}
        />
      ) : (
        <TimerPage
          selectedTimer={selectedTimer}
          setIsTimerStarted={setIsTimerStarted}
        />
      )}
    </>
  );
}

export default App;
