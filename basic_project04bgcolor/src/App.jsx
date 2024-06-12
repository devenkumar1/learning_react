import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#212121");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-indigo-500 px-3 py-2 rounded-3xl">
            <button
              style={{ backgroundColor: "red" }}
              className=" rounded-3xl px-3 py-2"
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              style={{ backgroundColor: "green" }}
              className=" rounded-3xl px-3 py-2"
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              style={{ backgroundColor: "blue" }}
              className=" rounded-3xl px-3 py-2"
              onClick={() => setColor("blue")}
            >
              blue
            </button>
            <button
              style={{ backgroundColor: "yellow" }}
              className=" rounded-3xl px-3 py-2"
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
