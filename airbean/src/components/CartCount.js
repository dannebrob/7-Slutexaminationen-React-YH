function CartCount(props) {
  console.log(props.props);
  return props.props < 1 ? (
    <div></div>
  ) : (
    <div className="cart-count">{props.props}</div>
  );
}

export default CartCount;
