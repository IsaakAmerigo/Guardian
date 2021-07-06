import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";

function Tool(props) {
  const [tools, setTools] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const { topic, message, location } = props.tool.fields;
  const { setTopic, setMessage, setLocation } = props.tool.fields;


  const deleteTool = async () => {
    const toolURL = `${baseURL}/${props.tool.id}`;
    
    await axios.delete(toolURL, config);
    
    props.setToggleFetch((curr) => !curr);
    }


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
//     {tools.map((tool) => (
//       <Tool
//         key={tool.id}
//         tool={tool}
//         setToggleFetch={setToggleFetch}
//       />
//     ))}
// <Form setToggleFetch={setToggleFetch} />


    <article className="tools">
<h3>{topic}</h3>
<p>{message}</p>
<p>{location}</p>
<button onClick={deleteTool}>Frank Castle</button>

    <form onSubmit={handleSubmit}>
      <input id="topic" type="text" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} value={topic}/>
      
      <textarea id="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}>
        </textarea>
    
        <input type="name" id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>
    
      <button type="submit">👌🏻Share👌🏻</button>
    </form>
    </article>

  )
}

export default Tool;