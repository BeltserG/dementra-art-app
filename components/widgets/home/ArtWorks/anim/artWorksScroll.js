import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import artWorks from "../styles/ArtWorks.module.scss";

function artWorksScrollAnimation(className = "") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  const heading = document.querySelector(`.${artWorks["artworks__heading"]}`);
  gsap.from(heading, {
    scrollTrigger: {
      trigger: `.${className}`,
      start: "center bottom",
      end: "bottom bottom",
      scrub: true,
      pinSpacing: false,
      // markers: true,
    },
    opacity: 0
  });
  // console.log(artWorks["gem-container"]);
  // gsap.to(`.${artWorks["artWorks-gem"]}`, {
  //   y: "10%",
  //   yoyo: true,
  //   duration: 1,
  //   repeat: -1,
  //   ease: "power1.inOut",
  // });
  // gsap.to(`.${artWorks["sparkle-container"]}`, {
  //   opacity: .25,
  //   yoyo: true,
  //   duration: 1,
  //   repeat: -1,
  //   ease: "power4.inOut",
  //   stagger: .1,
  // });
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

export { artWorksScrollAnimation };
