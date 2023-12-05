import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function navScrollAnimation(className = ""){
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`.${className}`, {
    scrollTrigger:{
        trigger: `.${className}`,
        start: `top top`,
        end: `bottom -${window.innerHeight/2}px`,
        metrics: true,
        toggleActions: "play none reverse none",
        scrub:.5,
    },
    x: 60,
    y:-30,
    opacity: 0,
    ease: "linear",
    duration: .25});
}

export {navScrollAnimation}