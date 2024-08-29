import DashboardLayout from "@/app/dashboard/DashboardLayout";
import Image from "next/image";
import React from "react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold mt-4 mb-6">Dashboard</h1>
      <div className="bg-[#0D0F10] py-[13px] px-6 rounded-lg shadow-lg">
        <table className="w-full text-left ">
          <thead>
            <tr className="text-[12px] leading-[18px] text-[#667085]">
              <th className="flex items-center">
                <input type="checkbox" className=" rounded w-5 h-5 mr-3" />
                <span className="mr-1">Project</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00001 3.33334V12.6667M8.00001 12.6667L12.6667 8.00001M8.00001 12.6667L3.33334 8.00001"
                    stroke="#667085"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </th>
              <th>Last assessed</th>
              <th>License use</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-2 flex items-center">
                  <input type="checkbox" className=" rounded w-5 h-5 mr-3" />
                  <Image
                    src="/images/avatar.png"
                    alt="User Avatar"
                    className="h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                  />
                  <div className="ml-3 text-sm">
                    <span className="block text-white">Sisyphus</span>
                    <span className="text-[#6F767E]">sisyphus.com</span>
                  </div>
                </td>
                <td className="text-sm text-[#6F767E]">22 Jan 2022</td>
                <td className="text-[12px] leading-[18px]">
                  <span className="bg-[#0E5A3A] px-2 py-1 rounded-2xl text-[#46E8A5] mr-1">
                    Active
                  </span>{" "}
                  <span className="bg-[#423419] text-[#FFD666] px-2 py-1 rounded-2xl mr-1">
                    Customer data
                  </span>{" "}
                  <span className="bg-[#422721] text-[#FFAC82] px-2 py-1 rounded-2xl">
                    Admin
                  </span>
                </td>
                <td className="space-x-2 h-full">
                  <div className="flex items-center">
                    <button className="text-gray-400 flex items-center justify-center w-10 h-10">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667"
                          stroke="#6F767E"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-400 w-10 h-10  flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_10_120)">
                          <path
                            d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7353 1.98906C17.0213 2.10752 17.2812 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.011 3.26468C18.1294 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1294 4.7827 18.011 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.25002 17.0833L1.66669 18.3333L2.91669 13.75L14.1667 2.5Z"
                            stroke="#6F767E"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_10_120">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button className="text-white w-[86px] h-9 rounded-lg bg-[#131619] border border-[#282828]">
            Previous
          </button>
          <span className="text-gray-400">Page 1 of 10</span>
          <button className="text-white w-[86px] h-9 rounded-lg bg-[#131619] border border-[#282828]">
            Next
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
