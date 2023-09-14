import { Navbar } from "./components/Navbar"
import Profile from "./components/Profile"

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Profile heading="Vivien Ingrams" message="Frontend Web Developer" />
    </>
  );
};

export default Home;
