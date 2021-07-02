import { Link } from 'react-router-dom';

function Navbar() {

  return(
<nav>
  <Link to="/"> Guardian </Link>
  <Link to="/newKnow"> Knowledge </Link>
  <Link to="/Purpse"> Purpose </Link>
  <Link to="/newTool"> Tool </Link>
</nav>

  )
}

export default Navbar;