import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import OrderItem from "../components/OrderItem";
import MenuButton from "../components/MenuButton";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const order = useSelector((state) => state.cart);
  const dispatchApi = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state);
  const nummberSelector = useSelector((state) => state.cart);

  console.log(nummberSelector);
  const sum = order.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

  const numberOfOrders = nummberSelector.reduce((acc, object) => {
    return acc + object.amount;
  }, 0);

  function submitProducts() {
    fetch("http://localhost:5000/api/beans", {
      method: "POST",
      body: JSON.stringify(products),
    })
      .then((response) => response.json())
      .then((data) => {
        const returnedData = data;
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
        <MenuButton props={numberOfOrders} />
        <div className="order-container">
          <h1>Din Beställning</h1>
          {displayOrderItems}
          <div className="margin-top">
            <h3>Total price: {sum} kr</h3>
            <p>ink moms + drönar leverans</p>
          </div>

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
