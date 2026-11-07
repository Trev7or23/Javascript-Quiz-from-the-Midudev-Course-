import { Start } from "@/components/home/Start";
import { useQuestionsStore } from "@/store/questions";
import { Game } from "@/components/home/Game";
import Title from "./components/home/Title";
import Footer from "./components/home/Footer";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  const isVisible = questions.length > 0;

  return (
    <main className="flex flex-col min-h-dvh justify-center items-center pb-1">
      <Title moveTitle={isVisible} />

      <div className="h-105 md:h-120 ">
        {isVisible && <Game />}
        {!isVisible && <Start />}
      </div>

      {!isVisible && <Footer className="mt-auto" />}
    </main>
  );
}

export default App;
