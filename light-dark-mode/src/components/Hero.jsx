import { useContext } from "react";
import {
  BsBookHalf,
  BsBrightnessHighFill,
  BsCheckCircleFill,
  BsCodeSquare,
  BsCopy,
  BsGraphUp,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { themeContext } from "../context/themeContext";

const Hero = () => {
  const { darkMode } = useContext(themeContext);
  const mode = darkMode ? "dark-mode" : "light-mode";
  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 md:px-24 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">
                  NEW
                </span>
                <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900/50 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50">
                  <BsGraphUp className="inline mr-1" /> Next Generation Design
                  System
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:7xl font-black tracking-tight text-neutral-900 dark:text-white">
                <span className="block mb-1">Design</span>
                <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 via-amber-400 to-amber-600">
                  Without Limits.
                </span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                Elevate your web design with our streamlined design system
                powered by latest Tailwind CSS v4. Create stunning user
                experience with state-of-the-art theme.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-px bg-neutral-500 dark:bg-neutral-700 w-12"></div>
                <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
                  transition seemlessly
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group">
                <BsCodeSquare className="mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform" />
                <span>Start Coding</span>
              </button>
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 font-medium flex items-center transition group border border-neutral-300 dark:border-neutral-700">
                <BsBookHalf className="mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>Docs</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/lego/1.jpg"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-white border-neutral-900 object-cover"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/lego/2.jpg"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-white border-neutral-900 object-cover"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/lego/3.jpg"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-white border-neutral-900 object-cover"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/lego/4.jpg"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-white border-neutral-900 object-cover"
                  alt=""
                />
                <span className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-white border-neutral-900 bg-amber-500 text-xs">
                  5k+
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  {[...Array(4)].map((_, idx) => {
                    return (
                      <BsStarFill key={idx} className="text-amber-500 mr-1" />
                    );
                  })}
                  <BsStarHalf className="text-amber-500 mr-1" />
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    4.8/5
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm ">
                  Trusted by{" "}
                  <span className="font-bold text-neutral-900 dark:text-white">
                    5000+
                  </span>{" "}
                  developers worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500 to-indigo-900 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-white dark:bg-neutral-950 p-4 lg:p-5 xl:p-6 rounded-lg shadow-2xl border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 lg:w-4 lg:h-4 rounded-full bg-red-500"></span>
                    <span className="h-3 w-3 lg:w-4 lg:h-4 rounded-full bg-amber-500"></span>
                    <span className="h-3 w-3 lg:w-4 lg:h-4 rounded-full bg-green-500"></span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {mode}.jsx
                  </div>
                </div>
                <div className="h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                  <img
                    src="./code-light.png"
                    alt=""
                    className="w-full h-full dark:hidden object-cover object-top-left"
                  />
                  <img
                    src="./code-dark.png"
                    alt=""
                    className="w-full h-full object-cover object-top-left dark:block"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-linear-to-r from-amber-500 to-indigo-300 flex items-center justify-center text-white shadow-lg animate-pulse">
                      <BsBrightnessHighFill className="text-xl lg:text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 lg:mt-4 flex justify-between items-center">
                  <div className="relative flex gap-2">
                    <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-amber-400 text-xs font-medium flex items-center">
                      <RiTailwindCssFill className="mr-1" /> Tailwind v4
                    </span>
                    <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 border border-neutral-200 dark:dark-neutral-700 text-xs font-medium flex items-center">
                      <RiReactjsFill className="mr-1" /> ReactJS
                    </span>
                  </div>
                  <button className="w-8 h-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 flex items-center justify-center rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-600 transition">
                    <BsCopy className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 hidden md:block animate-bounce">
        <div className="flex items-center justify-center bg-neutral-950 text-white px-2.5 py-1.5 text-sm gap-2 shadow-lg rounded-full">
          <BsCheckCircleFill className="" /> Responsive
        </div>
      </div>
      <div className="absolute top-12 right-[20%] hidden md:block animate-bounce delay-300">
        <div className="flex items-center justify-center bg-neutral-950 text-white px-2.5 py-1.5 text-sm gap-2 shadow-lg rounded-full">
          <BsCheckCircleFill className="text-amber-500" /> Accessible
        </div>
      </div>
    </div>
  );
};

export default Hero;
