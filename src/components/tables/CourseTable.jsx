import { DarkModeContext } from "../../hooks/DarkModeContext";
import { useContext, useState } from "react";

const CourseTable = ({ courses, amount }) => {
  const { dark } = useContext(DarkModeContext);

  const [page, setPage] = useState(1);
  const coursesPerPage = amount;

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const startIndex = (page - 1) * coursesPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + coursesPerPage);

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
            <th className="p-2 text-left ">Course Code</th>
            <th className="p-2 text-left ">Course Name</th>
            <th className="p-2 text-left hidden md:table-cell">Department </th>
            <th className="p-2 text-left hidden md:table-cell">Teacher ID </th>
            <th className="p-2 text-left ">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses.map((course) => (
            <tr
              key={course.id}
              className={`hover:${
                dark ? "bg-gray-700" : "bg-gray-100"
              } transition`}
            >
              <td
                className={`p-3 border-b text-gray-400 ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {course.id}
              </td>
              <td
                className={`p-3 border-b text-gray-400 ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {course.courseName}
              </td>

              <td
                className={`p-3 border-b text-gray-400  hidden md:table-cell ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {course.department}
              </td>

              <td
                className={`p-3 border-b text-gray-400  hidden md:table-cell ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                {course.teacherId}
              </td>

              <td
                className={`p-2 border-b ${dark ? "border-gray-700" : "border-gray-300"}`}
              >
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    course.status === "Active"
                      ? dark
                        ? "bg-green-300 text-green-700"
                        : "bg-green-100 text-green-500"
                      : dark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {course.status}
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

export default CourseTable;
