import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stateMade from "../styles/StateMade.module.scss";

function stateMadeScrollAnimation(className = "") {
  // console.log(stateMade["gem-container"]);
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const state = document.querySelector(`.${stateMade["statemade"]}`);
  console.log(state)
    gsap.to(state, {
    scrollTrigger: {
      trigger: `.${className}`,
      start: "top top",
      end: "bottom top",
      scrub: .05,
      pinSpacing: false,
    },
    y: "30vh"
  });
  gsap.to(`.${stateMade["statemade-gem"]}`, {
    y: "10%",
    yoyo: true,
    duration: 1,
    repeat: -1,
    ease: "power1.inOut",
  });
  gsap.to(`.${stateMade["sparkle-container"]}`, {
    opacity: .25,
    yoyo: true,
    duration: 1,
    repeat: -1,
    ease: "power4.inOut",
    stagger: .1,
  });

}

export { stateMadeScrollAnimation };
