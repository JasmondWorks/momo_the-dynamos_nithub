import { X } from "lucide-react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className="p-5">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg relative mx-auto">
          <button
            className="cursor-pointer rounded-full p-1 bg-neutral-200 absolute right-3 top-3"
            onClick={onClose}
          >
            <X color="#333" strokeWidth={3} size={18} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
