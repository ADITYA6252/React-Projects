import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">

      <div className="absolute inset-0 z-0">
        <Video />
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>

    </div>
  );
};

export default Home;
