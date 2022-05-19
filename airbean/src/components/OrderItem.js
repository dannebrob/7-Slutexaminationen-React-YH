function OrderItem(props) {
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
