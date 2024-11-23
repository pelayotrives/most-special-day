// LIBRARIES
import { MoveRight } from "lucide-react";

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  return (
    <a href={link} target="_blank" className="group flex flex-row items-center gap-3 w-full px-6 py-1.5 rounded-full border border-gold cursor-pointer justify-center sm:w-fit transition-all duration-300 ease-in-out cursor-pointer hover:bg-gold hover:shadow-sm">
      <span className="text-gold font-inter text-lg group-hover:text-white">{text}</span>
      <MoveRight className="text-gold group-hover:text-white" />
    </a>
  );
}

export default Button;