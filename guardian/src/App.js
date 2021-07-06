import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import Guide from "./component/Guide";
import Guardian from "./component/Guardian";
import Purpose from "./component/Purpose";
import Knowledge from './component/Knowledge';
import Tool from './component/Tool';
import { baseURL, config } from "./services";
import "./App.css";

// ok bud it's like Heartbake ok, when clownpilled remember to breathe. Life is Suffering, Live is Overcoming.

function App() {
  const [guides, setGuides] = useState([]);
  const [tools, setTools] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [current, setCurrent] = useState("");

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

      <Route exact path="/guardian">
      <Guardian />
      </Route>
      

      <Route path="/newKnow">
      <main>
          {/* ok bud, so you grab all the guides(guides.map) but want to piece through each guide({guide}) & turn X on/off(delete)..that's how we see it  */}

          <Form setToggleFetch={setToggleFetch}/>
          {guides.map((guide) => (
            <Guide
              key={guide.id}
              guide={guide}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </main>

      </Route>

      <Route path="/Purpose">
            <Purpose />
      </Route>

      <Route  path="/newTool">
      {tools.map((tool) => (
            <Tool
              key={tool.id}
              tool={tool}
              setToggleFetch={setToggleFetch}
            />
          ))}
      <Form setToggleFetch={setToggleFetch}/>
      </Route>

      
    </div>
  );
}

export default App;
