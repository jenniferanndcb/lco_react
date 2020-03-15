import React from "react";
import PostcodeInput from "./components/PostcodeInput";
import "./App.css";
import Banner from "./components/Banner";
import DataContent from "./components/DataContent";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="wrapper">
        {/* <DataContent /> */}
        <PostcodeInput />
      </div>
    </div>
  );
}

export default App;
