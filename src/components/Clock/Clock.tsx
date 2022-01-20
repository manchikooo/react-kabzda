import React, {useEffect, useState} from 'react';

type ClockPropsType = {}
const getTime = (num: number) => num < 10 ? '0' + num : num

export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    const hoursString = getTime(date.getHours())
    const minutesString = getTime(date.getMinutes())
    const secondsString = getTime(date.getSeconds())

    return (
        <div>
            <span>{date.toLocaleTimeString()}</span>
            <div>
                раздельно:
                <span> {hoursString}</span>:
                <span>{minutesString}</span>:
                <span>{secondsString}</span>
            </div>
        </div>
    );
};
