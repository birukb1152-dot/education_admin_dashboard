import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
} from "recharts";

import { DarkModeContext } from "../../hooks/DarkModeContext";
import { useContext } from "react";

const ChartBox = ({ title, data, dataKey }) => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div
      className={`w-auto md:w-[50%]  p-4 rounded-lg shadow border ${dark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}
    >
      <h2 className="font-semibold mb-3">{title}</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBox;
