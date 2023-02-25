import React from "react";
import Head from "next/head";
import Loader from "../Components/Loader";
import MainScreen from "../Components/MainScreen";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [showAnimation, setShowAnimation] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 2500);
  }, []);

  if (showAnimation) {
    return (
      <div className={``}>
        <Head>
        <title>Ankit Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="author" content="Ankit Singh"></meta>
        </Head>
        <Loader/>
      </div>
    );
  }
  else {
    return (
     
      
        
      <div className='min-h-screen bg-neutral-900 text-slate-200 '>
        
         <MainScreen/>

       
          
          
        </div>
      
    );
  }
}

export default Home
