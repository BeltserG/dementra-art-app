import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import NavigationSecond from "../NavigationSecond/NavigationSecond";
import { GalleryIsClickedContext } from "../../context/galleryIsClickedContext";

const NavItem = ({ item, changeNavOpened }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [secondLayerisVisible, setSecondLayerIsVisible] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const isMobile = windowWidth < 600;

  let route = useRouter().pathname;
  route = route.slice(route.lastIndexOf("/") + 1);
  if (route === "") {
    route = "home";
  }
  const underline = route === item ? cl["underlined"] : "";

  const { setGalleryIsClicked } = useContext(GalleryIsClickedContext);

  // if (item === "gallery") {
  //   return (
  //     // <Link
  //     //   className={classNames(cl["nav__link"])}
  //     //   key={item}
  //     //   href={getRoute(item)}
  //     //   onClick={isMobile ? changeNavOpened : () => {}}
  //     // >
  //     <li
  //       className={classNames(cl["nav__link"], cl["gallery"])}
  //       key={item}
  //       onMouseEnter={() => {
  //         setSecondLayerIsVisible(true);
  //         setGalleryIsClicked(false);
  //       }}
  //       onMouseLeave={() => setSecondLayerIsVisible(false)}
  //     >
  //       <div key={item} className={cl["header__nav__list--item"]}>
  //         <NavigationSecond
  //           isVisible={secondLayerisVisible}
  //           changeNavOpened={isMobile ? changeNavOpened : () => {}}
  //         />
  //         {item}
  //       </div>
  //     </li>
  //     // {/* </Link> */}
  //   );
  // }
  return (
    <Link
      className={classNames(cl["nav__link"])}
      key={item}
      href={getRoute(item)}
      onClick={isMobile ? changeNavOpened : () => {}}
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
  return item === "home" ? "/" : "/#" + item;
}

export default NavItem;
