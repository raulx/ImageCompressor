import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="w-screen min-h-screen bg-neutral">
      <Outlet />
    </div>
  );
}

export default App;
