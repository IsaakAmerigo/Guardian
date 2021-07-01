import { Route } from 'react-dom';
// import axios from 'axios';
import Navbar from './component/Navbar';
// import Knowledge from './component/Knowledge';
// import Tool from './component/Tool';
import './App.css';


function App() {



  return (
    <div className="App">

<Navbar />
      
        <Route exact path="/">
        

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
