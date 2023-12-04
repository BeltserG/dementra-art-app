import cl from "./styles/LightBox.module.scss";
import classNames from "classnames";

const LightBox = ({sectionIsOpened, clickHandler}) => {
  return (
    <div className={classNames(cl["lightbox"], sectionIsOpened ? cl["active"] : "")}
         onClick={clickHandler ? clickHandler : ()=>{console.log("click")}}></div>
  )
}

export default LightBox