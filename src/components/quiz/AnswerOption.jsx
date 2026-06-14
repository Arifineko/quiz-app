import { useContext } from "react"
import { AnswerContext } from "../../contexts/AnswerContext"
import { getFromStorage, saveToStorage } from "../../services/storage"

const AnswerOption = ({ data, currentQuestion }) => {
    const { answer, setAnswer } = useContext(AnswerContext)
    const answerOptions = [...data.incorrect_answers, data.correct_answer]

    const handleChooseAnswer = (e) => {
        const chooseAnswer = e.target.value
        setAnswer(prev => {
            const updatedAnswer = {
                ...prev, [currentQuestion]: chooseAnswer
            }
            saveToStorage('quiz-answer', updatedAnswer)

            return updatedAnswer
        })
    }

    return (
        <div key={currentQuestion} className="grid grid-cols-2 gap-6 justify-center">
            {answerOptions.map((option, index) => {
                const isChecked = answer[currentQuestion] === option
                return (
                    <label
                        className={`flex items-center gap-2 border-2 p-4 rounded-2xl ${isChecked ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'}`}
                        key={`${option}-${index}`}
                    >
                        <input
                            id={`answer-option-${currentQuestion}-${index}`}
                            type="radio"
                            name={`answer-option-${currentQuestion}`}
                            value={option}
                            onChange={handleChooseAnswer}
                            checked={isChecked}
                        />
                        {option}
                    </label>
                )
            })}
        </div>
    )
}

export default AnswerOption;
