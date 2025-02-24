import React from "react";


import { motion, AnimatePresence } from "framer-motion";


import PropagateLoader from "react-spinners/PropagateLoader";
import { SparklesCore } from "./components/ui/sparkles";

const Loader = () => {
  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className='h-screen flex flex-col  justify-center items-center font-noto'
    //   >
    //     <div className='flex flex-row items-center italic text-base md:text-xl text-center text-[#c4c4cc] select-nones'>
    //       Ankit Singh Portfolio
    //      </div>


    //     <div className="mt-5 ">
    //     <PropagateLoader 
    //          color="#36d7b7"  
    //          size={25}
    //     />
    //    </div>
    //   </motion.div>
    // </AnimatePresence>
    <div className="h-screen w-full bg-[#171717] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-6xl text-6xl lg:text-6xl font-bold text-center text-white relative z-20">
        Ankit Singh Portfolio
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#171717] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Loader;