import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Guide from "./component/Guide";
// import Knowledge from './component/Knowledge';
// import Tool from './component/Tool';
import { baseURL, config } from "./services";
import "./App.css";

// ok bud it's like Heartbake ok, when clownpilled remember to breathe. Life is Suffering, Live is Overcoming.

function App() {
  const [guides, setGuides] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchGuides = async () => {
      // make API call to url with what's in the config...hope your doing this right, maybe console.log to check idk.
      const resp = await axios.get(baseURL, config);

      // console.log(resp.data.records);
      setGuides(resp.data.records);
    };

    fetchGuides();
  }, [toggleFetch]); // run only on mount...your doing good buddy

  return (
    <div className="App">
      <Navbar />

      <Route path="/">
        {/* <h2> Based Nationalist</h2> */}
        <main>
          {/* ok bud, so you grab all the guides(guides.map) but want to piece through each guide({guide}) & turn X on/off(delete)..that's how we see it  */}

          {guides.map((guide) => {
            <Guide
              key={guide.id}
              guide={guide}
              setToggleFetch={setToggleFetch}
            />;
          })}
        </main>
      </Route>

      <Route exact path="/newKnow"></Route>

      <Route exact path="/Purpose"></Route>

      <Route exact path="/newTool"></Route>

      <Route exact path="/edit/:id"></Route>
    </div>
  );
}

export default App;
