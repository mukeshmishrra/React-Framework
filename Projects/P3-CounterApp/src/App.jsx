import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const increase = () => {
    console.log("Clicked incr")
    counter = counter + 1;
    setCounter(counter);
  }

  const decrease = () => {
    console.log("clicked decr")
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <div style={{  height: '300px', width:"400px", background:"black"}} >
          <h1  style={{ background: 'Yellow' }}>Counter App</h1>
          <div style={{ fontSize: '30px', fontWeight: "600" , color:"#FFF",  margin: '20px'}}> Count : {counter}</div>
          <button onClick={increase}  style={{ marginLeft: "10px", color: 'green' }}> Increase Val</button>
          <button onClick={decrease} style={{ marginLeft: "10px", color: 'red' }}> Decrease Val</button>
      </div>
      
    </>
  )
}

export default App
