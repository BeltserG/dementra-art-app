import cl from "./styles/LightBox.module.scss";
import classNames from "classnames";

const LightBox = ({sectionOpened, clickHandler}) => {
  return (
    <div className={classNames(cl["lightbox"], sectionOpened ? cl["active"] : "")}
         onClick={clickHandler ? clickHandler : ()=>{}}></div>
  )
}

export default LightBox