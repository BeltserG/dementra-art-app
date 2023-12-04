import NavItem2 from "./components/NavItem2";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from "classnames";
import { GalleryIsClickedContext } from "../../context/galleryIsClickedContext";
import { useContext, useRef, useEffect} from "react";

const NavigationSecond = ({ changeNavOpened, setSectionIsClicked, isVisible}) => {
  const { galleryIsClicked, setGalleryIsClicked } = useContext(
    GalleryIsClickedContext
  );
  const galleryRef = useRef();
  const navListSecond = ["digital-art"];
  return (
    <ul
      ref={galleryRef}
      className={classNames(
        cl["header__nav__list2"],
        galleryIsClicked ? cl["header__nav__list2-clicked"] : "",
        isVisible ? cl["nav__list2--hovered"] : "",
      )}
      onClick={() => {
        changeNavOpened();
        setGalleryIsClicked(true);
      }}
      // onTouchStart={() => {
      //   changeNavOpened();
      //   setGalleryIsClicked(true);
      // }}
    >
      {navListSecond.map((item) => (
        <NavItem2 key={item} item={item} />
      ))}
    </ul>
  );
};

export default NavigationSecond;
