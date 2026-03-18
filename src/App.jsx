import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import { useContext } from "react";
import { DarkModeContext } from "./hooks/DarkModeContext";

const App = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen flex ${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
