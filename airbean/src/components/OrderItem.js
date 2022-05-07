import arrowUp from "../assets/graphics/arrow-up.svg";
import arrowDown from "../assets/graphics/arrow-down.svg";

function OrderItem() {
  return (
    <div class="order-menu flex">
      <div class="order">
        <h3>Title</h3>
        <p> kr</p>
      </div>
      <div class="order-quantity">
        <img src={arrowUp} />
        <h4>1</h4>
        <img src={arrowDown} />
      </div>
    </div>
  );
}
export default OrderItem;
