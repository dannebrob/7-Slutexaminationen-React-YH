import ToMenu from "../components/ToMenu";
import left from "../assets/graphics/intro-graphic-left.svg";
import right from "../assets/graphics/intro-graphic-right.svg";
import logo from "../assets/graphics/airbean-landing.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1> Counter exampel: {counter}</h1>
      <button
        onClick={() => {
          dispatch(incrament());
        }}
      >
        INCRAMENT
      </button>
      <button
        onClick={() => {
          dispatch(decrament());
        }}
      >
        MINUS
      </button> */}
      <div className="flex">
        <img className="left-img" src={left}></img>
        <img className="right-img" src={right}></img>
        <div className="header">
          <Link to="/menu">
            <img src={logo} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
