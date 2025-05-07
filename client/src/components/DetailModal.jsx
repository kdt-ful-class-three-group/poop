import React from "react";

function DetailModal({ isOpen, onClose, children }) {
if(!isOpen) return null;

return (
  <div className="fixed inset-0  flex  items-center justify-center z-50">
    <div className="bg-white p-5 rounded-lg max-w-md w-80 h-100 shadow-lg relative">
      <button onClick={onClose} className="absolute top-2 right-5 text-gray-500">X</button>
      {children}
    </div>
    </div>
);
}

export default DetailModal;