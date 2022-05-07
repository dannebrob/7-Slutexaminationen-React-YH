import headerImg from "../assets/graphics/graphics-header.svg";
import footerImg from "../assets/graphics/graphics-footer.svg";

import DrinkItem from "../components/DrinkItem";

function Menu(props) {
  // console.log(props.func);
  let clickFunction = props.func;
  let arr = props.data;

  const coffeElement = arr.map((item) => {
    return (
      <DrinkItem
        key={item.id}
        title={item.title}
        desc={item.desc}
        price={item.price}
        func={clickFunction}
        data={item.title}
      />
    );
  });

  return (
    <section>
      <header>
        <img alt={"some text"} src={headerImg}></img>
      </header>

      <main>
        <div className="title">
          <h1>Meny</h1>
        </div>
        <div className="menu-container">{coffeElement}</div>
      </main>

      <footer>
        <img alt={"some text"} src={footerImg}></img>
      </footer>
    </section>
  );
}

<style></style>;
export default Menu;
