import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import OrderItem from "../components/OrderItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const order = useSelector((state) => state.cart);
  const dispatchApi = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state);

  const sum = order.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

  function submitProducts() {
    fetch("http://localhost:5000/api/beans", {
      method: "POST",
      body: JSON.stringify(products),
    })
      .then((response) => response.json())
      .then((data) => {
        const returnedData = data;
        console.log(returnedData);
        navigate("/status", {
          state: {
            eta: data.eta,
            orderNr: data.orderNr,
          },
        });
        dispatchApi({ type: "FETCH_API_SUCCESS", payload: returnedData });
      });
  }

  const displayOrderItems = order.map((item) => {
    return (
      <OrderItem
        item={item.item}
        price={item.price}
        amount={item.amount}
        key={item.item}
      />
    );
  });

  return (
    <section>
      <header>
        <img alt={"some text"} src={headerImg}></img>
      </header>

      <main>
        <Link to="/menu">
          <button className="cart-btn">Go to Menu</button>
        </Link>
        <div className="order-container">
          <h1>Din Beställning</h1>
          {displayOrderItems}
          <h3>Total price: {sum} ink moms + drönar leverans</h3>
          <button onClick={submitProducts}>Take my money!</button>
        </div>
      </main>

      <footer>
        <img alt={"some text"} src={footerImg}></img>
      </footer>
    </section>
  );
}

export default Cart;
