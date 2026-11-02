import type { ButtonHTMLAttributes, KeyboardEventHandler } from "react";
import ArrowIcon from "../../icons/ArrowIcon";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
  onKeyDown?: KeyboardEventHandler;
  onClick: () => void;
}
export function Arrow({ direction, onClick, disabled, onKeyDown }: Props) {
  return (
    <button
      disabled={disabled}
      onKeyDown={onKeyDown}
      className="text-white text-4xl text-center disabled:opacity-25 disabled:scale-100 disabled:bg-transparent active:scale-95 active:bg-gray-600 hover:scale-110 enabled:hover:bg-gray-500 rounded-full p-1 m-1 transition-all enabled:cursor-pointer"
      onClick={onClick}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}
