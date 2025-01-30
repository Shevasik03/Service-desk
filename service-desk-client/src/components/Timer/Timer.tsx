import { useState, useEffect } from "react";

export interface TimerProps {
    startDate?: string,
    endWorkDate?: string,
}

export const TimerToHire = ({startDate}: TimerProps) => {
    const [timeLeftToHire, setTimeLeftToHire] = useState<number>(3600)


    useEffect(() => {
        
        const startTime = new Date(startDate).getTime()
        const endTime = startTime + 60 * 60 * 1000;
        
        
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const remainingTime = Math.max((endTime - now) / 1000, 0);
            setTimeLeftToHire(Math.floor(remainingTime))

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
        <>{timeLeftToHire <= 0 ?  "Expired" : formatTime(timeLeftToHire) }</>
    )
}

export const TimerToExpired = ({endWorkDate}: TimerProps) => {

 


    const [timeLeftToExpired, setTimeLeftToExpired] = useState<number | null>(null)

    useEffect(() => {

        const endTime = new Date(endWorkDate).getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const remainingTime = Math.max((endTime - now) / 1000, 0);
            setTimeLeftToExpired(Math.floor(remainingTime))

            if (remainingTime <= 0) {
                clearInterval(interval)
            }
        }, 1000)
        
        return () => clearInterval(interval)

    }, [endWorkDate])

    const formatTime = (seconds: number) => {
        const day = Math.floor(seconds / (24 * 3600))
        const hour = Math.floor((seconds % (24 * 3600)) / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${day}д ${hour}г ${minutes}хв ${secs < 10 ? '0' : ''}${secs}с`
    }

    return (
        <>{timeLeftToExpired !== null
        ? timeLeftToExpired <= 0
          ? "Expired"
          : formatTime(timeLeftToExpired)
        : "Loading..."}</>
    )
}