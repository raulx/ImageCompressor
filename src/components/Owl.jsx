import { useState } from "react";

function Owl() {
  const [imgStatus, setImgStatus] = useState("loading");

  return (
    <>
      {imgStatus === "error" ? (
        <div className="text-sm text-red-500 font-bold">
          Failed to load image !
        </div>
      ) : (
        <div className="relative">
          <div className="sm:h-44 sm:w-44 w-36 h-36">
            <img
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1707588485/ImageCompressor%20Assets/dt9bpw4lnp09xe6k8xy9.png"
              onLoad={() => setImgStatus("loaded")}
              onError={() => setImgStatus("error")}
              className="h-full w-full"
            />
          </div>

          {imgStatus === "loaded" && (
            <>
              <div className="sm:w-24 sm:h-24 w-20 h-20 absolute top-4 left-2 rounded-3xl overflow-hidden">
                <div className="h-full w-full bg-extraDark rounded-full -translate-y-full  animate-owlBlink" />
              </div>
              <div className="sm:w-24 sm:h-24 w-20 h-20 absolute top-4 right-2 rounded-3xl overflow-hidden">
                <div className="h-full w-full bg-extraDark rounded-full -translate-y-full animate-owlBlink" />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Owl;
