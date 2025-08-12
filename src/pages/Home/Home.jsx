import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Hero from "./Hero/Hero";
import Playvideo from "./PlayVideo/Playvideo";
import HomeStats from "./Stats/HomeStats";
import HomeSuccess from "./Success/HomeSuccess";
import Team from "./Team/Team";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeStats />
      <About />
      <HomeSuccess/>
      <Playvideo/>
      <Testimonials/>
      <Team/>
      <ContactUs/>
    </div>
  );
};

export default Home;
