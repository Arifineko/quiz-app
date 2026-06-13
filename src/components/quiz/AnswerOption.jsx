import { useContext } from "react"
import { AnswerContext } from "../../contexts/AnswerContext"

const AnswerOption = ({ data, currentQuestion }) => {
    const { answer, setAnswer } = useContext(AnswerContext)

    const answerOptions = [...data.incorrect_answers, data.correct_answer]
    const handleChooseAnswer = (e) => {
        const chooseAnswer = e.target.value
        setAnswer(prev => ({
            ...prev, [currentQuestion]: chooseAnswer
        }))
    }

    return (
        <div key={currentQuestion} className="grid grid-cols-2 gap-6 justify-center">
            {answerOptions.map((option, index) => (
                <label className="flex items-center gap-2 border p-4 rounded-sm" key={`${option}-${index}`}>
                    <input
                        id={`answer-option-${currentQuestion}-${index}`}
                        type="radio"
                        name={`answer-option-${currentQuestion}`}
                        value={option}
                        onChange={handleChooseAnswer}
                        checked={answer[currentQuestion] === option}
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}

export default AnswerOption;
