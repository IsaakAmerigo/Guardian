import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Navbar from './component/Navbar';
// import Knowledge from './component/Knowledge';
// import Tool from './component/Tool';
import { baseURL, config } from './services';
import './App.css';


function App() {
  const [ guide, setGuide] = useState([]);
  const [ toggleFetch, setToggleFetch] = useState(true);

useEffect(() => {

const fetchGuide = async () => {

const resp = await axios.get(baseURL, config);

// console.log(resp.data.records);
setGuide(resp.data.records);
}

fetchGuide();
}, []);


  return (
    <div className="App">

<Navbar />
      
        <Route exact path="/">
        <h2> Based Nationalist</h2>

      </Route>

        <Route exact path="/newKnow">
    

      </Route>

        <Route exact path="/newPur">
      
      </Route>

        <Route exact path="/newTool">
      
      </Route>

    </div>
  );
}

export default App;
