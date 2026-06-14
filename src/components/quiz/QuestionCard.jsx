import { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";

const QuestionCard = ({ data }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const handleMoveToOtherQuestion = (e) => {
        const buttonId = e.currentTarget.id;

        setCurrentQuestion(prev => {
            if (buttonId === "next") {
                return prev + 1
            } else if (buttonId === "previous") {
                return prev - 1
            }
        }
        )
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            {data.length > 0 ?
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col items-center gap-2 text-center w-full">
                        <p className="text-2xl text-blue-500 font-semibold">{currentQuestion + 1} / {data.length}</p>
                        <p className="font-semibold text-xl">{data[currentQuestion].question}</p>
                    </div>
                    <AnswerOption data={data[currentQuestion]} currentQuestion={currentQuestion} />
                    <div className="flex justify-between w-full">
                        <button disabled={currentQuestion === 0} id="previous" onClick={handleMoveToOtherQuestion} className="px-4 py-2 rounded-lg bg-gray-200 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous Question
                        </button>
                        <button disabled={currentQuestion === data.length - 1} id="next" onClick={handleMoveToOtherQuestion} className="px-4 py-2 rounded-lg bg-blue-500 text-white cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                            Next Question
                        </button>
                    </div>
                </div>
                :
                <p>Loading</p>
            }
        </div>
    )
}

export default QuestionCard
