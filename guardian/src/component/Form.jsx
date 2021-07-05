import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL, config } from '../services';


function Form(props) {
const [topic, setTopic] = useState("");
const [message, setMessage] = useState("");
const [location, setLocation] = useState("");



const handleSubmit = async (e) => {
  e.preventDefault();

  const newGuide = {
    topic,
    message, 
    location,
  };

  await axios.post(baseURL, { fields: newGuide }, config);

  props.setToggleFetch((curr) => !curr);
}


  return (
<form onSubmit={handleSubmit}>


  <input id="topic" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} value={topic}/>
  
  <textarea id="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}>
    </textarea>

    <input type="name" id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>

  <button type="submit">👌🏻Share👌🏻</button>
</form>
  )
}

export default Form;