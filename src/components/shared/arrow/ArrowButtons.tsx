import { useQuestionsStore } from "@/store/questions";
import { Arrow } from "./Arrow";
import { useEffect } from "react";

export function ArrowButtons() {
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion,
  );
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const questions = useQuestionsStore((state) => state.questions);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPreviousQuestion();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNextQuestion();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPreviousQuestion, goNextQuestion]);

  return (
    <section className="justify-center flex gap-1 item-center">
      <Arrow
        direction="left"
        disabled={currentQuestion <= 0}
        onClick={goPreviousQuestion}
      />
      <strong className="text-white font-bold text-xl text-center, self-center">
        {currentQuestion + 1}/{questions.length}
      </strong>
      <Arrow
        direction="right"
        disabled={currentQuestion >= questions.length - 1}
        onClick={goNextQuestion}
      />
    </section>
  );
}
