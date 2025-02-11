import { useEffect, useState, useRef } from "react";
import alarm from "../assets/alarm.wav";
import curvedArrow from "../assets/img/curved-arrow.png";
import downArrow from "../assets/img/down-arrow.png";
import down from "../assets/img/down.png";
import rigthArrow from "../assets/img/right-arrow.png";
import Clock from "./Clock";

function TimerPage({ setIsTimerStarted, selectedTimer }) {
  const [remainingTime, setRemainingTime] = useState(
    (selectedTimer + 1) * 5 *60
  );
  const audioRef = useRef(null);
  const timeRef = useRef(null);
  const [isAlarming, setIsAlarming] = useState(false);

  useEffect(() => {
    if (remainingTime <= 0) {
      audioRef.current.play();
      timeRef.current.classList.add("alarming");
      setIsAlarming(true);
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <>
      <div className="mainContainer">
        <div className="header"></div>
        <div className="contentWrapper">
          <div className="timer">
            <audio autoPlay={false} ref={audioRef} muted>
              <source src={alarm} type="audio/wav" />
            </audio>
            <div className="timeWrapper">
              <img
                src={curvedArrow}
                alt=""
                className="curvedArrow"
                style={{ visibility: isAlarming ? "visible" : "hidden" }}
              />
              <img
                src={downArrow}
                alt=""
                className="downArrow"
                style={{ visibility: isAlarming ? "visible" : "hidden" }}
              />
              <img
                src={down}
                alt=""
                className="right"
                style={{ visibility: isAlarming ? "visible" : "hidden" }}
              />
              <img
                src={rigthArrow}
                alt=""
                className="rigthArrow"
                style={{ visibility: isAlarming ? "visible" : "hidden" }}
              />

              <div
                className="time"
                ref={timeRef}
                onClick={() => {
                  audioRef.current.pause();
                  timeRef.current.classList.remove("alarming");
                  setIsAlarming(false);
                }}
              >
                <Clock remainingTime={remainingTime}></Clock>
              </div>
            </div>
            <div className="homeBtnWrapper">
              <button
                className="homeBtn"
                onClick={() => setIsTimerStarted(false)}
              >
                Vissza
              </button>
            </div>
            <div className="stopBtn"></div>
          </div>
          <div className="mascott"></div>
        </div>
      </div>
    </>
  );
}

export default TimerPage;
