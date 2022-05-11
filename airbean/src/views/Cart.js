import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import OrderItem from "../components/OrderItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  // console.log("this is cart props: ", props);
  const [orderList, setOrderList] = useState([]);
  console.log(orderList);

  const order = useSelector((state) => state.cart);
  console.log("this is order: ", order);
  console.log("sprida ut order", ...order);

  useEffect(() => {
    if (order) {
      console.log("i useeffect", order);
      const results = Object.keys(order).map((coffee) => {
        console.log("this is coffee in reslult map: ", coffee);
        console.log("Object.values(coffee): ", Object.values(coffee));
        return {
          // key: coffee,
          // value: order[coffee],
          // setOrderList(results)
        };
      });
    }
  }, [order]);

  const list = orderList.map((obj) => {
    return (
      <div>
        <h1>{obj.item}</h1>
        <h1>{obj.value}</h1>
        <h1>{obj.price}kr</h1>
      </div>
    );
  });

  const postOrder = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };

    const response = fetch(
      "http://localhost:5000/api/beans",
      requestOptions
    ).then((response) => response.json());

    //get data from response eta: '',  orderNr: ''

    console.log(response);
  };

  return (
    <section>
      <header>
        <img alt={"some text"} src={headerImg}></img>
      </header>

      <main>
        <Link to="/menu">
          <button>Go to Menu</button>
        </Link>
        <div className="order-container">
          <h1>Din Beställning</h1>
          {/*Map over order*/}
          {list}

          <h3>Total price: XX</h3>
          <Link to="/status">
            <button onClick={postOrder}>Take my money!</button>
          </Link>
        </div>

        {/*cart item: title, total sum, numb of items of sort*/}
        {/*Total price, 'ink moms + drönar leverans*/}
      </main>

      <footer>
        <img alt={"some text"} src={footerImg}></img>
      </footer>
    </section>
  );
}

export default Cart;
