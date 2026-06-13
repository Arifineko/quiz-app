import { useEffect, useState } from 'react'
import { useQuizReview } from '../../hooks/useQuizReview'
import { getFromStorage, saveToStorage } from '../../services/storage'

const QuizTimer = ({ data, answer, setIsDone }) => {
    const [timer, setTimer] = useState(getFromStorage('quiz-timer') || 10 * 60)
    const { reviewAnswer } = useQuizReview(data, answer)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prev => {
                saveToStorage('quiz-timer', prev - 1)
                return prev - 1
            })
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        if (timer === 0) {
            reviewAnswer()
            setIsDone(true)
        }
    }, [timer])

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    return (
        <p className='text-start'>
            {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
        </p>
    )
}

export default QuizTimer
