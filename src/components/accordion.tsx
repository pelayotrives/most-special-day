import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  question: string;
  children: React.ReactNode;
}

export default function FAQ({ question, children }: FAQProps) {
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen(!open);

  return (
    <section className="w-full pb-8">
      <div className={`px-5 py-6 transition-all cursor-pointer shadow-subtle border border-[#E5E5E5] rounded-lg`}>
        {/* QUESTIONS */}
        <div onClick={toggleOpen} className="flex items-center justify-between font-semibold font-inter text-lg sm:text-xl gap-4 cursor-pointer">
          {question}
          <ChevronDown size="28px" className={`min-w-[28px] transform transition-transform duration-300 ${ open ? "rotate-180" : "rotate-0" }`}/>
        </div>
        {/* ANSWER */}
        <div ref={contentRef} style={{ height: open ? `${contentRef.current?.scrollHeight}px` : "0px"}} className="overflow-hidden transition-[height] duration-300 ease-in-out">
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
