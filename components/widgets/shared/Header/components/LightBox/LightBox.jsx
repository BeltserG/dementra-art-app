import cl from "./styles/LightBox.module.scss";
import classNames from "classnames";

const LightBox = ({navOpened, changeNavOpened}) => {
  return (
    <div className={classNames(cl["lightbox"], navOpened ? cl["active"] : "")}
         onClick={()=> changeNavOpened()}></div>
  )
}

export default LightBox