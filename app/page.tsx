import React from "react"

import Profile from "./components/Profile"
import { Work } from "./components/Work"
import { WorkData } from "./components/WorkData"


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col">
      <Profile />
      <Work work={WorkData} />
    </div>
  );
};

export default Home
