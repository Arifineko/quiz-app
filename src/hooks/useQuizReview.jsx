import { useState } from "react";

const calculateQuizResult = (data, answer) => {
    let correct = 0;
    let incorrect = 0;

    data.forEach((quiz, index) => {
        if (quiz.correct_answer === answer[index]) {
            correct += 1;
        } else {
            incorrect += 1;
        }
    });

    const totalAnswer = Object.keys(answer).length;

    return {
        correct,
        incorrect,
        totalAnswer,
    };
};

export const useQuizReview = (data = [], answer = {}) => {
    const [quizResult, setQuizResult] = useState({
        correct: 0,
        incorrect: 0,
        totalAnswer: 0,
    });

    const reviewAnswer = () => {
        const result = calculateQuizResult(data, answer);
        setQuizResult(result);
        return result;
    };

    return { quizResult, reviewAnswer };
};

