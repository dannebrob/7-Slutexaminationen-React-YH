import add from "../assets/graphics/add.svg";
import { useSelector, useDispatch } from "react-redux";

function DrinkItem(props) {
  const dispatchCoffee = useDispatch();

  // console.log("this is props: ", props);

  return (
    <div>
      <article>
        <div className="add">
          <img
            onClick={() => {
              dispatchCoffee({
                type: "ADD_COFFEE",
                payload: { item: props.title, price: props.price, amount: 1 },
              });
            }}
            src={add}
          />
        </div>
        <div className="coffe-info">
          <div className="title-and-price">
            <h1 className="title">{props.title}</h1>
            <h1 className="price">{props.price} kr</h1>
          </div>
          <p className="desctiption">{props.desc}</p>
        </div>
      </article>
    </div>
  );
}
{
  //TODO //
  // fix payload to drink, value, price
  // Add btn on cart page
  // set init to data from api, save to local storage? Show message to reload app?
  // css status, cart and error
}

export default DrinkItem;
