import React from "react";
import Link from "next/link";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import NavigationSecond from "../NavigationSecond/NavigationSecond";

const NavItem = ({ item, changeNavOpened = null }) => {
  let route = useRouter().pathname;
  console.log(item)
  route = route.slice(route.lastIndexOf("/") + 1);
  console.log(route)
  if(route === ""){
    route = "home"
  }
  const underline = route === item ? cl["underlined"] : "";

  if (item === "gallery") {
    return (
      <div
        className={classNames(cl["nav__link"], cl["gallery"])}
        key={item}
        onClick={changeNavOpened}
      >
        <li key={item} className={cl["header__nav__list--item"]}>
          <NavigationSecond />
          {item}
        </li>
      </div>
    );
  }
  return (
    <Link
      className={classNames(cl["nav__link"])}
      key={item}
      href={getRoute(item)}
      onClick={changeNavOpened}
    >
      <li key={item} className={classNames(cl["header__nav__list--item"], underline)}>
        {item}
      </li>
    </Link>
  );
};

function getRoute(item) {
  return item === "home" ? "/" : "/" + item;
}

export default NavItem;
