import './App.css';
import Header from './Header';
import {useState} from 'react'
;
function App() {
  const [productItem, setproductItem] = useState(1);
  const inc = () => {
      return setproductItem(productItem+1);
  }

  const dec = () => {
      if(productItem>0){
        return setproductItem(productItem-1);
      }
  }

  return (
    <div className="App">  
      <Header />
      <div className="container">
          <button onClick={inc} style={{ background: '#fff', color:'rgba(219, 32, 32, 0.665)', padding: '20px', fontSize: '20px', fontWeight: '600' }}>increment</button>
          <span style={{ color: "red", fontSize: '30px', padding: '20px', fontWeight: '600' }}> { productItem }</span>
          <button onClick={dec} style={{ background: '#fff', color:'rgba(219, 32, 32, 0.665)', padding: '20px', fontSize: '20px', fontWeight: '600' }}>decrement</button>
      </div>
    </div>
  );
}

export default App;
