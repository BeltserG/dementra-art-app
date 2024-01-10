import classes from "@/components/widgets/shared/Header/styles/Header.module.scss";
import { logoScrollAnimation } from "../../anim/logo.js";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image.js";

const Logo = () => {
  useEffect(() => {
    logoScrollAnimation(classes["logo-container"]);
  }, []);

  // logoScroll(classes["logo-container"]);
  return (
    <div className={classes["logo-container"]}>
      <Link href={"/"}>
        <img src="/images/logo2.png" alt="logo" className={classes.logo} />
        {/* <Image
        className={classes.logo}
        alt="Dementra Art Logo"
        src={"/images/logo2.png"}
        sizes="50vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "auto",
        }}
        priority
      /> */}
      </Link>
    </div>
  );
};

export default Logo;
