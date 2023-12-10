import cl from "./styles/StateMade.module.scss";
import classNames from "classnames";
import { stateMadeScrollAnimation } from "./anim/stateMadeScroll";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
const StateMade = ({ biography }) => {
  useEffect(() => {
    stateMadeScrollAnimation(cl["statemade"]);
  }, []);
  return (
    <section id="biography" className={classNames(cl["statemade"])}>
      <Image
        className={classNames(cl["statemade-background"])}
        alt="Image of the Dementra World"
        src={"/images/statemade_images/back_empty2.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "118%",
        }}
      />
      <div className={classNames(cl["state-made__content"])}>
        <h2 className={classNames(cl["state-made__heading"])}>
          {biography.heading}
        </h2>
        <p className={classNames(cl["content__text"])}>
          {"\t" + biography.description}
        </p>
      </div>
      <div className={classNames(cl["gem-container"])}>
        <Image
          className={classNames(cl["statemade-gem"])}
          alt="Gem of The Art"
          src={"/images/statemade_images/gem.png"}
          sizes="100vw"
          width={0}
          height={0}
          quality={100}
          style={{
            width: "90%",
            height: "auto",
          }}
        />
        <div className={classNames(cl["sparkles"])}>
          <div className={classNames(cl["sparkle-container"], cl["large"], cl["first"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["large"], cl["second"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["large"], cl["third"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["medium"], cl["first"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["medium"], cl["second"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["medium"], cl["third"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["small"], cl["first"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["small"], cl["second"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classNames(cl["sparkle-container"], cl["small"], cl["third"])}>
            <Image
              className={classNames(cl["sparkle"])}
              alt="Sparkle"
              src={"/images/statemade_images/sparkle.png"}
              sizes="10vw"
              width={0}
              height={0}
              quality={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateMade;
