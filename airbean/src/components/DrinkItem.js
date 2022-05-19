import add from "../assets/graphics/add.svg";
import { useDispatch } from "react-redux";

function DrinkItem(props) {
  const dispatchCoffee = useDispatch();
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

export default DrinkItem;
