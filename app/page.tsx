'use client'

import React, { useEffect, useState } from "react"

import Profile from "./components/Profile"
import { Work } from "./components/Work"
import { WorkData } from "./components/WorkData"


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [showWork, setShowWork] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowWork(true);
      } else {
        setShowWork(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col">
    
      <Profile heading="Vivien Ingrams" message="Frontend Web Developer" />
      {showWork && <Work work={WorkData} />}
  
    </div>
  );
};

export default Home
