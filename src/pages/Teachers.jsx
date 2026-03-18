import TeacherTable from "../components/tables/TeacherTable";
import teachers from "../data/teachers";
import StudentStatCard from "../components/cards/StudentStatCard";
import { DarkModeContext } from "../hooks/DarkModeContext";
import { useContext, useState } from "react";
import { Plus, Download } from "lucide-react";

const Teachers = () => {
  const { dark } = useContext(DarkModeContext);

  // Filters
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter teachers based on department AND status
  const filteredTeachers = teachers.filter((teacher) => {
    const departmentMatch =
      departmentFilter === "all" || teacher.teachingCourse === departmentFilter;

    const statusMatch =
      statusFilter === "all" || teacher.status === statusFilter;

    return departmentMatch && statusMatch;
  });

  // Counts
  const itCount = teachers.filter((t) => t.teachingCourse === "IT").length;
  const isCount = teachers.filter((t) => t.teachingCourse === "IS").length;
  const csCount = teachers.filter((t) => t.teachingCourse === "CS").length;
  const softwareCount = teachers.filter(
    (t) => t.teachingCourse === "Software",
  ).length;

  const activeCount = teachers.filter((t) => t.status === "Active").length;
  const inactiveCount = teachers.filter((t) => t.status === "Inactive").length;

  // Button style
  const buttonStyle = (state, type) =>
    `border rounded-lg py-2 px-4 font-semibold hover:bg-blue-600 transition ${
      state === type
        ? "bg-blue-600 text-white border-none"
        : dark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-300"
    }`;

  return (
    <div className="mt-20 ml-24">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 justify-between my-4">
        {/* Department Filters */}
        <div className="flex gap-3">
          <button
            onClick={() => setDepartmentFilter("all")}
            className={buttonStyle(departmentFilter, "all")}
          >
            All
          </button>

          <button
            onClick={() => setDepartmentFilter("IT")}
            className={buttonStyle(departmentFilter, "IT")}
          >
            IT
          </button>

          <button
            onClick={() => setDepartmentFilter("IS")}
            className={buttonStyle(departmentFilter, "IS")}
          >
            IS
          </button>

          <button
            onClick={() => setDepartmentFilter("CS")}
            className={buttonStyle(departmentFilter, "CS")}
          >
            CS
          </button>

          <button
            onClick={() => setDepartmentFilter("Software")}
            className={buttonStyle(departmentFilter, "Software")}
          >
            Software
          </button>
        </div>

        {/* Status Filters */}
        <div className="flex gap-3">
          <button
            onClick={() => setStatusFilter("all")}
            className={buttonStyle(statusFilter, "all")}
          >
            Both
          </button>

          <button
            onClick={() => setStatusFilter("Active")}
            className={buttonStyle(statusFilter, "Active")}
          >
            Active
          </button>

          <button
            onClick={() => setStatusFilter("Inactive")}
            className={buttonStyle(statusFilter, "Inactive")}
          >
            Inactive
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            className={`flex gap-2 border py-3 px-4 font-semibold rounded-lg hover:bg-blue-600 ${
              dark
                ? "border-gray-700 bg-gray-800 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <Download size={18} />
            Export
          </button>

          <button className="flex gap-2 border font-semibold py-3 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
            <Plus size={18} />
            Add Teachers
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row gap-3">
        <StudentStatCard title="Departments" amount={4} />
        <StudentStatCard title="Total IT Teachers" amount={itCount} />
        <StudentStatCard title="Total IS Teachers" amount={isCount} />
        <StudentStatCard title="Total CS Teachers" amount={csCount} />
        <StudentStatCard
          title="Total Software Teachers"
          amount={softwareCount}
        />
        <StudentStatCard title="Total Teachers" amount={teachers.length} />
        <StudentStatCard title="Active Teachers" amount={activeCount} />
        <StudentStatCard title="Inactive Teachers" amount={inactiveCount} />
      </div>

      {/* Table */}
      <TeacherTable teachers={filteredTeachers} amount={10} />
    </div>
  );
};

export default Teachers;
