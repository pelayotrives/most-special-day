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
    <div className="aspect-square relative bg-cover bg-center rounded-lg bottom-0 hover:bottom-4 transition-all ease-in-out duration-200" style={{ backgroundImage: `url(${image})` }}>
      <a href={link} target="_blank" className="relative z-20 flex flex-col items-center justify-center gap-2 h-full p-4">
        <Icon className="text-white size-8 sm:size-10 xl:size-12" />
        <h3 className="text-center text-white font-inter font-medium text-xl sm:text-2xl xl:text-3xl">{title}</h3>
        <p className="text-center text-white font-inter font-regular sm:text-lg text-center leading-7">{description}</p>
      </a>
      <div className="z-10 absolute inset-0 bg-black opacity-65 rounded-lg"></div>
      <div className="absolute bottom-0 bg-gold w-full z-20 h-2 rounded-b-lg"></div>
    </div>
  );
}

export default Card;