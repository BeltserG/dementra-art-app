import Copyright from "./components/Copyright/Copyright";
import Logo from "./components/Logo/Logo";
import Contacts from "./components/Contacts/Contacts";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import classes from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
        <Contacts />
        <SocialNetworks />
      </div>
      <div>
        <Copyright />
      </div>
    </footer>
  );
};


export default Footer;
