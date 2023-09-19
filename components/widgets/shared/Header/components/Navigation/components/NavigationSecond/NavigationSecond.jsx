import NavItem2 from "./components/NavItem2";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from "classnames";
import { GalleryIsClickedContext } from "../../context/galleryIsClickedContext";
import { useContext } from "react";

const NavigationSecond = ({ changeNavOpened, setSectionIsClicked }) => {
  const { galleryIsClicked, setGalleryIsClicked } = useContext(
    GalleryIsClickedContext
  );
  const navListSecond = ["digital-art", "oil-painting", "glass-art"];
  return (
    <ul
      className={classNames(
        cl["header__nav__list2"],
        galleryIsClicked ? cl["header__nav__list2-clicked"] : ""
      )}
      onClick={() => {
        changeNavOpened();
        setGalleryIsClicked(true);
      }}
    >
      {navListSecond.map((item) => (
        <NavItem2 key={item} item={item} />
      ))}
    </ul>
  );
};

export default NavigationSecond;
