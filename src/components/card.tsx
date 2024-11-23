// LIBRARIES
import { LucideIcon } from "lucide-react";

interface TitleProps {
  icon: LucideIcon;
  image: string;
  link: string;
  title: string;
  description: string;
}

const Card = ({ icon: Icon, title, description, image, link }: TitleProps) => {
  return (
    <div className="aspect-video relative bg-cover bg-center rounded-lg bottom-0 hover:bottom-4 transition-all ease-in-out duration-200" style={{ backgroundImage: `url(${image})` }}>
      <a href={link} target="_blank" className="relative z-20 flex flex-col items-center justify-center gap-2 h-max p-8 lg:min-h-[280px]">
        <Icon size="32px" className="text-white w-[28px]" />
        <h3 className="text-center text-white font-inter font-medium text-xl sm:text-xl xl:text-2xl">{title}</h3>
        <p className="text-center text-white font-inter font-regular sm:text-lg leading-7">{description}</p>
      </a>
      <div className="z-10 absolute inset-0 bg-black opacity-65 rounded-lg"></div>
    </div>
  );
}

export default Card;