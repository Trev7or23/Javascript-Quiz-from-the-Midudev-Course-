import { JavascriptLogo } from "../icons/JavascriptLogo";

interface Props {
  moveTitle?: boolean;
}
export default function Title({ moveTitle = false }: Props) {
  const titleTranslate = moveTitle ? "-translate-y-0" : "translate-y-0";
  return (
    <div
      className={`flex justify-center items-center gap-1 transition-all duration-500 animate-in zoom-in  ${titleTranslate}`}
    >
      <JavascriptLogo />
      <h1 className="text-4xl md:text-5xl text-white font-bold ">
        Javascript Quiz
      </h1>
    </div>
  );
}
