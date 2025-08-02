import About from "./About/About";
import Hero from "./Hero/Hero";
import HomeStats from "./Stats/HomeStats";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeStats/>
      <About/>
    </div>
  );
};

export default Home;
