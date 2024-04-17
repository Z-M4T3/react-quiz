import { motion, AnimatePresence } from "framer-motion";
import { questions } from "../../assets/questions";
import { useState, useEffect } from "react";

function Quiz() {
    const [name, setName] = useState("");
    const [inputName, setInputName] = useState("");

    const [inQuiz, setInQuiz] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
 
    const [completed, setCompleted] = useState(0);
    const [questionAnswer, setQuestionAnswer] = useState("");
    const [pastAnswers, setPastAnswers] = useState([]);

    const [time, setTime] = useState(0);
 
    useEffect(() => {
        let interval = null;
 
        if (inQuiz && isEnded === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [inQuiz, isEnded]);

    const xVariants = {
        initial: {
            x: '200dvw'
        },
        animate: {
            x: 0
        },
        exit: {
            x: '-200dvw'
        }
    }

    const buttonVatiants = {
        initial: {
            opacity: 0,
            scale: 1
        },
        animate: {
            opacity: 1,
        },
        whileHover: {
            scale: 1.2
        },
        whileTap: {
            scale: .8
        },
        exit: {
            opacity: 0
        }
    }

    function formatStopper() {
            let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
            let seconts = ("0" + Math.floor((time / 1000) % 60)).slice(-2)

            return `${minutes}:${seconts}`;
    }

    function handleInpotChange(event) {
        setInputName(prevState => (prevState, event.target.value));
    }

    function startQuiz() {
        setInQuiz(prevState => (prevState, true));
        setName(prevName => (prevName, inputName));
        setInputName("");
    }

    function answerSelect(event) {
        setQuestionAnswer(event.target.value);
    }

    function nextQuestion() {
        setPastAnswers(pa => [...pa, questionAnswer]);
        setQuestionAnswer("");
        setCompleted(pc => (pc, pc + 1));

        if (completed >= questions.length - 1) {
            setInQuiz(prevState => (prevState, false));
            setIsEnded(ps => (ps, true));
        }
    }

    function checkPoints() {
        let points = 0;
        const corrects = [];
        questions.forEach((question, index) => {
            corrects[index] = question.correct_answer
        })
        pastAnswers.forEach((answer, _) => {
            if (corrects.includes(answer)) {
                points += 1;
            }
        });
        return points;
    }

    return(
        <>
            <AnimatePresence mode="wait">
                {!inQuiz && !isEnded?
                    <motion.div
                    variants={xVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={"bodyBoxContainer"}
                    className="bodyBoxContainer"
                    >
                        <div className="bodyBox">
                            <h1>Welcome to Quiz.</h1>
                            <p>Please enter your name below:</p>
                            <input type="text" onChange={handleInpotChange} value={inputName}/><br />
                            {inputName.trim() != "" ?
                                <motion.button
                                variants={buttonVatiants}
                                initial="initial"
                                animate="animate"
                                whileHover="whileHover"
                                whileTap="whileTap"
                                onClick={startQuiz}
                                >START, {inputName}</motion.button>
                            : ""
                            }
                        </div>
                    </motion.div>
                : ""}
                {inQuiz && !isEnded ? 
                    <motion.div
                        variants={xVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            type: "spring",
                            duration: .5
                        }}
                        key={`bodyQuizContainer${completed}`}
                        className="bodyBoxContainer"
                        >
                            <div className="bodyBox">
                                <div className="questionHeader">
                                    <p>{completed + 1}/{questions.length}</p>
                                    <p>{formatStopper()}</p>
                                </div>
                                <h1>Question {completed + 1}</h1>
                                <p>{questions[completed].question}</p>
                                {questions[completed].answers.map((answer, index) =>
                                <div key={index} className="answer">
                                    <label>
                                    <input type="radio" name="question" value={answer} checked={questionAnswer === answer} onChange={answerSelect}/>
                                    <span>{answer}</span></label>
                                </div>
                                )}
                                {questionAnswer.trim() != "" ?
                                    <motion.button
                                    variants={buttonVatiants}
                                    initial="initial"
                                    animate="animate"
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    onClick={nextQuestion}
                                    >NEXT{inputName}</motion.button>
                                : ""
                                }
                            </div>
                        </motion.div>
                : ""}

                {isEnded ? 
                    <motion.div
                    initial={{
                        y: '200dvw'
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    key={"resultBoxContainer"}
                    className="resultBoxContainer"
                    >
                        <h1>Let's see your results, {name}</h1>
                        <h3>Points - {checkPoints()}/{questions.length} ({Math.round(checkPoints() / questions.length * 100)}%)</h3>
                        <h3>Completed under - {formatStopper()}</h3>
                        {
                            questions.map((question, index) =>
                            <div key={index}
                            className={
                                question.correct_answer === pastAnswers[index] ?
                                "resultBoxCorrect"
                                : "resultWrong"
                            }
                            >
                                <h1>Question {index + 1}</h1>
                                <p>{questions[index].question}</p>
                                <ul>
                                {questions[index].answers.map((answer, innerindex) =>
                                <li key={innerindex}>
                                    {
                                    answer === pastAnswers[index] ?
                                    <b>{answer}</b>
                                    : answer}
                                </li>
                                )}
                                </ul>
                                <p>Correct answer was: <b>{question.correct_answer}</b></p>
                            </div>
                            )
                        }
                    </motion.div>
                : "" }
            </AnimatePresence>
        </>
    )
}

export default Quiz