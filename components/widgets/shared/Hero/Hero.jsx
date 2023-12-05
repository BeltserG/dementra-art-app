import cl from "./styles/Hero.module.scss";
import classNames from "classnames";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import heroAnimation from "./anim/heroAnimation";

const Hero = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(`.${cl["hero__heading"]}`, { duration: 2, ease: "bounce.out", y: -500 })
      heroAnimation();
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className={classNames(cl["hero"])}>
      {/* <Image
        className={classNames(cl["hero-background"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/night_image_green.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
        priority
      /> */}
      <Image
        className={classNames(cl["hero-background"], cl["sky"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/1.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["clouds"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/2.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["mountains"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/3.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["wind"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/4.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["fog1"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/5.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["water"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/6.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["fog2"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/7.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        className={classNames(cl["hero-background"], cl["trees"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/parallax/8.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <h1 className={classNames(cl["hero__heading"])}>
        Welcome to Dementra World
      </h1>
      {/* <img className={classNames(cl["hero__image"])} src="" alt="hero-image" /> */}
    </div>
  );
};

export default Hero;
