import cl from "@/components/widgets/shared/Footer/styles/Footer.module.scss";
import classNames from "classnames";
const Copyright = () => {
  const birthYear = 2023;
  const today = new Date().getFullYear();
  const dates = today - birthYear;
  const intervalText = dates === 0 ? birthYear : birthYear + " - " + today;
  return (
    <div className={classNames(cl["copyright-container"])}>
      @ {intervalText} Dementra, Developed by{" "}
      <a
        className={classNames(cl["developer-link"])}
        href="https://www.beltserg.dev/"
        target="blank"
      >
        Georgii Beltser
      </a>
    </div>
  );
};

export default Copyright;
