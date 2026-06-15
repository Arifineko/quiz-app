import { useEffect, useState } from "react";
import { AnswerContext } from "../contexts/AnswerContext";
import { getQuizData } from "../services/quiz";
import { useQuizReview } from "../hooks/useQuizReview";
import QuizResult from "../components/quiz/QuizResult";
import QuestionCard from "../components/quiz/QuestionCard";
import QuizTimer from "../components/quiz/QuizTimer";
import { getFromStorage, removeFromStorage, saveToStorage } from "../services/storage";

const QuizPage = () => {
    const [answer, setAnswer] = useState(getFromStorage('quiz-answer') || {})
    const [data, setData] = useState([])
    const [isDone, setIsDone] = useState(false)
    const [quizKey, setQuizKey] = useState(0)
    const { reviewAnswer, quizResult } = useQuizReview(data, answer)

    useEffect(() => {
        const loadQuizData = async () => {
            const savedQuizData = getFromStorage("quiz-data")
            const savedAnswer = getFromStorage("quiz-answer")

            if (savedQuizData) {
                setData(savedQuizData)

                if (savedAnswer) {
                    const isResume = confirm("Do you want to resume your quiz?")

                    if (isResume) {
                        setAnswer(savedAnswer)
                    } else {
                        localStorage.removeItem("quiz-answer")
                        localStorage.removeItem("quiz-data")
                        localStorage.removeItem("quiz-timer")
                        setAnswer({})
                        setQuizKey(prev => prev + 1)
                    }
                }

                return
            }

            const quizData = await getQuizData()

            setData(quizData)
            saveToStorage("quiz-data", quizData)
        };

        loadQuizData();
    }, []);

    const handleSubmitAnswer = () => {
        reviewAnswer()
        const decision = confirm('are you sure to submit your answer?')
        if (decision) {
            removeFromStorage('quiz-answer')
            removeFromStorage('quiz-timer')
            removeFromStorage('quiz-data')
            setAnswer({})
            setIsDone(true)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <AnswerContext.Provider value={{ answer, setAnswer }}>
                {isDone ?
                    <QuizResult setIsDone={setIsDone} quizResult={quizResult} />
                    :
                    <div className="flex flex-col gap-6 mt-10 w-full max-w-2xl items-center">
                        <QuizTimer key={quizKey} data={data} answer={answer} setAnswer={setAnswer} setIsDone={setIsDone} reviewAnswer={reviewAnswer} />
                        <QuestionCard data={data} />
                        <button onClick={handleSubmitAnswer} className="border p-2 px-10 rounded-2xl mt-4">Submit</button>
                    </div>
                }
            </AnswerContext.Provider>
        </div>
    );
};

export default QuizPage;
