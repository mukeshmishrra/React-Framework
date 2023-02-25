import './../App.css';
import {AppContext} from '../App';
import { useContext } from 'react';
import { CompanyContext } from '../App';

const About = () => {
  const data = useContext(AppContext);
  const companyId = useContext(CompanyContext);

  return (
    <div className="App">
      <header className="App-header">
        <p>About Page</p>

        <h1>welcome {data.username}</h1>
        <div style={{ color: 'white', backgroundColor: 'black', height: 'auto' }}>
            <h3>Username:  { data.userDetail.name }</h3>
            <h3>Age: {data.userDetail.age}</h3>
            <h3>Mobile: {data.userDetail.mobile}</h3>
        </div>

        <h3 style={{ color: 'red', fontWeight: '700' }}> company id: { companyId } </h3>
      </header>
    </div>
  )
}

export default About
