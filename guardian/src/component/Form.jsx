import axios from 'axios';
import { baseURL, config } from '../services';
import {  useState } from 'react';


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
  <div class="form">

    <form class="box" onSubmit={handleSubmit}>

  <input  id="topic" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} value={topic}/> <br/>

  <textarea  id="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}>
    </textarea> <br/>

    <input  type="name" id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>  

  <button type="submit">👌🏻Share👌🏻</button>
</form>
  </div>
  )
}

export default Form;