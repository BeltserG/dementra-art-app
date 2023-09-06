import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import LightBox from "@/components/widgets/shared/Header/components/LightBox/LightBox";
import Hamburger from "../Hamburger/Hamburger.jsx";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";

const Navigation = () => {
  const list = ["home", "gallery", "biography", "contacts"];

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
              <Link key={item} href={item === "home" ? "/" : "/" + item}>
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
