import About from "./About/About";
import Hero from "./Hero/Hero";
import Playvideo from "./PlayVideo/Playvideo";
import HomeStats from "./Stats/HomeStats";
import HomeSuccess from "./Success/HomeSuccess";
import Testimonials from "./Testimonials/Testimonials";
import Values from "./Values/Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeStats />
      <About />
      <HomeSuccess/>
      <Playvideo/>
      <Testimonials/>
    </div>
  );
};

export default Home;
