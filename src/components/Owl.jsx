function Owl() {
  return (
    <div className="relative ">
      <div>
        <img src="../src/assets/owl-min.png" />
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
