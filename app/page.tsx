import React from "react";
import { Navbar } from "./components/Navbar"
import Profile from "./components/Profile"
import { Work } from "./components/Work"
import { WorkData } from "./components/WorkData"
import { Footer } from "./components/Footer";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Profile heading="Vivien Ingrams" message="Frontend Web Developer" />
      <Work work={WorkData} />
      <Footer />
    </>
  );
};

export default Home;
