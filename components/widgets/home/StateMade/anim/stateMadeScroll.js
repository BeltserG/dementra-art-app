import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function stateMadeScrollAnimation(className = ""){
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(`.${className}`, {
    scrollTrigger:{
        trigger: `.${className}`,
        
        start: `top bottom`,
        end: `bottom top`,
        metrics: true,
        toggleActions: "play none none none",
        scrub:true,
    },
    opacity: 1,
    // ease: "linear",
    duration: 1});
}

export {stateMadeScrollAnimation}