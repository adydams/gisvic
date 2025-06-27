
import React from "react";

interface ToastProps {
  type: string;
  message: string;
  onClose: () => void;
}

const Toast = ({ type, message, onClose }: ToastProps) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-20 right-4 z-50 flex items-center w-full max-w-sm p-4 rounded-lg shadow-lg text-sm font-medium
        ${
          type === "success"
            ? "bg-green-50 text-green-800 border border-green-200"
            : "bg-red-50 text-red-800 border border-red-200"
        }
      `}
      role="alert"
    >
      <div className="mr-3">{type === "success" ? "✅" : "❌"}</div>
      <div className="flex-1">{message}</div>
      <button
        onClick={onClose}
        className="ml-4 text-gray-400 hover:text-gray-600"
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
