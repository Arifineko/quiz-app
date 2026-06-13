import React from 'react'

const QuizResult = ({ quizResult, setIsDone }) => {
    return (
        <>
            <div className="flex gap-4 mt-10">
                <div className="flex flex-col items-center justify-center w-48 bg-green-200 py-5 px-3 rounded-lg">
                    <p className="font-semibold">Correct Answer</p>
                    <p>{quizResult.correct} Questions</p>
                </div>
                <div className="flex flex-col items-center justify-center w-48 bg-red-200 py-5 px-3 rounded-lg">
                    <p className="font-semibold">Incorrect Answer</p>
                    <p>{quizResult.incorrect} Questions</p>
                </div>
                <div className="flex flex-col items-center justify-center w-48 bg-orange-200 py-5 px-3 rounded-lg">
                    <p className="font-semibold">Total Answer</p>
                    <p>{quizResult.totalAnswer} Questions</p>
                </div>
            </div>
            <button onClick={() => setIsDone(prev => !prev)} className="bg-blue-500 text-white px-10 py-2 rounded mt-8">Try Again</button>
        </>
    )
}

export default QuizResult
