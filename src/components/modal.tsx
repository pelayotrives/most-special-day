import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
}

const Modal = ({ isOpen, onClose, title, description, image }: ModalProps) => {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      {/* MODAL */}
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 relative">
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none">
          <X size={24} />
        </button>
        <div className="flex flex-col items-center md:flex-row">
          {/* IMAGE */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <img src={image} alt={title} className="w-full max-h-[320px] md:max-h-auto md:h-auto md:w-[320px] object-cover rounded-t-lg md:rounded-r-none md:rounded-l-lg" />
          </div>
          {/* TEXT */}
          <div className="p-6 flex flex-col gap-2">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className="text-lg text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;