import { LucideIcon } from "lucide-react";

interface TitleProps {
  icon: LucideIcon;
  text: string;
}

export default function Title({ icon: Icon, text }: TitleProps) {
  return (
    <div className="flex flex-row gap-4 mb-8 items-center">
      <Icon className="text-gold size-9 md:size-14" />
      <h2 className="text-gold font-cormorant text-5xl md:text-7xl">{text}</h2>
    </div>
  );
}
