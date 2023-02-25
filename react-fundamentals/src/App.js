import './App.css';
import Header from './Header'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import PageNotFound from './components/PageNotFound'
import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

const AppContext = createContext();
const CompanyContext  = createContext();

function App() {
  const [username, setUsername] = useState("Mukesh Mishra");
  const [userDetail, setUserDetail] = useState({name: "mukesh", age:'25Y', mobile:'89898435453'});
  const [CompanyId, setCompanyId] = useState(1001);
  
  return (
    <>
    <AppContext.Provider value={{username, userDetail}}>
      <CompanyContext.Provider value={ CompanyId }>
          <BrowserRouter>
          <Header />
            <Routes>
                <Route exact index element={ <Home /> } />
                <Route exact path='/about' element={ <About /> } />
                <Route exact path='/service' element={ <Service /> } /> 
                <Route exact path='*' element={ <PageNotFound />} />    
            </Routes>
          </BrowserRouter>
      </CompanyContext.Provider>
    </AppContext.Provider>

    </>

  )  
}

export default App;
export { AppContext, CompanyContext };