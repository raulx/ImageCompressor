import { useState } from "react";
import * as imageConversion from "image-conversion";

function compressImageToTargetSize(file, quality) {
  return new Promise((resolve, reject) => {
    let currentQuality = quality;
    let compressedImage;

    const compressWithQuality = async () => {
      try {
        compressedImage = await imageConversion.compressAccurately(
          file,
          currentQuality
        );
        resolve(compressedImage);
      } catch (error) {
        reject(error);
      }
    };

    compressWithQuality();
  });
}

function MainPage() {
  const [fileSelected, setFileSelected] = useState({
    name: "no file selected.",
    file: "",
    size: "",
    imgLocation: "",
  });
  const [percentage, setPercentage] = useState(200);
  const [compressedImage, setCompressedImage] = useState({
    file: "",
    size: "",
    url: "",
  });
  const [isCompressing, setIsCompressing] = useState(false);
  const handleImageSelect = async (e) => {
    const file = e.target.files[0];
    const fileName = e.target.value.split("\\").pop().substring(0, 20);
    const fileSize = (file.size / 1024).toFixed(2) + "kb";
    const img = URL.createObjectURL(file);
    setFileSelected((prevValue) => {
      return {
        ...prevValue,
        name: fileName,
        size: fileSize,
        imgLocation: img,
        file: file,
      };
    });
  };
  const handleImageCompress = async () => {
    const file = fileSelected.file;

    if (file) {
      setIsCompressing(true);
      try {
        const compressedImage = await compressImageToTargetSize(
          file,
          percentage
        );
        const compressedImageSize =
          (compressedImage.size / 1024).toFixed(2) + "kb";

        const compressedImageUrl = URL.createObjectURL(compressedImage);

        setCompressedImage((prevValue) => {
          return {
            ...prevValue,
            file: compressedImage,
            size: compressedImageSize,
            url: compressedImageUrl,
          };
        });
      } catch (error) {
        console.error("Error compressing image:", error);
      }
      setIsCompressing(false);
    }
  };
  const handleSave = () => {
    imageConversion.downloadFile(compressedImage.file);
  };
  return (
    <div className="md:w-2/3 mx-auto py-2 flex flex-col overflow-hidden gap-6">
      <div className="flex mx-auto min-w-36  justify-between gap-2 items-center">
        <label
          htmlFor="image-file"
          className="bg-dark md:px-6 md:py-2 px-4 py-2 text-white rounded-2xl text-md md:text-lg"
        >
          Choose File
        </label>
        <input
          id="image-file"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            handleImageSelect(e);
          }}
        />
        <span className="md:text-3xl text-lg text-center">:</span>
        <p className="text-dark text-lg font-bold">{fileSelected.name}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          <img
            src={
              !fileSelected.imgLocation
                ? "https://res.cloudinary.com/dj5yf27lr/image/upload/v1708318245/ImageCompressor%20Assets/r27zgo62sbtxd0eiek5s.svg"
                : fileSelected.imgLocation
            }
            className="h-full w-full object-contain"
          />
          <p className=" font-light text-light py-2">
            Original Image.{fileSelected.size}
          </p>
        </div>
      </div>
      <div className="mx-auto w-72 flex justify-between items-center mt-6">
        <span className="text-dark font-bold">Quality</span>
        <input
          type="range"
          min="0"
          step="5"
          max="200"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <span className=" text-dark font-bold">{percentage}%</span>
      </div>
      <button
        className="px-4 py-2 mt-2 w-72 mx-auto bg-dark text-white rounded-lg"
        onClick={handleImageCompress}
      >
        Compress
      </button>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          {!isCompressing ? (
            <>
              <img
                src={
                  !compressedImage.url
                    ? "https://res.cloudinary.com/dj5yf27lr/image/upload/v1708318245/ImageCompressor%20Assets/r27zgo62sbtxd0eiek5s.svg"
                    : compressedImage.url
                }
                className="h-full w-full object-contain"
              />

              <p className="font-light text-light py-2">
                Final Image.{compressedImage.size}
              </p>
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center gap-6 flex-col">
              <span className="loader"></span>
              <p className="text-dark font-bold animate-pulse duration-1000">
                COMPRESSING
              </p>
            </div>
          )}
        </div>
        <button
          className="py-2 px-4 bg-dark text-white rounded-md"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default MainPage;
