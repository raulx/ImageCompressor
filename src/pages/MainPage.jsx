import { useState } from "react";
import * as imageConversion from "image-conversion";

function compressImageToTargetSize(file) {
  return new Promise((resolve, reject) => {
    let currentQuality = 200;
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
    size: 0,
    imgLocation: "",
  });

  const [compressedImage, setCompressedImage] = useState({
    file: "",
    size: "",
    url: "",
  });

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
      try {
        const compressedImage = await compressImageToTargetSize(file);
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
    }
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
            src={fileSelected.imgLocation}
            className="h-full w-full object-contain"
          />
          <p className=" font-light text-light py-2">
            Original Image.{fileSelected.size}
          </p>
        </div>
      </div>
      <button
        className="px-4 py-2 mt-4 w-72 mx-auto bg-dark text-white rounded-lg"
        onClick={handleImageCompress}
      >
        Compress
      </button>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          <img
            src={compressedImage.url}
            className="h-full w-full object-contain"
          />
          <p className="font-light text-light py-2">
            Final Image.{compressedImage.size}
          </p>
        </div>
        <button className="py-1 px-2 bg-dark text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default MainPage;
