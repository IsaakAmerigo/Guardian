import { Link } from 'react-router-dom';

function Navbar() {

  return(
<nav class="grid-container">
  <Link to="/guardian" > Guardian </Link>
  <Link to="/newKnow"> Knowledge </Link>
  <Link to="/Purpose"> Purpose </Link>
  <Link to="/newTool"> Tool </Link>
  
</nav>

  )
}

export default Navbar;