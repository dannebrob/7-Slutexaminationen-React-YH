import ToMenu from "../components/ToMenu";
import left from "../assets/graphics/intro-graphic-left.svg";
import right from "../assets/graphics/intro-graphic-right.svg";
import logo from "../assets/graphics/airbean-landing.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
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
