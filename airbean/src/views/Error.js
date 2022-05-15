import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h2 className="error"> Sorry, we dont have any beans here...</h2>
      <h2>- Page not found -</h2>
      <Link to="/">
        <h1> Want back to landing page?</h1>
        <h1>...Just click me!</h1>
        <h1>🥤</h1>
      </Link>
    </div>
  );
}

export default Error;
