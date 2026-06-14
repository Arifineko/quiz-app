import React from 'react'

const QuizResult = ({ quizResult, setIsDone }) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-center">
                Your Quiz Result
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-10 justify-items-center">
                <div className="flex flex-col items-center justify-center w-48 bg-green-200 py-5 px-3 rounded-full">
                    <p className="font-semibold">Correct Answer</p>
                    <p>{quizResult.correct} Questions</p>
                </div>
                <div className="flex flex-col items-center justify-center w-48 bg-red-200 py-5 px-3 rounded-full">
                    <p className="font-semibold">Incorrect Answer</p>
                    <p>{quizResult.incorrect} Questions</p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center w-48 bg-orange-200 py-5 px-3 rounded-full justify-self-center">
                    <p className="font-semibold">Total Answer</p>
                    <p>{quizResult.totalAnswer} Questions</p>
                </div>
            </div>
            <button onClick={() => setIsDone(prev => !prev)} className="border px-10 py-2 rounded mt-8">Try Again</button>
        </>
    )
}

export default QuizResult
