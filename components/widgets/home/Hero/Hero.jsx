import  cl from "./styles/Hero.module.scss"
import classNames from "classnames"

const Hero = () => {
  return (
    <div className={classNames(cl["hero"])}>
      <h1 className={classNames(cl["hero__heading"])}>Welcome to Dementra World</h1>
      <img className={classNames(cl["hero__image"])} src="" alt="hero-image" />
    </div>
  )
}

export default Hero