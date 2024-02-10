function Owl() {
  return (
    <div className="relative ">
      <div>
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1707588485/ImageCompressor%20Assets/dt9bpw4lnp09xe6k8xy9.png" />
      </div>

      <div className="w-24 h-24 absolute top-4 left-2 rounded-3xl overflow-hidden">
        <div className="h-full w-full bg-extraDark rounded-full -translate-y-full  animate-owlBlink" />
      </div>
      <div className="w-24 h-24 absolute top-4 right-2 rounded-3xl overflow-hidden">
        <div className="h-full w-full bg-extraDark rounded-full -translate-y-full animate-owlBlink" />
      </div>
    </div>
  );
}

export default Owl;
