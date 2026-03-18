import { useContext } from "react";
import { DarkModeContext } from "../../hooks/DarkModeContext";
import { Sun, Moon, Search, MessageCircle } from "lucide-react";

const Navbar = () => {
  const { dark, setDark } = useContext(DarkModeContext);

  return (
    <div
      className={`flex justify-between items-center p-4 top-0 right-0 left-3 fixed  shadow md:ml-20  ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <div>
        <h1 className="font-bold text-2xl hidden md:flex">Dashboard</h1>
        <p className="text-gray-400 text-sm hidden md:flex">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className={`pl-9 pr-3 py-2 rounded-lg border outline-none focus:border-blue-500
            ${
              dark
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-gray-100 border-gray-200 text-black"
            }`}
          />
        </div>

        <MessageCircle
          size={22}
          className="cursor-pointer hover:text-blue-500"
        />

        <button
          onClick={() => setDark((prev) => !prev)}
          className={`p-2 rounded-lg transition ${dark ? "hover:bg-blue-800" : "hover:bg-gray-200"}`}
        >
          {dark ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
