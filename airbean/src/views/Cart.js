import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import OrderItem from "../components/OrderItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const order = useSelector((state) => state.cart);
  const postApi = useSelector((state) => state.apiPost);
  console.log("this is postAPI", postApi);
  const dispatchApi = useDispatch();

  const sum = order.reduce((accumulator, object) => {
    return accumulator + object.price * object.amount;
  }, 0);

  let resAPI;

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

  const postOrder = () => {
    console.log("i have posted the order!");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };

    const response = fetch("http://localhost:5000/api/beans", requestOptions)
      .then((response) => response.json())
      .then((data) =>
        dispatchApi({ type: "FETCH_SUCCESS", payload: { data } })
      );

    //get data from response eta: '',  orderNr: ''
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
          {displayOrderItems}

          <h3>Total price: {sum} ink moms + drönar leverans</h3>
          <Link to="/status">
            <button>Take my money!</button> /*onClick=
          </Link>
        </div>
      </main>

      <footer>
        <img alt={"some text"} src={footerImg}></img>
      </footer>
    </section>
  );
}

export default Cart;

// useEffect(() => {

// }, [order]);
// useEffect(() => {
//   if(order){
//     //if order exists
//

//   }
// }
//     ,[order]

// useEffect(() => {
//   if (order) {
//     console.log("i useeffect", order);

//     return ''

//     // const results = Object.keys(order).map((coffee) => {
//     //   console.log("this is coffee in reslult map: ", coffee);
//     //   console.log("Object.values(coffee): ", Object.values(coffee));
//     //   return {
//         // key: coffee,
//         // value: order[coffee],
//         // setOrderList(results)
//       // };
//     });
// }, [order]);

// const list = orderList.map((obj) => {
//   return (
//     <div>
//       <h1>{obj.item}</h1>
//       <h1>{obj.value}</h1>
//       <h1>{obj.price}kr</h1>
//     </div>
//   );
// });
