'use client'

import React, { FC, useEffect, useState } from "react";


const Profile: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
   
    <div
    className={`min-h-screen flex flex-col items-center justify-center  z-[2] text-white font-pt ${
      scrolled ? "opacity-20" : "opacity-80 ease-out"
    }`}
  >
        <h2 className="text-5xl font-bold font-moda">Vivien Ingrams</h2>
        <p className="py-5 text-xl">Frontend Web developper</p>
       
      </div>
   
  );
};

export default Profile;
