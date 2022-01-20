import React, {useEffect, useState} from 'react';
import styles from './Clock.module.scss'

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

    const deg = 6

    const hoursString = getTime(date.getHours() * 30)
    const minutesString = getTime(date.getMinutes() * deg)
    const secondsString = getTime(date.getSeconds() * deg)

    return (
        <div className={styles.clockWrapper}>
            <div>{date.toLocaleTimeString()}</div>
            <div className={styles.clockContainer}>
                <div className={styles.clock}>
                    <div className={styles.hour}>
                        <div className={styles.hours}
                             style={{transform: `rotateZ(${+hoursString + (+minutesString / 12)}deg)`}}>{}</div>
                    </div>
                    <div className={styles.minute}>
                        <div className={styles.minutes} style={{transform: `rotateZ(${+minutesString}deg)`}}>{}</div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.seconds} style={{transform: `rotateZ(${+secondsString}deg)`}}>{}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
