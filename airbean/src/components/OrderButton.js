import bag from "../assets/graphics/bag.svg";
import { Link } from "react-router-dom";

function OrderButton() {
  return (
    <Link to="/cart">
    <div className="button"> 
    <img className="image-bag" src={bag}></img>

    </div>
    </Link>
  );
}

export default OrderButton;
