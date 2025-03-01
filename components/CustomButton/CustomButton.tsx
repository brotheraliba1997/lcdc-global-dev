import React from "react";

const CustomButton = ({ label, icon: Icon, color = "blue", onClick, width }:any) => {
  return (
    <button
      onClick={onClick}
      className={`${width}
        flex items-center gap-2 px-6 py-3 rounded-lg justify-center text-white font-medium shadow-md transition-all duration-300
        ${color === "blue" ? "bg-blue-500 hover:bg-blue-600" : ""}
        ${color === "red" ? "bg-red-500 hover:bg-red-600" : ""}
        ${color === "green" ? "bg-[#21D279]" : ""}
      `}
    >
      {label}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default CustomButton;
