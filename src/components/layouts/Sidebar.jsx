import {
  SidebarClose,
  SidebarOpen,
  GraduationCap,
  LayoutDashboard,
  Users,
  UserCheck,
  BookOpen,
  Settings,
} from "lucide-react";
import { useContext, useState } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";
import { NavLink } from "react-router-dom";

const menu = [
  { to: "/", title: "Dashboard", icon: LayoutDashboard },
  { to: "/students", title: "Students", icon: Users },
  { to: "/teachers", title: "Teachers", icon: UserCheck },
  { to: "/courses", title: "Courses", icon: BookOpen },
  { to: "/settings", title: "Settings", icon: Settings },
];

const Sidebar = () => {
  const { dark } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`min-h-screen p-4 z-10 top-0 bottom-0 fixed transition-all duration-300 ${
        dark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
      // Open sidebar when mouse enters
      onMouseEnter={() => setIsOpen(true)}
      // Collapse sidebar when mouse leaves
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex gap-2 py-4 ${isOpen ? "w-56" : "w-10"} transition-all duration-300`}
      >
        {isOpen && (
          <>
            <GraduationCap
              className="bg-blue-600 rounded-sm p-0.5 text-white"
              size={28}
            />
            <h1 className="text-xl font-bold">
              Edu<span className="text-blue-600">Portal</span>
            </h1>
          </>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto transition-all duration-300"
        >
          {isOpen ? <SidebarClose /> : <SidebarOpen />}
        </button>
      </div>

      <hr className={`${dark ? "text-gray-600" : "text-gray-200"}`} />

      <div className="flex flex-col gap-2 text-center">
        {menu.map((tit) => {
          const Icon = tit.icon;
          return (
            <NavLink
              key={tit.to}
              to={tit.to}
              className={({ isActive }) =>
                `flex gap-3 p-4 mt-3 rounded-xl ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : dark
                      ? "text-gray-300 hover:bg-blue-900 hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              <Icon size={20} />
              {isOpen && <span>{tit.title}</span>}
            </NavLink>
          );
        })}
      </div>

      <hr className={`mt-60 ${dark ? "text-gray-600" : "text-gray-200"}`} />

      <div className="flex flex-col">
        <div className="flex mt-4 gap-2">
          <span
            className={`flex rounded-[50%] w-14 h-14 items-center text-center justify-center ${
              dark ? "bg-gray-500" : "bg-gray-300"
            }`}
          >
            AA
          </span>
          <div className="flex flex-col">
            <h2 className="font-semibold">{isOpen && "Admin User"}</h2>
            <p className="text-sm text-gray-400">
              {isOpen && "admin@gmail.com"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
