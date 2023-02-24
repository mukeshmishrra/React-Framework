import './App.css';
import Header from './Header'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route exact index element={ <Home /> } />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/service' element={ <Service /> } /> 
          <Route exact path='*' element={ <PageNotFound />} />    
      </Routes>
    </BrowserRouter>
    </>

  )  
}

export default App;
