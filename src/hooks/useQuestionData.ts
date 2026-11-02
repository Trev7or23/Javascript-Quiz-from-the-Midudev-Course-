import { useQuestionsStore } from "@/store/questions";

export function useQuestionData() {
  const questions = useQuestionsStore((state) => state.questions);
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { isCorrectUserAnswer, userSelectedAnswer } = question;
    if (userSelectedAnswer == null) unanswered++;
    if (isCorrectUserAnswer) correct++;
    if (isCorrectUserAnswer === false) incorrect++;
  });

  return { correct, incorrect, unanswered };
}
