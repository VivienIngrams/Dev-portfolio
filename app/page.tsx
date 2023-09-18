import React from "react"

import Profile from "./components/Profile"
import { Work } from "./components/Work"
import { WorkData } from "./components/WorkData"


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col">
      <Profile heading="Vivien Ingrams" message="Frontend Web Developer" />
      <Work work={WorkData} />
    </div>
  );
};

export default Home
