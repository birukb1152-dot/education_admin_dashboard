import { DarkModeContext } from "../../hooks/DarkModeContext";
import { useContext, useState } from "react";

const TeacherTable = ({ teachers, amount }) => {
  const { dark } = useContext(DarkModeContext);

  const [page, setPage] = useState(1);
  const teachersPerPage = amount;

  const totalPages = Math.ceil(teachers.length / teachersPerPage);

  const startIndex = (page - 1) * teachersPerPage;
  const currentTeachers = teachers.slice(
    startIndex,
    startIndex + teachersPerPage,
  );

  return (
    <div
      className={`mt-4 border rounded-xl overflow-hidden ${
        dark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr
            className={`${
              dark
                ? "bg-gray-700 text-gray-400 border-gray-700"
                : "bg-gray-300 border-gray-300"
            }`}
          >
            <th className="p-2 text-left ">Photo</th>
            <th className="p-2 text-left ">ID</th>
            <th className="p-2 text-left ">Name</th>
            <th className="p-2 text-left hidden md:table-cell ">Email</th>
            <th className="p-2 text-left hidden md:table-cell ">Department</th>
            <th className="p-2 text-left ">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTeachers.map((teacher) => (
            <tr
              key={teacher.id}
              className={`hover:${
                dark ? "bg-gray-700" : "bg-gray-100"
              } transition`}
            >
              <td
                className={`p-3 border-b text-gray-400 ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                <img
                  src={teacher.photo}
                  alt=""
                  width="30"
                  height="30"
                  className="rounded-[50%]"
                />
              </td>
              <td
                className={`p-3 border-b text-gray-400 ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {teacher.id}
              </td>
              <td
                className={`p-3 border-b text-gray-400 ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {teacher.name}
              </td>
              <td
                className={`p-3 border-b text-gray-400 hidden md:table-cell ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {teacher.email}
              </td>
              <td
                className={`p-2 border-b ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                <span
                  className={`px-2 py-1 hidden md:table-cell rounded-md text-xs font-semibold ${
                    teacher.teachingCourse === "IT" ||
                    "IS" ||
                    "CS" ||
                    "Software"
                      ? dark
                        ? "bg-blue-300 text-blue-700"
                        : "bg-blue-100 text-blue-500"
                      : dark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {teacher.teachingCourse}
                </span>
              </td>
              <td
                className={`p-2 border-b ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    teacher.status === "Active"
                      ? dark
                        ? "bg-green-300 text-green-700"
                        : "bg-green-100 text-green-500"
                      : dark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {teacher.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className={`flex justify-between items-center p-3 border-t ${
          dark ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 rounded hover:bg-blue-700 bg-blue-500 text-white disabled:bg-gray-400"
        >
          Previous
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 rounded hover:bg-blue-700 bg-blue-500 text-white disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TeacherTable;
