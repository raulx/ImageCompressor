import { useState } from "react";

function MainPage() {
  const [fileSelected, setFileSelected] = useState({
    name: "no file selected.",
    file: "",
    size: 0,
    imgLocation: "",
  });

  const handleImageSelect = (e) => {
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
          <p className="font-bold text-light py-2">
            Original Image.{fileSelected.size}
          </p>
        </div>
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          <img
            className="w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1562037283-072818fb6d8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZha2V8ZW58MHx8MHx8fDA%3D"
          />
          <p className="font-bold text-light py-2">Ai Enchanced Image.</p>
        </div>
      </div>
      <div className="w-72 mt-4 mx-auto">
        <div className="flex justify-between">
          <p>Keep :</p>
          <div>
            <input id="original" type="radio" />
            <label>Original</label>
          </div>
          <div>
            <input id="aienhanced" type="radio" />
            <label>Ai Enhanced</label>
          </div>
        </div>
        <div>
          <div>
            <input type="radio" />
            <label>Less than 50kb</label>
          </div>
          <div>
            <input type="radio" />
            <label>Between 50kb-100kb</label>
          </div>{" "}
          <div>
            <input type="radio" />
            <label>Between than 100kb - 300kb</label>
          </div>{" "}
          <div>
            <input type="radio" />
            <label>Between 300kb - 1MB</label>
          </div>{" "}
          <div>
            <input type="radio" />
            <label>Between 1Mb-5Mb</label>
          </div>
          <button className="px-4 py-2 bg-dark text-white rounded-lg">
            Compress
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFrZXxlbnwwfHwwfHx8MA%3D%3D"
            className="h-full w-full object-contain"
          />
          <p className="font-bold text-light py-2">Final Image.</p>
        </div>
        <button className="py-1 px-2 bg-dark text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default MainPage;
