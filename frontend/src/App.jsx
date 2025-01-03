import React from "react";
import Navbar from "./components/partials/Navbar";
import Routing from "./utils/Routing";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex flex-col">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
