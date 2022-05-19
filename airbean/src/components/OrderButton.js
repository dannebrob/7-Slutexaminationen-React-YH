import bag from "../assets/graphics/bag.svg";
import { Link } from "react-router-dom";
import CartCount from "./CartCount";

function OrderButton(props) {
  return (
    <Link to="/cart">
      <div className="button">
        <CartCount props={props.props} />

        <img className="image-bag" src={bag}></img>
      </div>
    </Link>
  );
}

export default OrderButton;
