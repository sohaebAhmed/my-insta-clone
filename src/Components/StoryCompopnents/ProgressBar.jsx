import React from 'react'
import "./ProgressBar.css"
import { progress } from 'framer-motion'

const ProgressBar = (index, activeIndex, duration) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1
                }
                clearInterval(interval)
                return prevProgress
            })
        }, duration / 100)
        return () => {
            clearInterval(interval)
        }
    }, [duration, activeIndex])


    useEffect(() => {
        setProgress(0)
    }, [activeIndex])


    const isActive = index === activeIndex

    return (
        <div>
            <div className={`${isActive ? "progress-bar" : ""}`} style={{ width: `${progress}%` }}>

            </div>
        </div>
    )
}

export default ProgressBar