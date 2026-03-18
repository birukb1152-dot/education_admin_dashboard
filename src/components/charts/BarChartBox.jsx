import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { students } from "../../data/students";
import teachers from "../../data/teachers";
import courses from "../../data/courses";
import { DarkModeContext } from "../../hooks/DarkModeContext";
import { useContext } from "react";

const BarChartBox = () => {
  const { dark } = useContext(DarkModeContext);

  // Memoize the data calculation to optimize performance
  const chartData = useMemo(() => {
    const departments = ["CS", "IT", "IS", "Software"];

    return departments.map((dept) => ({
      name: dept,
      // Change 'department' to 'course' or 'teachingCourse' depending on your actual data keys
      Students: students.filter(
        (s) => s.department === dept || s.course === dept,
      ).length,
      Teachers: teachers.filter((t) => t.teachingCourse === dept).length,
      Courses: courses.filter((c) => c.department === dept).length,
    }));
  }, []);

  return (
    <div
      className={`w-auto md:w-[50%] p-5 rounded-lg border ${
        dark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
      }`}
    >
      <h2
        className={`text-center mb-5 font-semibold ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        Academic Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={dark ? "#444" : "#e5e7eb"}
          />
          <XAxis dataKey="name" stroke={dark ? "#ccc" : "#333"} />
          <YAxis stroke={dark ? "#ccc" : "#333"} />
          <Tooltip
            contentStyle={{
              backgroundColor: dark ? "#333" : "#fff",
              border: "none",
              color: dark ? "#fff" : "#000",
            }}
            itemStyle={{ color: dark ? "#fff" : "#000" }}
          />
          <Legend />
          <Bar dataKey="Students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Teachers" fill="#fbbf24" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Courses" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
