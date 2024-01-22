import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  // Variables
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator Handler
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";

    if (isCharAllowed) str += "!@#$%^&*_-+()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isCharAllowed, passwordGenerator])


  return (
    <>
      <h1 className="text-center w-full bg-black">
        Password Generator Software
      </h1>

      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="flex">
          {/* ----------INPUT FIELD------------  */}
          <input
            type="text"
            value={password}
            className="w-full p-2  border mb-4 outline-blue-700 "
            readOnly
          />

          <button className="bg-blue-500 text-white p-2 mb-4 hover:bg-blue-600">
            Copy
          </button>
        </div>

        {/* -----LENGTH------ */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Length:
          </label>
          <div className="flex">
            <input type="range" 
              min="4" max="20" 
              value={length}

              onChange={(e)=> {setLength(e.target.value)}}
              className="w-full" />
            <span className="text-sm text-gray-500 ms-3 font-medium ">{length}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <div className="mr-4">
            <input type="checkbox"
              defaultChecked={isNumberAllowed}
              onChange= {()=> {setIsNumberAllowed((previousValue) => !previousValue)}} className="mr-2" />
            <label className="text-sm text-gray-700">Include Numbers</label>
          </div>
          <div>
            <input type="checkbox" 
              defaultChecked={isCharAllowed}
              onChange={() => setIsCharAllowed((previousValue) => !previousValue)}
              className="mr-2" />
            <label className="text-sm text-gray-700">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
