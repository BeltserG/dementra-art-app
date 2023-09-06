import cl from "./styles/Hamburger.module.scss";
import classNames from "classnames";
const Hamburger = ({navOpened, changeNavOpened}) => {
  return (
    <button className={classNames(cl["mob-nav-button"], navOpened ? cl["opened"] : cl["closed"])} 
            onClick={()=> changeNavOpened()}>
      <svg viewBox="0 0 100 100">
        <rect
          className={classNames(cl["line"], cl["top"])}
          width="80"
          height="10"
          y="25"
          x="10"
          rx="5"
        ></rect>
        <rect
          className={classNames(cl["line"], cl["middle"])}
          width="80"
          height="10"
          y="45"
          x="10"
          rx="5"
        ></rect>
        <rect
          className={classNames(cl["line"], cl["bottom"])}
          width="80"
          height="10"
          y="65"
          x="10"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
};

export default Hamburger;
