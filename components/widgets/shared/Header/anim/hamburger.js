import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function hamburgerScrollAnimation(className = ""){
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`.${className}`, {
    scrollTrigger:{
        trigger: `.${className}`,
        start: `top top`,
        end: `bottom center`,
        metrics: true,
        toggleActions: "play none reverse none",
        scrub:.5,
    },
    x: 60,
    y:-30,
    opacity: 0,
    ease: "linear",
    duration: .15});
}

export {hamburgerScrollAnimation}