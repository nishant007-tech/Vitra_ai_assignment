import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home';
import Non_active_users from './components/non_active_users';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [FixedapiData, setFixedapiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let resData = await axios.get("/");
      setFixedapiData(resData.data);
    }
    fetchData();
  }, [])

  return (
    <Router>
      <Route exact path='/' component={() => <Home userData={FixedapiData} />} />
      <Route exact path='/non_active_users' component={() => <Non_active_users userData={FixedapiData} />} />
    </Router>
  );
}

export default App;
