import cl from "./styles/Hero.module.scss";
import classNames from "classnames";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(`.${cl["hero__heading"]}`, { duration: 2, ease: "bounce.out", y: -500 })
      const headerText = new SplitType(`.${cl["hero__heading"]}`);
      document
        .querySelectorAll(".char")
        .forEach((node) => (node.style.transform = "translateY(100px)"));
      gsap.to(".char", {
        y: 0,
        duration: 0.5,
        ease: "back",
        stagger: 0.025,
        delay: 0.1,
      });
      // console.log(window.innerHeight, window.innerWidth)
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className={classNames(cl["hero"])}>
      <Image
        className={classNames(cl["hero-background"])}
        alt="Image of the Dementra World"
        src={"/images/hero_images/night_image_green.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "100%"
        }}
        // unoptimized={true}
        priority
      />
      <h1 className={classNames(cl["hero__heading"])}>
        Welcome to Dementra World
      </h1>
      {/* <img className={classNames(cl["hero__image"])} src="" alt="hero-image" /> */}
    </div>
  );
};

export default Hero;
