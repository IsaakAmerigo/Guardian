function Guide(props) {
const { topic, message, location } = props.guide.fields;

  return (
    <article>
<h3>{topic}</h3>
<h1>jdll</h1>

<p>{message}</p>

<p>{location}</p>
    </article>
  )
}

export default Guide;