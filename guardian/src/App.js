import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import Guide from "./component/Guide";
import Purpose from "./component/Purpose";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [guides, setGuides] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  // const [current, setCurrent] = useState("");

  useEffect(() => {
    const fetchGuides = async () => {
      
      const resp = await axios.get(baseURL, config);

      
      setGuides(resp.data.records);
    };

    fetchGuides();
  }, [toggleFetch]); 


  return (
    <div className="App">

<Navbar />
      <Route exact path="/">
        
      <div>
  <h2>Welcome to Guardian</h2>
<img src="https://i.imgur.com/MauQhiA.jpg" alt="roman god mars" id="mars"></img>
<p>
{/* Image from myancientworld.tumblr.com */}
</p>
  <p>
    You've been lead here via a divine calling by the <strong id="chad">Triad of Masculinity</strong>, by the Roman God, Mars. Called by your Will to Power; by a desire to physically defense community, family & Fatherland as we cultural play offensive to Save the West. So check on the link to our Purpose up top then have it from there.<br/><strong id="chad">LET'S GOOOOOO</strong>
  </p>
</div>
      </Route>
      

      <Route path="/newKnow">
      <main>

<Form setToggleFetch={setToggleFetch} />

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

<Footer />
</div>
      );
}

export default App;
