import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cl from "../styles/StateMade.module.scss";

function stateMadeScrollAnimation(className = "") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`.${className}`, {
    scrollTrigger: {
      trigger: `.${className}`,
      start: `top bottom`,
      end: `top center`,
      metrics: true,
      toggleActions: "play none none none",
      // scrub:true,
    },
    opacity: 1,
    ease: "linear",
    duration: 1,
  });

  gsap.to(`.${cl["content__image-container"]}`, {
    scrollTrigger: {
      trigger: `.${className}`,
      start: `top bottom`,
      end: `top center`,
      metrics: true,
      toggleActions: "play none none none",
      // scrub:true,
    },
    scale: 1,
    ease: "linear",
    duration: 1,
  });
}

export { stateMadeScrollAnimation };
