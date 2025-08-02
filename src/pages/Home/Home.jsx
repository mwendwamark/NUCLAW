import About from "./About/About";
import Hero from "./Hero/Hero";
import HomeStats from "./Stats/HomeStats";
import Values from "./Values/Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeStats />
      <About />
    </div>
  );
};

export default Home;
