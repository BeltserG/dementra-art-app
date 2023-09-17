import cl from "./styles/StateMade.module.scss"
import classNames from "classnames";
import { stateMadeScrollAnimation } from "./anim/stateMadeScroll";
import { useEffect } from "react";
const StateMade = ({biography}) => {
  useEffect(() => stateMadeScrollAnimation(cl["state-made"]), []);
  return (
    <section className={classNames(cl["state-made"])}>
      <h2 className={classNames(cl["state-made__heading"])}>{biography.heading}</h2>
      <div className={classNames(cl["state-made__content"])}>
        <div className={classNames(cl["content__image-container"])}>
          <img className={classNames(cl["content__image"])} src="" alt="portrait" />
        </div>
        <div className={classNames(cl["content__text-container"])}>
          <p className={classNames(cl["content__text"])}>{biography.description}</p>
        </div>
      </div>
    </section>
  );
};

export default StateMade;
