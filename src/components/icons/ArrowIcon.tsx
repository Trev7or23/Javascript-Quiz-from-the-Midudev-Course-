import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

interface Props {
  direction: "left" | "right";
}
export default function ArrowIcon({ direction }: Props) {
  if (direction === "left") return <BiLeftArrowCircle />;
  if (direction === "right") return <BiRightArrowCircle />;
}
