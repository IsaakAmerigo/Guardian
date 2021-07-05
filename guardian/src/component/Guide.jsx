// import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Guide(props) {
const { topic, message, location } = props.guide.fields;

const deleteGuide = async () => {
const guideURL = `${baseURL}/${props.guide.id}`;

await axios.delete(guideURL, config);

props.setToggleFetch((curr) => !curr);
}

  return (
    <article>
<h3>{topic}</h3>
<p>{message}</p>
<p>{location}</p>
<button onClick={deleteGuide}>Frank Castle</button>

    </article>
  )
}

export default Guide;