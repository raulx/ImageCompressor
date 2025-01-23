import Owl from "../components/Owl";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="md:w-2/3 w-full mx-auto text-center">
      <div className="flex flex-col items-center gap-12 justify-center h-screen ">
        <h1 className="font-extrabold text-dark md:text-4xl text-2xl">
          Super Easy Image Compressor
        </h1>
        <div className=" bg-neutral">
          <Owl />
        </div>

        <p className="sm:w-2/3 w-full px-2 mx-auto md:text-2xl text-lg leading-8">
          Compress your images effortlessly while keeping every detail crystal
          clear. Save space, speed up load times, and let your visuals shine
          brighter than ever!
        </p>
        <button className="bg-dark md:py-2 md:px-12  px-8 py-2 rounded-full text-white text-3xl drop-shadow-2xl animate-fliker">
          <Link to={"/main"}>Start</Link>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
