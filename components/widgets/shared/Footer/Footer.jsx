import Copyright from "./components/Copyright/Copyright";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import cl from "./styles/Footer.module.scss";
import classNames from "classnames";

const Footer = ({pageProps}) => {
  const {socialNetworks} = pageProps;
  return (
    <footer className={classNames(cl["footer"])}>
      {/* <div className={classNames(cl["footer-info-container"])}> */}
        <Logo />
        
        <Menu />
        <SocialNetworks socialNetworks={socialNetworks}/>
        
      {/* </div> */}
      <div className={classNames(cl["footer-copyright-container"])}>
        <Copyright />
      </div>
    </footer>
  );
};


export default Footer;