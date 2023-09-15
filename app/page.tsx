import React from "react";
import { Navbar } from "./components/Navbar"
import Profile from "./components/Profile"
import { Work } from "./components/Work"
import { WorkData } from "./components/WorkData";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Profile heading="Vivien Ingrams" message="Frontend Web Developer" />
      <Work work={WorkData} />
    </>
  );
};

export default Home;
