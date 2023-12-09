import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

// import { useState, useEffect } from "react";
// export default function QuestionTimer({ timeout, onTimeout }) {
//   // to update progress we need to set an interval that gets updated after couple of milliseconds that is done by introducing and managing a remaining time state
//   const [remainingTime, setRemainingTime] = useState(timeout);
//   //set a timer which experis after some time with a timeout set in the setTimeout function, which is receiving as a prop

//   // Parent Component which is a Quiz Component should be notified when the timer is expired, to do so we need to recived function via props that
//   //should be called inside setTimeout function once it is expired
//   useEffect(() => {
//     console.log("Setting timeout");
//     setTimeout(() => {
//       onTimeout();
//     }, timeout);
//   }, [timeout, onTimeout]);
//   useEffect(() => {
//     console.log("Setting interval");

//     setInterval(() => {
//       setRemainingTime((prevRemainingTime) => {
//         prevRemainingTime - 10;
//       });
//     }, 100);
//   }, []);

//   return (
//     <progress id="question-time" max={timeout} value={remainingTime}></progress>
//   );
// }
