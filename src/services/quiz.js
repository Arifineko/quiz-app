export const getQuizData = async () => {
    // https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple
    const res = await fetch(
        "/questions.json"
    );
    const { results } = await res.json();

    return results;
};