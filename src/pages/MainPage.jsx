function MainPage() {
  return (
    <div className="md:w-2/3 mx-auto py-2 flex flex-col gap-6">
      <div className="flex justify-center gap-6 items-center">
        <label
          htmlFor="image-file"
          className="bg-dark px-6 py-2 text-white rounded-2xl"
        >
          Choose File
        </label>
        <input id="image-file" type="file" className="hidden" />
        <span className="text-3xl text-center">:</span>
        <p className=" text-dark text-lg font-bold">No File Selected.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1585995603666-5bd6b348de9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFrZXxlbnwwfHwwfHx8MA%3D%3D"
            className="h-full w-full object-contain"
          />
          <p className="font-bold text-light py-2">Original Image.</p>
        </div>
        <div className="w-72 h-56 border-black border-2 rounded-lg">
          <img
            className="w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1562037283-072818fb6d8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZha2V8ZW58MHx8MHx8fDA%3D"
          />
          <p className="font-bold text-light py-2">Ai Enchanced Image.</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
