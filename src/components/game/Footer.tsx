import { useQuestionData } from "@/hooks/useQuestionData";
import { useQuestionsStore } from "@/store/questions";
import { isPlural } from "@/utils/is-plural";

interface Props {
  className?: string;
}
export default function Footer({ className }: Props) {
  const { correct, incorrect, unanswered } = useQuestionData();
  const reset = useQuestionsStore((state) => state.reset);
  return (
    <footer
      className={`${className} text-white mt-3 text-2xl flex flex-col gap-3`}
    >
      <strong>
        ✅{correct} {isPlural(correct) ? "Correctas " : "Correcta"} - ❌
        {incorrect} {isPlural(incorrect) ? "Incorrectas" : "Incorrecta"} - ❓
        {unanswered} Sin Responder
      </strong>
      <button
        className="text-blue-500 text-bold text-3xl text-center"
        onClick={reset}
      >
        Resetear Juego
      </button>
    </footer>
  );
}

//
//
