import cl from "./styles/StateMade.module.scss";
import classNames from "classnames";
import { stateMadeScrollAnimation } from "./anim/stateMadeScroll";
import { useEffect } from "react";
import gsap from "gsap";
const StateMade = ({ biography }) => {
  useEffect(() => {
    stateMadeScrollAnimation(cl["state-made"]);
  }, []);
  return (
    <section id="biography" className={classNames(cl["state-made"])}>
      <h2 className={classNames(cl["state-made__heading"])}>
        {biography.heading}
      </h2>
      {/* <div className={classNames(cl["heading__underline"])}>
        <svg
          viewBox="0 0 380 28"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <path
            className="heading__underline"
            d="M658.96941,402.11823c4.49262-26.95571,52.41355,5.24869,63.03895,8.20019c7.8275,2.17431,19.66657,2.16918,27.67564,1.02502c25.27744-3.61106,48.43567-17.68118,75.33923-13.83782c22.48583,3.21226,26.62725,17.42663,55.86379,15.88786c23.38916-1.23101,37.18327-16.20596,57.91383-17.4254c31.19129-1.83478,61.5941,21.73541,90.71459,7.17516"
            transform="translate(-654.242425-388.526168)"
            fill="none"
            stroke="#226118"
            strokeWidth="3.84"
          />
        </svg>
      </div> */}
      <div className={classNames(cl["state-made__content"])}>
        {/* <div className={classNames(cl["content__image-container"])}>
          <img
            className={classNames(cl["content__image"])}
            src=""
            alt="portrait"
          />
        </div> */}
        <div className={classNames(cl["content__text-container"])}>
          <p className={classNames(cl["content__text"])}>
            {"\t" + biography.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StateMade;
