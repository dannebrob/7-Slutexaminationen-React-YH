import drone from "../assets/graphics/drone.svg";
import { useSelector } from "react-redux";

function Status() {
  const ordernumber = useSelector((state) => state.orderResponse.orderNumb);
  const eta = useSelector((state) => state.orderResponse.eta);

  return (
    <div className="status">
      <main>
        <div className="status-container">
          <p>#{ordernumber}</p>
          <img src={drone} alt={"this is a drone"} />
          <h2>Din Beställning är på väg!</h2>
          <h3>{eta}minuter</h3>

          <button>Ok, cool!</button>
        </div>
      </main>
    </div>
  );
}

export default Status;
