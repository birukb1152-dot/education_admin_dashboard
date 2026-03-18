import { Users, UserCheck, BookOpen, GraduationCap } from "lucide-react";
import StatCard from "../components/cards/StatCard";
import { students } from "../data/students";
import teachers from "../data/teachers";
import courses from "../data/courses";
import months from "../data/months";
import ChartBox from "../components/charts/ChartBox";
import DepartmentOverview from "../components/charts/BarChartBox";
import StudentTable from "../components/tables/StudentTable";

const Dashboard = () => {
  const activeStudent = students.filter(
    (student) => student.status === "Active",
  ).length;

  return (
    <div className="flex flex-col ml-24 mt-20">
      <div className={`flex flex-col md:flex-row gap-5  `}>
        <StatCard
          totalTitle={"Total Students"}
          totalNumber={students.length}
          description={"Second year students. "}
          Icon={Users}
        />

        <StatCard
          totalTitle={"Total Teachers"}
          totalNumber={teachers.length}
          description={"Second and Third year teachers. "}
          Icon={UserCheck}
        />
        <StatCard
          totalTitle={"Total Courses"}
          totalNumber={courses.length}
          description={"Second year courses. "}
          Icon={BookOpen}
        />
        <StatCard
          totalTitle={"Active Class"}
          totalNumber={activeStudent}
          description={"All active class in this year or batch. "}
          Icon={GraduationCap}
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row gap-4 justify-center w-full">
        <ChartBox
          title="Student Enorllment Trend"
          data={months}
          dataKey="students"
        />
        <DepartmentOverview />
      </div>

      <div>
        <h2 className="font-semibold text-2xl mt-3 p-3">Recent students</h2>
        <StudentTable students={students} amount={3} />
      </div>
    </div>
  );
};

export default Dashboard;
