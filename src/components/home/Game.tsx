import { useQuestionsStore } from "@/store/questions";
import Footer from "../game/Footer";
import { ArrowButtons } from "../shared/arrow/ArrowButtons";
import Question from "../game/Question";
import { useQuestions } from "@/hooks/useQuestions";
import { useEffect } from "react";

export function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const { lastQuestionCongrats } = useQuestions();

  const questionInfo = questions[currentQuestion];

  useEffect(() => {
    if (questions.every((question) => question.isCorrectUserAnswer)) {
      console.log("well done");
      const confetti = lastQuestionCongrats();

      return () => clearInterval(confetti);
    }
  }, [questions, lastQuestionCongrats]);

  return (
    <div className="transition-all animate-in zoom-in duration-300">
      <ArrowButtons />
      <Question info={questionInfo} />
      <Footer className="text-center" />
    </div>
  );
}
