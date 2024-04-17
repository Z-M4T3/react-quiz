import { motion } from "framer-motion";

function Footer() {
    const date = new Date().getFullYear();

    return(
        <motion.footer
        initial={{
            y: '100vh'
        }}
        animate={{
            y: 0
        }}
        transition={{
            duration: 1
        }}
        >
            <div>
                <h1>Quiz.</h1>
                <small>By.: Máté Zagyva</small>
            </div>
            <div>
                <p>Quiz. {date} &copy;</p>
            </div>
        </motion.footer>
    )
}

export default Footer