import  cl from "./styles/Hero.module.scss"
import classNames from "classnames"
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  // useEffect(() =>{
  //   gsap.from(`.${cl["hero__heading"]}`, { duration: 2.5, ease: "bounce.out", y: -500 })
  // }, [])
  return (
    <div className={classNames(cl["hero"])}>
      <h1 className={classNames(cl["hero__heading"])}>Welcome to Dementra World</h1>
      <img className={classNames(cl["hero__image"])} src="" alt="hero-image" />
    </div>
  )
}

export default Hero