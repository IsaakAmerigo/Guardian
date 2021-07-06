import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { baseURL, config } from '../services';

function Form(props) {
const [topic, setTopic] = useState("");
const [message, setMessage] = useState("");
const [location, setLocation] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();

  const fields = {
    topic,
    message, 
    location,
  };
  props.setToggleFetch((curr) => !curr);

  await axios.post(baseURL, { fields }, config);
 }

  return (
<form onSubmit={handleSubmit}>

  <input id="topic" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} value={topic}/><br />
  
  <textarea id="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}><br />
    </textarea>

    <input type="name" id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/> <br />

  <button type="submit">👌🏻Share👌🏻</button>
</form>
  )
}

export default Form;