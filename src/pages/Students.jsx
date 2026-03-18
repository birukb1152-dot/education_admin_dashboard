import { DarkModeContext } from "../hooks/DarkModeContext";
import { useContext, useState } from "react";
import StudentTable from "../components/tables/StudentTable";
import { students } from "../data/students";
import StudentStatCard from "../components/cards/StudentStatCard";
import { Plus, Download } from "lucide-react";

const Students = () => {
  const { dark } = useContext(DarkModeContext);

  const [filteredStudents, setFilteredStudents] = useState(students);
  const [filter, setFilter] = useState("all");

  const showAll = () => {
    setFilter("all");
    setFilteredStudents(students);
  };

  const showActive = () => {
    setFilter("active");
    setFilteredStudents(students.filter((s) => s.status === "Active"));
  };

  const showInactive = () => {
    setFilter("inactive");
    setFilteredStudents(students.filter((s) => s.status === "Inactive"));
  };

  const activeCount = students.filter((s) => s.status === "Active").length;
  const inactiveCount = students.filter((s) => s.status === "Inactive").length;

  const buttonStyle = (type) =>
    `border rounded-xl py-2 px-3 font-semibold hover:bg-blue-600 transition ${
      filter === type
        ? "bg-blue-600 text-white"
        : dark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-300"
    }`;

  return (
    <div className="ml-24 mt-20">
      <div className="flex flex-col gap-3 md:flex-row justify-between">
        {/* Filter Buttons */}
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

        {/* Actions */}
        <div className="flex gap-3">
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

      {/* Stat Cards */}
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <StudentStatCard amount={students.length} title="Total Student" />
        <StudentStatCard amount={activeCount} title="Active Student" />
        <StudentStatCard amount={inactiveCount} title="Inactive Student" />
      </div>

      {/* Table */}
      <div className="mt-4">
        <StudentTable students={filteredStudents} amount={10} />
      </div>
    </div>
  );
};

export default Students;
