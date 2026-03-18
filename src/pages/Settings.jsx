import { DarkModeContext } from "../hooks/DarkModeContext";
import { useContext, useState } from "react";
import { User, MessageCircle, Lock, Save } from "lucide-react";
import { FaCog } from "react-icons/fa";

const Settings = () => {
  const { dark } = useContext(DarkModeContext);
  const [isEnableEmail, setIsEnableEmail] = useState(false);
  const [isEnablePush, setIsEnablePush] = useState(false);
  const [isEnableWeekly, setIsEnableWeekly] = useState(false);
  const [isEnableMonthly, setIsEnableMonthly] = useState(false);
  const [isSecurityEnable, setIsSecurityEnable] = useState(false);

  return (
    <div className={`min-h-screen  mt-20 ml-24`}>
      {/* card 1 */}
      <div
        className={`p-4 border rounded-xl items-center ${dark ? "bg-gray-800 border-gray-700 text-white" : "bg-white text-black border-gray-300"}`}
      >
        <div className="flex py-4">
          <div className="items-center">
            <User className="p-2 h-10 w-10 rounded-[50%] bg-blue-400 text-blue-600 mr-3" />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold">Profile Settings</h2>
            <p className="text-sm text-gray-400">
              Manage your account information
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-7">
          <div className="flex flex-col gap-3">
            <h3 className="pl-1 font-semibold">Full Name</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              className={`p-3 border w-full md:w-175 focus:border-blue-500 rounded-xl outline-none ${dark ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"}`}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="pl-1 font-semibold">Email</h3>
            <input
              type="email"
              placeholder="Your email"
              required
              className={`p-3 border w-full md:w-175 focus:border-blue-500 rounded-xl outline-none ${dark ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"}`}
            />
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div
        className={`mt-6 p-4 border rounded-xl items-center ${dark ? "bg-gray-800 border-gray-700 text-white" : "bg-white text-black border-gray-300"}`}
      >
        <div className="flex gap-3 pt-5 pb-5">
          <div>
            <MessageCircle className="p-2 h-10 w-10 rounded-[50%] bg-purple-900 text-purple-400 mr-3" />
          </div>
          <div>
            <h2 className="font-semibold text-[16px]">Notification Settings</h2>
            <p className="text-sm text-gray-400">
              Configure how you receive notification
            </p>
          </div>
        </div>

        {/* card 2-1 */}
        <div className="flex justify-between pt-5 pb-5 items-center">
          <div>
            <h3 className="font-semibold text-[16px]">Email Notification</h3>
            <p className="text-sm text-gray-400">
              Receive notification via email
            </p>
          </div>
          <div>
            <button onClick={() => setIsEnableEmail(!isEnableEmail)}>
              {isEnableEmail ? (
                <span className="bg-green-600 rounded-xl px-4 ">On</span>
              ) : (
                <span className="bg-gray-500 rounded-xl px-4 ">Off</span>
              )}
            </button>
          </div>
        </div>
        <hr className={` ${dark ? "text-gray-700" : "text-gray-300"}`} />

        {/* card 2-2 */}
        <div className="flex justify-between pt-5 pb-5 items-center">
          <div>
            <h3 className="font-semibold text-[16px]">Push Notification</h3>
            <p className="text-sm text-gray-400">Receive push notification</p>
          </div>
          <div>
            <button onClick={() => setIsEnablePush(!isEnablePush)}>
              {isEnablePush ? (
                <span className="bg-green-600 rounded-xl px-4 ">On</span>
              ) : (
                <span className="bg-gray-500 rounded-xl px-4 ">Off</span>
              )}
            </button>
          </div>
        </div>
        <hr className={` ${dark ? "text-gray-700" : "text-gray-300"}`} />

        {/* card 2-3 */}
        <div className="flex justify-between pt-5 pb-5 items-center">
          <div>
            <h3 className="font-semibold text-[16px]">Weekly Report</h3>
            <p className="text-sm text-gray-400">
              Receive weekly activity reports
            </p>
          </div>
          <div>
            <button onClick={() => setIsEnableWeekly(!isEnableWeekly)}>
              {isEnableWeekly ? (
                <span className="bg-green-600 rounded-xl px-4 ">On</span>
              ) : (
                <span className="bg-gray-500 rounded-xl px-4 ">Off</span>
              )}
            </button>
          </div>
        </div>
        <hr className={` ${dark ? "text-gray-700" : "text-gray-300"}`} />

        {/* card 2-4 */}
        <div className="flex justify-between pt-5 pb-5 items-center">
          <div>
            <h3 className="font-semibold text-[16px]">Monthly Report</h3>
            <p className="text-sm text-gray-400">
              Receive monthly summary reports
            </p>
          </div>
          <div>
            <button onClick={() => setIsEnableMonthly(!isEnableMonthly)}>
              {isEnableMonthly ? (
                <span className="bg-green-600 rounded-xl px-4 ">On</span>
              ) : (
                <span className="bg-gray-500 rounded-xl px-4 ">Off</span>
              )}
            </button>
          </div>
        </div>
        <hr className={` ${dark ? "text-gray-700" : "text-gray-300"}`} />
      </div>

      {/* Security */}
      <div
        className={`mt-5 p-4 border rounded-xl items-center ${dark ? "bg-gray-800 border-gray-700 text-white" : "bg-white text-black border-gray-300"}`}
      >
        <div className="flex  items-center gap-3">
          <div>
            <Lock className="p-2 h-10 w-10 rounded-[50%] bg-red-400 text-red-600 mr-3" />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold">Security</h2>
            <p className="text-sm text-gray-400">
              Manage your security preferences
            </p>
          </div>
        </div>

        {/* Security 1*/}
        <div className="flex items-center justify-between py-4">
          <div>
            <h3 className="font-semibold text-[16px]">
              Two-Factor Authentication
            </h3>
            <p className="text-sm text-gray-400">
              Add an extra layer of security
            </p>
          </div>
          <div>
            <button onClick={() => setIsSecurityEnable(!isSecurityEnable)}>
              {isSecurityEnable ? (
                <span className="bg-green-600 rounded-xl px-4 ">On</span>
              ) : (
                <span className="bg-gray-500 rounded-xl px-4 ">Off</span>
              )}
            </button>
          </div>
        </div>

        <hr className={` ${dark ? "text-gray-700" : "text-gray-300"}`} />
        <div className="flex flex-col gap-3 mt-4">
          <div>
            <p>{`Session Timeout (Minutes)`} </p>
          </div>
          <div>
            <select
              name="minutes"
              id=""
              className={`border w-full p-4 rounded-xl focus:border-blue-500 ${dark ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"}`}
            >
              <option
                value="30"
                className={` ${dark ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              >
                30 minutes
              </option>
              <option
                value="60"
                className={` ${dark ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              >
                1 hours
              </option>
              <option
                value="30"
                className={` ${dark ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              >
                2 weeks
              </option>
              <option
                value="30"
                className={` ${dark ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              >
                3 months
              </option>
              <option
                value="30"
                className={` ${dark ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              >
                1 year
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* General */}

      <div
        className={`mt-5 p-4 border rounded-xl items-center ${dark ? "bg-gray-800 border-gray-700 text-white" : "bg-white text-black border-gray-300"}`}
      >
        <div className="flex items-center gap-3 py-5">
          <div>
            <FaCog className="p-2 w-10 h-10 rounded-[50%] bg-green-300 text-green-500" />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold">General Settings</h2>
            <p className="text-sm text-gray-400">
              General application settings
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>Language</p>
          <select
            name=""
            id=""
            className={`border w-full p-4 rounded-xl outline-none focus:border-blue-500 ${dark ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"}`}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="france">France</option>
            <option value="chanise">Chanise</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <p>Timezone</p>
          <select
            name=""
            id=""
            className={`border w-full p-4 rounded-xl outline-none focus:border-blue-500 ${dark ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"}`}
          >
            <option value="utc-5">{`Eastern Time (UTC-5)`}</option>
            <option value="utc-6">{`Central Time (UTC-6)`}</option>
            <option value="utc-7">{`Mountain Time (UTC-7)`}</option>
            <option value="utc-8">{`Pacific Time (UTC-8)`}</option>
          </select>
        </div>
      </div>

      <div className="flex items-end mt-4 justify-end">
        <button className="text-white bg-blue-500 hover:bg-blue-600 p-4 rounded-xl flex gap-2  ">
          <Save />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
