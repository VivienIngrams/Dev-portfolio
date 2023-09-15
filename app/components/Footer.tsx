"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Footer: React.FC = () => {
  const [color, setColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 bottom-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] text-sm m-auto flex justify-center items-center p-4 text-white">
        <ul style={{ color: `${textColor}` }} >
          <button className="p-1 m-1 border">Dark</button>
          <button className="p-1 m-1 border">Light</button>
        </ul>
      </div>
    </div>
  )
}
