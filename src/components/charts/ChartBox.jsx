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
      className={`w-full md:w-1/2 p-4 rounded-lg shadow border ${
        dark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <h2 className="text-base md:text-lg font-semibold mb-3">{title}</h2>

      <div className="overflow-x-auto">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid
              stroke={dark ? "#4b5563" : "#e5e7eb"}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              angle={-30}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={dark ? "#60a5fa" : "#3b82f6"}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartBox;
