import { useState, useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import LightBox from "@/components/widgets/shared/Header/components/LightBox/LightBox";
import Hamburger from "../Hamburger/Hamburger.jsx";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import { navScrollAnimation } from "../../anim/navScrollAnimation.js";

const Navigation = () => {
  const list = ["home", "gallery", "biography", "contacts"];

useEffect(() => {
  if(window.innerWidth > 600){
    navScrollAnimation(cl["header__nav"])
  }
},[])

  const [navOpened, setNavOpened] = useState(false);
  function changeNavOpened() {
    setNavOpened((prev) => !prev);
  }

  return (
    <>
      <LightBox navOpened={navOpened} changeNavOpened={changeNavOpened}/>
      <nav className={cl["header__nav"]}>
        <Hamburger navOpened={navOpened} changeNavOpened={changeNavOpened} />
        <ul
          className={classNames(
            cl["header__nav__list"],
            navOpened ? cl["opened"] : cl["closed"]
          )}
        >
          {list.map((item) => {
            return (
              <Link key={item} href={item === "home" ? "/" : "/" + item} onClick={changeNavOpened}>
                <li key={item} className={cl["header__nav__list--item"]}>
                  {item}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
