import { Light } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import gradientDark from "react-syntax-highlighter/dist/esm/styles/hljs/gradient-dark";

Light.registerLanguage("javascript", js);

interface Props {
  children: string;
}
export function SyntaxHighlighter({ children }: Props) {
  return (
    <Light language="javascript" style={gradientDark}>
      {children}
    </Light>
  );
}
