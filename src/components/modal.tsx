import { X , SendHorizontal} from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  items?: string[];
  closure?: string;
  buttonLink?: string;
  buttonText?: string;
}

const Modal = ({ isOpen, onClose, title, description, closure, image, items, buttonLink, buttonText }: ModalProps) => {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      {/* MODAL */}
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 relative">
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-3 right-3 focus:outline-none">
            <div className="bg-transparent size-9 flex items-center justify-center rounded-full w-9 h-9">
            <X className="text-center md:hidden" color="#FFFFFF" size={32} />
            <X className="text-center hidden md:block" color="#000000" size={32} />
            </div>
        </button>
        <div className="flex flex-col items-center md:flex-row">
          {/* IMAGE */}
          <div className="flex-shrink-0 w-full md:w-auto h-auto md:h-[435px] lg:h-[405px]">
            <img src={image} alt={title} className="w-full max-h-[320px] h-[180px] md:max-h-full md:h-full md:w-[320px] object-cover object-top md:object-center rounded-t-lg md:rounded-r-none md:rounded-l-lg" />
          </div>
          {/* TEXT */}
          <div className="p-6 flex flex-col gap-2">
            <h3 className="text-2xl special:text-3xl font-semibold">{title}</h3>
            <p className="text-md special:text-lg text-gray-700">{description}</p>
            {items && items.length > 0 && (
              <ul className="text-md special:text-lg text-gray-700 list-disc list-inside">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <p className="text-md special:text-lg text-gray-700 mb-3">{closure}</p>
            <div>
              <a href={buttonLink} target="_blank" className="group flex flex-row items-center gap-3 w-full px-6 py-2.5 rounded-full border border-gold justify-center sm:w-fit transition-all duration-300 ease-in-out cursor-pointer hover:bg-gold hover:shadow-sm">
                <span className="text-gold font-inter text-md special:text-lg group-hover:text-white">{buttonText}</span>
                <SendHorizontal className="text-gold group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;