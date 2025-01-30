import { useState, useEffect } from "react";

export const Timer = ({startDate}: {startDate:string}) => {
    const [timeLeft, setTimeLeft] = useState<number>(3600)

    
    useEffect(() => {
        const startTime = new Date(startDate).getTime()
        const endTime = startTime + 60 * 60 * 1000;
        
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const remainingTime = Math.max((endTime - now) / 1000, 0);
            setTimeLeft(Math.floor(remainingTime))

            if (remainingTime <= 0) {
                clearInterval(interval)
            }

        }, 1000)

        return () => clearInterval(interval)
    }, [startDate])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes} хв ${secs < 10 ? "0" : ""}${secs} c`
    }

    return (
        <>{timeLeft <= 0 ?  "Expired" : formatTime(timeLeft) }</>
    )
}