import five from "../assets/img/5.png";
import ten from "../assets/img/10.png";
import fifteen from "../assets/img/15.png";
import twenty from "../assets/img/20.png";
import send from "../assets/img/start.png";
import { useState } from "react";

function HomePage({ setSelectedTimer, setIsTimerStarted, selectedTimer }) {
  const handleClick = (e, index) => {
    setSelectedTimer(index);    
  };

  const buttonsList = [
    {
      src: five,
      class: "five",
    },
    {
      src: ten,
      class: "ten",
    },
    {
      src: fifteen,
      class: "fifteen",
    },
    {
      src: twenty,
      class: "twenty",
    },
  ];

  return (
    <>
      <div className="mainContainer">
        <div className="header"></div>
        <div className="contentWrapper">
          <div className="buttons">
            <div className="eggContainer">
              {buttonsList.map((button, index) => {
                return (
                  <button
                    key={index}
                    className={
                      index === selectedTimer
                        ? `button selected ${button.class}`
                        : `button ${button.class}`
                    }
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                  >
                    <img src={button.src} alt="" />
                  </button>
                );
              })}
            </div>
            <button className="send" onClick={()=>setIsTimerStarted(true)}>
              <img src={send} alt="" />
            </button>
          </div>
          <div className="mascott"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
