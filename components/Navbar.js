import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth >= 768) {
        setIsToggle(false);
      }
    });
  }, []);
  return (
    <>
      <div className="py-2 border-b-2 border-gray-100 w-full">
        {/* display md to up */}
        <div className="md:flex hidden container px-3 mx-auto items-center justify-between">
          <div className={`${styles.logoContainer} flex items-center mr-5`}>
            <Image src="/icon.svg" width={300} height={70} objectFit="contain" />
          </div>
          <div className="flex items-center">
            <div className="text-gray-700 p-2 rounded-xl hover:text-sky-600 hover:bg-sky-100 cursor-pointer flex items-center mr-5">
              <IonIcon name="home-outline" className="text-lg font-extrabold mr-1" />
              Home
            </div>
            <div className="text-gray-700 p-2 rounded-xl hover:text-sky-600 hover:bg-sky-100 cursor-pointer flex items-center">
              <IonIcon name="information-circle-outline" className="text-xl font-extrabold mr-1" />
              About
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-slate-500 hover:bg-slate-100 hover:text-slate-400 p-2 rounded-xl bg-slate-200 cursor-pointer flex items-center mr-5">
              <IonIcon name="log-in-outline" className="text-2xl font-extrabold mr-1" />
              Login
            </div>
            <div className="p-2 rounded-xl bg-[#3F70D1] hover:bg-[#3F70D1]/80 text-white cursor-pointer flex items-center">
              <IonIcon name="add-circle-outline" className="text-xl font-extrabold mr-1" />
              Create Account
            </div>
          </div>
        </div>
        {/* display md to up */}
        {/* display md to down */}
        <div>
          <div className="container mx-auto px-3 flex justify-between items-center md:hidden">
            <div className="w-[180px] flex items-center mr-5">
              <Image src="/icon.svg" width={300} height={70} objectFit="contain" />
            </div>
            <button type="button" className="relative group" onClick={() => setIsToggle(!isToggle)}>
              <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#3F70D1] ring-gray-300 hover:ring-2 group-focus:ring-2 ring-opacity-30 duration-200 shadow-md">
                <div className={`transform transition-all duration-150 overflow-hidden ${isToggle === true ? 'translate-y-3.5' : '-translate-y-6 '}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${isToggle === true ? 'translate-y-6' : '-translate-y-3'}`}>
                  <div className={`bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left ${isToggle === true && 'translate-y-6'}`} />
                  <div className={`bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${isToggle === true && 'translate-y-6'}`} />
                  <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-100 ${isToggle === true && 'translate-y-6'}`} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`${
        isToggle ? 'h-52' : 'h-0'
      } transition-all delay-150 duration-300 overflow-hidden w-full bg-gray-100 px-5 drop-shadow-md`}
      >
        <div className="text-gray-700 p-2 rounded-xl active:text-white bg-gray-200 active:bg-[#3F70D1]/50 cursor-pointer flex items-center mr-5 mx-auto w-full my-3">
          <IonIcon name="home-outline" className="text-lg font-extrabold mr-1" />
          Home
        </div>
        <div className="text-gray-700 p-2 rounded-xl active:text-white bg-gray-200 active:bg-[#3F70D1]/50 cursor-pointer flex items-center mr-5 mx-auto w-full my-3">
          <IonIcon name="information-circle-outline" className="text-xl font-extrabold mr-1" />
          About
        </div>
        <div className="grid gap-2 grid-cols-2 mt-8">
          <div>
            <div className="text-gray-700 active:bg-gray-300 active:text-gray-500 p-2 rounded-xl bg-gray-200 cursor-pointer flex items-center justify-center">
              <IonIcon name="log-in-outline" className="text-2xl font-extrabold mr-1" />
              Login
            </div>
          </div>
          <div>
            <div className="p-2 rounded-xl bg-[#3F70D1] active:bg-[#3F70D1]/80 text-white cursor-pointer flex items-center justify-center">
              <IonIcon name="add-circle-outline" className="text-xl font-extrabold mr-1" />
              Create Account
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
