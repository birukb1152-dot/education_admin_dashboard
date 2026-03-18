import { useContext, useState } from "react";
import { DarkModeContext } from "../../hooks/DarkModeContext";

const StatCard = ({ totalTitle, totalNumber, Icon, description }) => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div
      className={`p-4 rounded-lg shadow transition-all duration-300 border md:w-[25%] w-auto
        ${dark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className={`${dark ? "text-gray-300" : "text-gray-500"} text-sm`}>
            {totalTitle}
          </h2>
          <p className="text-2xl font-bold">{totalNumber}</p>
          <p
            className={`text-sm ${dark ? "text-green-400" : "text-green-600"}`}
          >
            {description}
          </p>
        </div>
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-900">
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
