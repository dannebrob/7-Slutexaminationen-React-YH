import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import { Link } from "react-router-dom";
import OrderButton from "../components/OrderButton";
import { useSelector } from "react-redux";

import DrinkItem from "../components/DrinkItem";

function Menu(props) {
  const nummberSelector = useSelector((state) => state.cart);
  let items = props.data;

  const numberOfOrders = nummberSelector.reduce((acc, object) => {
    console.log(acc + object.amount);
    return acc + object.amount;
  }, 0);

  const coffeElement = items.map((item) => {
    return (
      <DrinkItem
        key={item.id}
        title={item.title}
        desc={item.desc}
        price={item.price}
        data={item.title}
      />
    );
  });

  return (
    <section className="menu">
      <header>
        <img alt={"some text"} src={headerImg}></img>
      </header>

      <main>
        <OrderButton props={numberOfOrders} />
        <div className="menu-title">
          <h1>Meny</h1>
          {coffeElement}
        </div>
      </main>

      <footer>
        <img alt={"some text"} src={footerImg}></img>
      </footer>
    </section>
  );
}

<style></style>;
export default Menu;
