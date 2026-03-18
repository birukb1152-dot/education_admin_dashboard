import { DarkModeContext } from "../../hooks/DarkModeContext";
import { useContext } from "react";

const StudentStatCard = ({ title, amount }) => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div
      className={`p-2 border rounded-lg w-auto md:w-[33%] text-left md:text-center ${dark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}
    >
      <h2 className="text-gray-500">{title}</h2>
      <p className={`text-3xl text-green-500 font-semibold `}>{amount}</p>
    </div>
  );
};

export default StudentStatCard;
