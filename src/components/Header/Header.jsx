import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        
        return `${padZero(hours)}:${padZero(minutes)} ${meridiem}`;
    }

    function padZero(number) {
        return(number.toString().padStart(2, 0));
    }

    return(
        <motion.header
        initial={{
            y: -100
        }}
        animate={{
            y: 0
        }}
        transition={{
            delay: 1
        }}>
            <div>
                <h1>Quiz.</h1>
            </div>
            <div>
                <p><b>{formatTime()}</b></p>
            </div>
        </motion.header>
    )
}

export default Header