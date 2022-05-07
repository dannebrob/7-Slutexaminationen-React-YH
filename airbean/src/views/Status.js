import drone from "../assets/graphics/drone.svg";

function Status() {
  return (
    <div className="status">
      <main>
        <div className="status-container">
          <p>Order nummer: #XXXXXXXX</p>
          <img src={drone} alt={"this is a drone"} />
          <h2>Din Beställning är på väg!</h2>
          <h3>13 minuter</h3>

          <button>Ok, cool!</button>
        </div>
      </main>
    </div>
  );
}

export default Status;
