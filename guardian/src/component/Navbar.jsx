import { Link } from 'react-router-dom';

function Navbar() {

  return(
<nav >
  <Link class="grid-container" to="/guardian" > Guardian </Link>
  <Link to="/newKnow"> Knowledge </Link>
  <Link to="/Purpose"> Purpose </Link>
 
  
</nav>

  )
}

export default Navbar;