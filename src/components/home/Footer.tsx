interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer className={className}>
      <p className="text-white text-xl">
        Made by{" "}
        <a
          className="text-red-700"
          href="https://github.com/trev7or23"
          target="_blank"
        >
          Trev7or23
        </a>{" "}
        From the Midudev{" "}
        <a
          className="text-[#09f] font-bold "
          href="https://www.youtube.com/watch?v=p2wF2wRjcN0"
          target="_blank"
        >
          Course
        </a>
      </p>
    </footer>
  );
}
