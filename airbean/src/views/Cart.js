import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";
import OrderItem from "../components/OrderItem";

function Cart(props) {
  console.log(props);

  let newCart = props.filter();
  return (
    <section>
      <header>
        <img alt={"some text"} src={headerImg}></img>
      </header>

      <main>
        <div className="order-container">
          <h1>Din Beställning</h1>
          {/*Map over order*/}

          <OrderItem />

          <h3>Total price: XX</h3>
        </div>

        {/*cart item: title, total sum, numb of items of sort*/}
        {/*Total price, 'ink moms + drönar leverans*/}
      </main>

      <footer>
        <img alt={"some text"} src={footerImg}></img>
      </footer>
    </section>
  );
}

export default Cart;
