import cl from "./styles/LightBox.module.scss";
import classNames from "classnames";

const LightBox = ({sectionIsOpened, clickHandler}) => {
  return (
    <div className={classNames(cl["lightbox"], sectionIsOpened ? cl["active"] : "")}
         onClick={clickHandler ? clickHandler : ()=>{}}></div>
  )
}

export default LightBox