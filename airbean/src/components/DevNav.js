import { Link } from "react-router-dom";

function DevNav() {
  return (
    <nav>
      <Link to="/">Hem</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/Status">Status</Link>
      <Link to="/äasdkfsd">Error</Link>
    </nav>
  );
}

export default DevNav;
