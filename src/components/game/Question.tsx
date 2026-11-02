import { useQuestionsStore } from "@/store/questions";
import type { Question as QuestionType } from "@/types.d";
import { SyntaxHighlighter } from "./SyntaxHighlighter";
import { useQuestions } from "@/hooks/useQuestions";

interface Props {
  info: QuestionType;
}
export default function Question({ info }: Props) {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);
  const { goNextTimeoutQuestion } = useQuestions();
  const handleUserAnswer = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
    if (info.correctAnswer === answerIndex) {
      goNextTimeoutQuestion(2500);
    } else {
      goNextTimeoutQuestion(6000);
    }
  };

  return (
    <section className="bg-gray-800 w-dvw px-5 md:px-8 md:w-145 lg:w-200 pt-2 pb-5 rounded-xl flex flex-col justify-between gap-5 animate-in fade-in slide-in-from-bottom-2 zoom-in-95 duration-300">
      <strong className="text-white text-2xl ">{info.question}</strong>

      <SyntaxHighlighter>{info.code}</SyntaxHighlighter>

      <ul className="bg-gray-700 overflow-hidden rounded-xl divide-y divide-gray-500 ">
        {info.answers.map((answer, index) => {
          const bgColor = getBgColor(info, index);
          const userAnswered = info.userSelectedAnswer !== undefined;

          return (
            <li key={index}>
              <button
                className={`w-full ${bgColor} disabled:transition-colors py-2 px-1 text-white text-lg  font-black text-center enabled:hover:bg-gray-500 enabled:hover:opacity-80 enabled:cursor-pointer disabled:opacity-40`}
                disabled={userAnswered}
                onClick={handleUserAnswer(index)}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function getBgColor(info: QuestionType, index: number) {
  if (info.userSelectedAnswer === undefined) return;
  if (info.correctAnswer === index) return "bg-green-600";

  if (info.userSelectedAnswer === index) {
    return info.isCorrectUserAnswer ? "bg-green-700" : "bg-red-600";
  }
}
