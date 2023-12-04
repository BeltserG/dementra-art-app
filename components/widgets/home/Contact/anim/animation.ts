// import main from "@/layout/styles/MainLayout.module.scss";
import contact from "@/components/widgets/home/Contact/styles/Contact.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function contactAnimation() {
  //normalize scroll for safari
  // ScrollTrigger.normalizeScroll({target: `.${main["main-container"]}`,  allowNestedScroll: true});
  //normalize scroll for safari
  // gsap.registerPlugin(ScrollTrigger);
  // const contactSection = document.querySelector(`.${contact["contact"]}`);
  // const mainSection = document.querySelector(`.${main["main-container"]}`);

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: contactSection,
  //     scroller: mainSection,
  //     start: "top top",
  //     end: "center top",
  //     toggleActions: "play none none reverse",
  //     scrub: true,
  //     pin: true,
  //   },
  // });

  // tl.from(contactSection, { opacity: 0, duration: .5 });
}

export { contactAnimation };
