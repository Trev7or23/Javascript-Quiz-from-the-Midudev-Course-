import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Question } from "@/types.d";

import confetti from "canvas-confetti";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, selectedAnswer: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async (limit) => {
        const url = `${import.meta.env.BASE_URL}data.json`;
        const res = await fetch(url);
        const json = await res.json();

        const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
        set({
          questions,
        });
      },
      selectAnswer: (questionId, selectedAnswer) => {
        const { questions } = get();
        const newQuestions = structuredClone(questions);
        const questionIndex = newQuestions.findIndex(
          (question) => question.id === questionId,
        );
        const questionInfo = newQuestions[questionIndex];
        const isCorrectAnswer = questionInfo.correctAnswer === selectedAnswer;

        if (isCorrectAnswer) confetti();

        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer: isCorrectAnswer,
          userSelectedAnswer: selectedAnswer,
        };

        set({ questions: newQuestions });
      },
      goNextQuestion: () => {
        const { currentQuestion, questions } = get();

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length)
          set({ currentQuestion: nextQuestion });
      },
      goPreviousQuestion: () => {
        const { currentQuestion } = get();

        const previousQuestion = currentQuestion - 1;

        if (previousQuestion >= 0) set({ currentQuestion: previousQuestion });
      },
      reset: () => {
        set({ questions: [], currentQuestion: 0 });
      },
    }),
    { name: "questions" },
  ),
);
