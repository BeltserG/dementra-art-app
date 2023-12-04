import cl from "@/components/widgets/shared/Footer/styles/Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
const Logo = () => {
  return (
    <>
      <div className={classNames(cl["footer__logo"])}>
        <img className={classNames(cl["logo--image"])} src="/images/logo_small.png" alt="logo" />
      </div>
      {/* <div className={classNames(cl["footer__email"])}>
        <h5>Contact:</h5>
        <address>dementra@gmail.com</address>
      </div> */}
    </>
  );
};

export default Logo;
