import Owl from "../components/Owl";

function LandingPage() {
  return (
    <div className="md:w-2/3 mx-auto text-center">
      <div className="flex flex-col items-center gap-12 justify-center h-screen ">
        <h1 className="font-extrabold text-dark text-4xl">
          Ai Powered Image Compressor
        </h1>
        <div className=" bg-neutral">
          <Owl />
        </div>
        <p className="w-2/3 mx-auto md:text-2xl text-xl leading-8">
          Compress your images with Ease.Our application uses ai tools to
          compress image size without affecting the quality.try it now.
        </p>
        <button className="bg-dark py-2 px-12  rounded-full text-white text-3xl shadow-lg">
          Start
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
