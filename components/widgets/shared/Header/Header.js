import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import cl from "./styles/Header.module.scss";
import { useEffect } from "react";
import { navScrollAnimation } from "./anim/navScrollAnimation";

const Header = (props) => {

  // useEffect(() => {navScrollAnimation(cl["header__nav"])}, [])

  return (
    <header className={cl.header}>
      <Logo />
      <Navigation />
    </header>
  );
};
export default Header;