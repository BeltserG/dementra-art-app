import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import classes from "./styles/Header.module.scss";

const Header = (props) => {
  console.log("rendering Header")
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
};
export default Header;