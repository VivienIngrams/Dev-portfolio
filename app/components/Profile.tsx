import React, { FC } from "react";

interface ProfileProps {
  heading: string;
  message: string;
}

const Profile: FC<ProfileProps> = ({ heading, message }) => {
  return (
    <main className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img-dark">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-emerald-900/30 z-[2]" />
      <div className=" p-5 z-[2] mt-[-10rem] text-white font-pt">
        <h2 className="text-5xl font-bold font-moda">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
       
      </div>
    </main>
  );
};

export default Profile;
