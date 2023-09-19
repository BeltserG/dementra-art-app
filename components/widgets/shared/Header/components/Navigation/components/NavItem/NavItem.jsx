import { useEffect, useState } from "react";
import Link from "next/link";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import NavigationSecond from "../NavigationSecond/NavigationSecond";
import { GalleryIsClickedContext } from "../../context/galleryIsClickedContext";
import { useContext } from "react";

const NavItem = ({ item, changeNavOpened }) => {
  let route = useRouter().pathname;
  route = route.slice(route.lastIndexOf("/") + 1);
  if (route === "") {
    route = "home";
  }
  const underline = route === item ? cl["underlined"] : "";

  const {setGalleryIsClicked} = useContext(GalleryIsClickedContext);

  if (item === "gallery") {
    return (
      <div
        className={classNames(cl["nav__link"], cl["gallery"])}
        key={item}
        
        onMouseEnter={()=>setGalleryIsClicked(false)}
      >
        <li key={item} className={cl["header__nav__list--item"]}>
          <NavigationSecond
          changeNavOpened={changeNavOpened}
          />
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
      <li
        key={item}
        className={classNames(cl["header__nav__list--item"], underline)}
      >
        {item}
      </li>
    </Link>
  );
};

function getRoute(item) {
  return item === "home" ? "/" : "/" + item;
}

export default NavItem;