import React, { useState } from "react";
import Header from "./Components/Header";

const App = () => {
  const [a, b] = useState(20);
  
  const count = () => {
    b(a+1)
  }

  return (
    <>
    <Header/>
      <button className="bg-green-600 text-white p-4 m-5 rounded" onClick={   () => count()   }> Count </button>
      <h3 className="m-10">{a}</h3>
    </>

  );
};

export default App;
