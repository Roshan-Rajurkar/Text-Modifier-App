import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* sending props explicitly */}
      <Navbar title="TextUtils" aboutText="I am About" />
      {/* Taking about by default */}
      {/* <Navbar title="TextUtils" /> */}
      {/* taking both title and about by default */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
