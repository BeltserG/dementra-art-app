import classes from "@/components/widgets/shared/Header/styles/Header.module.scss";
import { logoScrollAnimation } from "../../anim/logo.js";
import { useEffect } from "react";
const Logo = () => {
  useEffect(() => {
    logoScrollAnimation(classes["logo-container"], classes["logo-container"]);
  }, [])
  
  // logoScroll(classes["logo-container"]);
  return (
    <div className={classes["logo-container"]}>
      <img src="" alt="logo"  className={classes.logo}/>
    </div>
  )
}

export default Logo