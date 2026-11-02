import { useQuestionsStore } from "@/store/questions";
import { useState } from "react";

const LIMIT_QUESTIONS = 10;

export function Start() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const [disabled, setDisabled] = useState(false);
  const onHandleClick = () => {
    setDisabled(true);
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <button
      disabled={disabled}
      onClick={onHandleClick}
      className="mt-5 py-2 px-5 rounded-md bg-sky-500 text-white hover:scale-110 hover:bg-blue-500 transition-all disabled:opacity-60 disabled:scale-95 text-lg md:text-xl animate-in zoom-in duration-500"
    >
      EMPEZAR!!
    </button>
  );
}
