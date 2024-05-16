import React from "react";


import { motion, AnimatePresence } from "framer-motion";


import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-screen flex flex-col bg-neutral-900 justify-center items-center font-noto'
      >
        <div className='flex flex-row items-center italic text-base md:text-xl text-center text-[#c4c4cc] select-nones'>
          Ankit Singh Portfolio
         </div>


        <div className="mt-5 ">
        <PropagateLoader 
             color="#36d7b7"  
             size={25}
        />
       </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;