import { BsBookHalf, BsCodeSquare, BsGraphUp } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 md:px-24 py-20 md:py-24 lg:py-28 xl:py-32">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
