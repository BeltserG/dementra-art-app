import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stateMade from "../styles/StateMade.module.scss";

function stateMadeScrollAnimation(className = "") {
  // console.log(stateMade["gem-container"]);
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
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.to(`.${className}`, {
  //   scrollTrigger: {
  //     trigger: `.${className}`,
  //     start: `top bottom`,
  //     end: `top center`,
  //     metrics: true,
  //     toggleActions: "play none none none",
  //     // scrub:true,
  //   },
  //   opacity: 1,
  //   ease: "linear",
  //   duration: 1,
  // });
}

export { stateMadeScrollAnimation };
