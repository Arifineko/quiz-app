import { useEffect, useState } from 'react'
import { getFromStorage, removeFromStorage, saveToStorage } from '../../services/storage'

const QuizTimer = ({ data, answer, setIsDone, setAnswer, reviewAnswer }) => {
    const [timer, setTimer] = useState(getFromStorage('quiz-timer') || 10 * 60)

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
        if (timer <= 0) {
            reviewAnswer()
            removeFromStorage('quiz-answer')
            removeFromStorage('quiz-timer')
            removeFromStorage('quiz-data')
            setAnswer({})
            setIsDone(true)
        }
    }, [timer, reviewAnswer, setAnswer, setIsDone])

    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    return (
        <div className='text-start text-lg p-2 bg-gray-200 rounded-full px-4'>
            {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
        </div>
    )
}

export default QuizTimer
