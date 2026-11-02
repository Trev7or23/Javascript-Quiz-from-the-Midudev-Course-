import { useQuestionsStore } from "@/store/questions";
import confetti from "canvas-confetti";

export function useQuestions() {
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);

  const goNextTimeoutQuestion = (duration = 3000) => {
    const initialCurrentQuestion = useQuestionsStore.getState().currentQuestion;
    setTimeout(() => {
      const currentState = useQuestionsStore.getState();
      if (currentState.currentQuestion === initialCurrentQuestion)
        goNextQuestion();
    }, duration);
  };

  const lastQuestionCongrats = () => {
    return setInterval(() => {
      confetti({
        particleCount: 8,
        angle: 90,
        startVelocity: 30,

        spread: 60,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.3,
        },
      });
    }, 400);
  };
  return { goNextTimeoutQuestion, lastQuestionCongrats };
}
