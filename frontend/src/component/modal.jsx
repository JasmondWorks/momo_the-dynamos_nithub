import { X } from "lucide-react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <button
          className="cursor-pointer rounded-full p-2 bg-white"
          onClick={onClose}
        >
          <X color="#333" strokeWidth={3} size={18} />
        </button>
        {/* <h2 className="text-lg font-bold mb-2">Title</h2>
        <p className="mb-4">This is the modal body.</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            OK
          </button>
        </div> */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
