import  cl from "./styles/Hero.module.scss"
import classNames from "classnames"
import gsap from "gsap";
import SplitType from 'split-type';
import { useEffect } from "react";

const Hero = () => {
  useEffect(() =>{
    let ctx = gsap.context(()=>{
      // gsap.from(`.${cl["hero__heading"]}`, { duration: 2, ease: "bounce.out", y: -500 })
      const headerText = new SplitType(`.${cl["hero__heading"]}`)
      document.querySelectorAll(".char").forEach(node=>node.style.transform="translateY(100px)");
      gsap.to(".char",{y:0, duration : .5, ease: "back", stagger:.025, delay: 0.1})
    });
    
    return () => ctx.revert()
  }, [])
  return (
    <div className={classNames(cl["hero"])}>
      <h1 className={classNames(cl["hero__heading"])}>Welcome to Dementra World</h1>
      {/* <img className={classNames(cl["hero__image"])} src="" alt="hero-image" /> */}
    </div>
  )
}

export default Hero