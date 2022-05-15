import arrowUp from "../assets/graphics/arrow-up.svg";
import arrowDown from "../assets/graphics/arrow-down.svg";
import { useDispatch } from "react-redux";

function OrderItem(props) {
  // const dispatchCoffeeAmount = useDispatch();

  return (
    <div className="order-menu flex">
      <div className="order-item">
        <h3>{props.item}</h3>
        <p> {props.price * props.amount}kr</p>
      </div>
      <div className="order-quantity">
        <h4>{props.amount}</h4>
      </div>
    </div>
  );
}
export default OrderItem;
