"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="flex min-h-screen p-3 bg-[#131619]">
      <div
        className={`${
          isCollapsed ? "w-[80px]" : "w-[312px]"
        } bg-[#0D0F10] text-white py-6 px-[13px] rounded-[14px] transition-all duration-300`}
      >
        <div className="flex justify-between">
          <div className="flex items-center justify-center mb-8">
            <Image src="/images/logo.png" alt="Logo" width={120} height={32} />
          </div>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1A1D21] outline-none"
            onClick={toggleSidebar}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.707 11.707C8.51947 11.8945 8.26516 11.9998 8 11.9998C7.73484 11.9998 7.48053 11.8945 7.293 11.707L2.293 6.707C2.10553 6.51947 2.00021 6.26516 2.00021 6C2.00021 5.73484 2.10553 5.48053 2.293 5.293L7.293 0.293C7.4816 0.110842 7.7342 0.0100479 7.9964 0.0123262C8.2586 0.0146046 8.50941 0.119774 8.69482 0.305182C8.88023 0.490589 8.9854 0.741403 8.98767 1.0036C8.98995 1.2658 8.88916 1.5184 8.707 1.707L4.414 6L8.707 10.293C8.89447 10.4805 8.99979 10.7348 8.99979 11C8.99979 11.2652 8.89447 11.5195 8.707 11.707Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <hr className="my-9 w-full h-[1px] bg-[#282828]"></hr>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                className="flex items-center p-3 rounded-xl bg-[#B6F09C] text-[#1A1D1F]"
                href="#"
              >
                <Image
                  src="/icons/dashboard.svg"
                  width={24}
                  height={24}
                  alt="dashboard"
                ></Image>
                <span className="ml-3 text-sm font-medium ">Dashboard</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="flex items-center p-3 rounded-xl text-[#6F767E]"
                href="#"
              >
                <Image
                  src="/icons/task.svg"
                  width={24}
                  height={24}
                  alt="task"
                ></Image>
                <span className="ml-3 text-sm font-medium">Task</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="flex items-center p-3 rounded-xl text-[#6F767E]"
                href="#"
              >
                <Image
                  src="/icons/project.svg"
                  width={24}
                  height={24}
                  alt="project"
                ></Image>
                <span className="ml-3 text-sm font-medium">Projects</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="flex items-center p-3 rounded-xl text-[#6F767E]"
                href="#"
              >
                <Image
                  src="/icons/schedule.svg"
                  width={24}
                  height={24}
                  alt="schedule"
                ></Image>
                <span className="ml-3 text-sm font-medium">Schedule</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 text-white p-3">
        <div className="flex items-center justify-between bg-black p-4 rounded-2xl">
          <label className="block text-gray-500 w-[340px]">
            <span className="sr-only">Search</span>
            <div className="flex items-center bg-gray-700 rounded-lg p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177Z"
                  fill="#6F767E"
                />
              </svg>

              <input
                type="text"
                placeholder="Search anything"
                className="bg-transparent text-white focus:outline-none w-full ml-3"
              />
            </div>
          </label>

          <div className="flex items-center space-x-4">
            <button className="mr-12 w-8 h-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9Z"
                  fill="#868B90"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 13C7 12.4477 7.44772 12 8 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H8C7.44772 14 7 13.5523 7 13Z"
                  fill="#868B90"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.71963 17.4636C7.07906 17.164 7.53213 17 8 17H19C19.5523 17 20 16.5523 20 16V6C20 5.44771 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6V19.7299L6.71963 17.4636ZM8 19H19C20.6569 19 22 17.6569 22 16V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V19.7299C2 21.4256 3.97771 22.3519 5.28037 21.2664L8 19Z"
                  fill="#868B90"
                />
              </svg>
            </button>
            <button className="relative right-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067V13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H3.40408C2.62863 18 2 17.3714 2 16.5959ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM18 13.1716C18 14.2324 18.4214 15.2499 19.1716 16H4.87851C5.64222 15.246 6.07136 14.2161 6.06813 13.1416L6.05867 9.9886C6.04875 6.6841 8.7248 4 12.0293 4C15.3268 4 18 6.67316 18 9.97067V13.1716Z"
                  fill="#868B90"
                />
              </svg>

              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            <button>
              <Image
                src="/images/avatar.png"
                alt="User Avatar"
                className="h-12 w-12 rounded-full"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>

        <main>{children}</main>
      </div>
    </div>
  );
}
