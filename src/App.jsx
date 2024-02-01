import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <Header />
      <Main />
    </div>
  );
}

export default App;
