import { useContext, useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Hero from "./components/Hero";
import { themeContext } from "./context/themeContext";

const App = () => {
  const { darkMode, setDarkMode } = useContext(themeContext);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 relative transition-colors duration-300 isolate">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}></div>
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}></div>
      </div>
      <button
        onClick={toggleMode}
        className="fixed z-10 w-9 h-9 lg:w-10 lg:h-10 bg-amber-500 hover:bg-amber-600 top-3 lg:top-4 right-3 lg:right-4 rounded-full flex items-center justify-center cursor-pointer">
        {darkMode ? (
          <BsSunFill className="text-lg lg:text-xl" />
        ) : (
          <BsMoonFill className="text-lg lg:text-xl" />
        )}
      </button>
      <Hero />
    </div>
  );
};

export default App;
