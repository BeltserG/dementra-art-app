import heroCL from "../styles/Hero.module.scss";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function heroAnimation() {
  const headerText = new SplitType(`.${heroCL["hero__heading"]}`);
  document
    .querySelectorAll(".char")
    .forEach((node) => (node.style.transform = "translateY(100px)"));
    gsap.set(".char", {opacity: 0});
    gsap.set(`.${heroCL["hero__heading"]}`, {autoAlpha: 1});
    gsap.to(".char", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "back",
    stagger: 0.02,
    delay: .75,
  });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ignoreMobileResize: true});
  const hero = document.querySelector(`.${heroCL["hero"]}`);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.25,
      pin: true,
      pinSpacing: false,
      //   markers: true,
    },
  });
  //   const arr = Array.from(bgImages);
  //   console.log(arr);
  //   arr.map((node, index)=>{
  //     tl.to(node, { y: `${25+5*(index)}vh` }, "<");
  //   })
  tl.to(
    hero.querySelector(`.${heroCL["hero__heading"]}`),
    { opacity: 0, duration: 0.1 },
    0
  );
  tl.to(hero.querySelector(`.${heroCL["sky"]}`), { y: "-5vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["clouds"]}`), { y: "-10vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["mountains"]}`), { y: "-15vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["wind"]}`), { y: "-20vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["fog1"]}`), { y: "-25vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["water"]}`), { y: "-30vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["fog2"]}`), { y: "-30vh" }, 0);
  tl.to(hero.querySelector(`.${heroCL["trees"]}`), { y: "-40vh" }, 0);
}

export default heroAnimation;
