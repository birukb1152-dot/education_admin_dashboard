import { DarkModeContext } from "../hooks/DarkModeContext";
import { useContext, useState } from "react";
import { Plus, Download } from "lucide-react";
import StudentStatCard from "../components/cards/StudentStatCard";
import courses from "../data/courses";
import CourseTable from "../components/tables/CourseTable";

const Courses = () => {
  const { dark } = useContext(DarkModeContext);

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [filter, setFilter] = useState("all");

  const showAll = () => {
    setFilter("all");
    setFilteredCourses(courses);
  };

  const showActive = () => {
    setFilter("active");
    setFilteredCourses(courses.filter((s) => s.status === "Active"));
  };

  const showInactive = () => {
    setFilter("inactive");
    setFilteredCourses(courses.filter((s) => s.status === "Inactive"));
  };

  const activeCount = courses.filter((s) => s.status === "Active").length;
  const inactiveCount = courses.filter((s) => s.status === "Inactive").length;

  const buttonStyle = (type) =>
    `border rounded-xl py-2 px-3 font-semibold hover:bg-blue-600 transition ${
      filter === type
        ? "bg-blue-600 text-white"
        : dark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-300"
    }`;

  return (
    <div className={`ml-24 mt-20`}>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="flex gap-4">
          <button onClick={showAll} className={buttonStyle("all")}>
            All
          </button>

          <button onClick={showActive} className={buttonStyle("active")}>
            Active
          </button>

          <button onClick={showInactive} className={buttonStyle("inactive")}>
            Inactive
          </button>
        </div>

        <div className="flex gap-3 ">
          <button
            className={`flex gap-2 border rounded-xl py-3 px-4 font-semibold hover:bg-blue-600 ${
              dark
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <Download />
            Export
          </button>

          <button className="flex gap-2 border rounded-xl py-3 px-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white">
            <Plus /> Add Student
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-col md:flex-row gap-3">
        <StudentStatCard title="Total Course" amount={courses.length} />
        <StudentStatCard title="Active Course" amount={activeCount} />
        <StudentStatCard title="Inactive Course" amount={inactiveCount} />
      </div>
      <CourseTable courses={filteredCourses} amount={10} />
    </div>
  );
};

export default Courses;
