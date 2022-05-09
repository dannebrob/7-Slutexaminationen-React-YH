import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import OrderItem from "../components/OrderItem";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Cart(props) {
  const [orderList, setOrderList] = useState([]);

  const order = useSelector((state) => state.order);
  // console.log(props);

  useEffect(() => {
    if (order) {
      console.log("i useeffect", order);
      const results = Object.keys(order).map((coffee) => {
        return {
          key: coffee,
          value: order[coffee],
          price: "??kr",
        };
      });
      setOrderList(results);
    }
  }, [order]);

  const list = orderList.map((obj) => {
    return (
      <div>
        <h1>{obj.key}</h1>
        <h1>{obj.value}</h1>
      </div>
    );
  });

  //
  return (
    <section>
      <header>
        <img alt={"some text"} src={headerImg}></img>
      </header>

      <main>
        <div className="order-container">
          <h1>Din Beställning</h1>
          {/*Map over order*/}
          {list}

          <h3>Total price: XX</h3>
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
