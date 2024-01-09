import { useEffect } from "react";
import { useState } from "react";


const TimeIlne = () => {
    const [time, setTime] = useState(0)
    const [isRuning, setIsRuning] = useState(false)

    useEffect(() => {
        let timer;
        if (isRuning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000);
        }
        return () => clearInterval(timer)
    }, [isRuning])

    const startTimer = () => {
        setIsRuning(true)
    }
    const stopTimer = () => {
        setIsRuning(false)
    }
    const resetTimer = () => {
        setTime(0)
    }

    const formentTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return (
        <div>
        <h1>Time Tracker</h1>
        <div>
          <p >{formentTime(time)}</p>
        </div>
        <div>
          {!isRuning ? (
            <button onClick={startTimer}>Start</button>
          ) : (
            <button onClick={stopTimer}>Stop</button>
          )}
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    );
};

export default TimeIlne;