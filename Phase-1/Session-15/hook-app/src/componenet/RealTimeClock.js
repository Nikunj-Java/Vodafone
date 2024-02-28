
import React, { useEffect, useState } from "react";

function RealTimeClock() {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    })


    return (
        <div>


            <h2> Real Time Clock</h2>

            <p> Current Time: {time.toLocaleTimeString()}</p>

            <p> Current Date: {time.toLocaleDateString()}</p>

        </div>
    )
}

export default RealTimeClock;
