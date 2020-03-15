import React from "react";
import PostcodeInput from "./components/PostcodeInput";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner/>
      <PostcodeInput />
    </div>
  );
}

export default App;
