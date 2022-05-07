import add from "../assets/graphics/add.svg";

function DrinkItem(props) {
  // console.log(props);
  let data;
  return (
    <div>
      <article>
        <div className="add">
          <img
            onClick={() => {
              props.func(props.data);
            }}
            src={add}
          />
        </div>
        <div className="coffe-info">
          <div className="title-and-price">
            <h1>{props.title}</h1>
            <h1>{props.price} kr</h1>
          </div>
          <p>{props.desc}</p>
        </div>
      </article>
    </div>
  );
}

export default DrinkItem;
