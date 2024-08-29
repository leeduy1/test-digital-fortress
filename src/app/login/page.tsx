"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-1/2 flex items-center justify-center">
        <div className=" w-[496px]">
          <h1 className="text-[36px] leading-[44px] font-normal mb-6 text-white">
            Hello,{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D62E5] via-[#87DDEE] to-[#B6F09C]">
              Digital Fortress
            </span>
          </h1>
          <p className="text-[18px] leading-[28px] font-medium text-gray-400">
            Log in to platform to start creating magic.
          </p>

          <div className="mt-16 ">
            <div className="mb-6">
              <label className="block text-gray-500">
                <span className="sr-only">Email</span>
                <div className="flex items-center bg-gray-700 rounded-lg p-2">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L8 8M18 2L12 8M8 8L8.58579 8.58579C9.36684 9.36684 10.6332 9.36684 11.4142 8.58579L12 8M8 8L1.87868 14.1213M12 8L18.1213 14.1213M18.1213 14.1213C18.6642 13.5784 19 12.8284 19 12V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V12C1 12.8284 1.33579 13.5784 1.87868 14.1213M18.1213 14.1213C17.5784 14.6642 16.8284 15 16 15H4C3.17157 15 2.42157 14.6642 1.87868 14.1213"
                      stroke="#686B6E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent text-white focus:outline-none w-full ml-3"
                  />
                </div>
              </label>
            </div>
            <div className="mb-6">
              <label className="block text-gray-500">
                <span className="sr-only">Password</span>
                <div className="flex items-center bg-gray-700 rounded-lg p-2">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7V5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12ZM8 12V14M3 17H13C14.1046 17 15 16.1046 15 15V9C15 7.89543 14.1046 7 13 7H3C1.89543 7 1 7.89543 1 9V15C1 16.1046 1.89543 17 3 17Z"
                      stroke="#686B6E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input
                    type="Password"
                    placeholder="Password"
                    className="bg-transparent text-white focus:outline-none w-full ml-3"
                  />
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-[#CDCECF]">
                <input type="checkbox" className=" rounded w-6 h-6" />
                <label className="ml-2 text-[16px] leading-[24px]">
                  Remember me
                </label>
              </div>
              <Link
                href="#"
                className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              onClick={handleClick}
              className="w-full bg-[#B6F09C] text-gray-900 font-bold py-3 rounded-lg"
            >
              Log in
            </button>

            <p className="mt-12 text-center text-gray-400 text-[16px] leading-[24px] font-semibold">
              Don{"'"}t have an account?{" "}
              <Link
                href="#"
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <Image
          src="/images/Illustration.png"
          width={720}
          height={1024}
          alt="image"
          className="w-auto h-screen"
        />
      </div>
    </div>
  );
}
