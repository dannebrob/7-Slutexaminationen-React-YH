import drone from "../assets/graphics/drone.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Status() {
  const emptyCartDispatch = useDispatch({ type: "EMPTY_CART" });
  const ordernumber = useSelector((state) => state.orderResponse.orderNumb);
  const eta = useSelector((state) => state.orderResponse.eta);

  return (
    <div className="status">
      <main>
        <div className="status-container">
          <p>Ordernummer: #{ordernumber}</p>
          <img src={drone} alt={"this is a drone"} />
          <h2>Din Beställning är på väg!</h2>
          <h3>{eta} minuter</h3>
          <Link to="/" onClick={emptyCartDispatch}>
            <button>Ok, cool!</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Status;
