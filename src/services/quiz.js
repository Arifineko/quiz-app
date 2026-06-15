export const getQuizData = async () => {
    const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();

    return results;
};