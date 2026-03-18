import { DarkModeContext } from "../../hooks/DarkModeContext";
import { useContext, useState } from "react";

const StudentTable = ({ students, amount }) => {
  const { dark } = useContext(DarkModeContext);

  const [page, setPage] = useState(1);
  const studentsPerPage = amount;

  const totalPages = Math.ceil(students.length / studentsPerPage);

  const startIndex = (page - 1) * studentsPerPage;
  const currentStudents = students.slice(
    startIndex,
    startIndex + studentsPerPage,
  );

  return (
    <div
      className={`mt-4 border rounded-xl overflow-hidden overflow-x-auto ${
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
            <th className="p-2 text-left ">ID</th>
            <th className="p-2 text-left ">Name</th>
            <th className="p-2 text-left  hidden md:table-cell">Email</th>
            <th className="p-2 text-left ">Status</th>
            <th className="p-2 text-left ">Course</th>
          </tr>
        </thead>

        <tbody>
          {currentStudents.map((student) => (
            <tr
              key={student.id}
              className={`hover:${
                dark ? "bg-gray-700" : "bg-gray-100"
              } transition`}
            >
              <td
                className={`p-3 border-b text-gray-400 ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {student.id}
              </td>
              <td
                className={`p-2 border-b font-semibold ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {student.name}
              </td>
              <td
                className={`p-2 border-b hidden md:table-cell ${
                  dark ? "border-gray-700" : "border-gray-300"
                }`}
              >
                {student.email}
              </td>
              <td
                className={`p-2 border-b ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    student.status === "Active"
                      ? dark
                        ? "bg-green-300 text-green-700"
                        : "bg-green-100 text-green-500"
                      : dark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {student.status}
                </span>
              </td>
              <td
                className={`p-2 border-b ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {student.course}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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

export default StudentTable;
