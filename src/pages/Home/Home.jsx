import About from "./About/About";
import Hero from "./Hero/Hero";
import HomeStats from "./Stats/HomeStats";
import HomeSuccess from "./Success/HomeSuccess";
import Values from "./Values/Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeStats />
      <About />
      <HomeSuccess/>
    </div>
  );
};

export default Home;
