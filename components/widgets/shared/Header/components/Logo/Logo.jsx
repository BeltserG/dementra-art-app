import classes from "@/components/widgets/shared/Header/styles/Header.module.scss";
import { logoScrollAnimation } from "../../anim/logo.js";
import { useEffect } from "react";
import Link from "next/link";

const Logo = () => {
  useEffect(() => {
    logoScrollAnimation(classes["logo-container"], classes["logo-container"]);
  }, []);

  // logoScroll(classes["logo-container"]);
  return (
    <div className={classes["logo-container"]}>
      <Link href={"/"}>
        <img src="/images/logo2.png" alt="logo" className={classes.logo} />
      </Link>
    </div>
  );
};

export default Logo;
