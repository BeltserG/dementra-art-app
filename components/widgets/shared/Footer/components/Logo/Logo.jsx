import cl from "@/components/widgets/shared/Footer/styles/Footer.module.scss";
import classNames from "classnames";
const Logo = () => {
  return (
    <div className={classNames(cl["footer-info__logo"])}>
      <img className={classNames(cl["logo--image"])} src="" alt="logo" />
      <div className={classNames(cl["logo--email"])}>
        <p>Contact:<span></span></p>
      </div>
    </div>
  )
}

export default Logo