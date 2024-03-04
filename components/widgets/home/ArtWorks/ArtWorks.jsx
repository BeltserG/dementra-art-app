import cl from "./styles/ArtWorks.module.scss";
import classNames from "classnames";
import { artWorksScrollAnimation } from "./anim/artWorksScroll";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const Artworks = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      artWorksScrollAnimation(cl["artworks"]);
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className={classNames(cl["artworks"])}>
      <div id="gallery" className={classNames(cl["gallery-nav-target"])}></div>
      <Image
        className={classNames(cl["artworks-background"], cl["back"])}
        alt="Image of the Dementra World"
        src={"/images/artworks_images/back.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "110%",
        }}
      />
      <Image
        className={classNames(cl["artworks-background"], cl["clouds"])}
        alt="Image of the Dementra World"
        src={"/images/artworks_images/clouds.png"}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        style={{
          width: "100%",
          height: "110%",
        }}
      />
      <div className={classNames(cl["portal-container"])}>
        <Image
          className={classNames(cl["portal"])}
          alt="Image of the Dementra World"
          src={"/images/artworks_images/portal_single.png"}
          sizes="100vw"
          width={0}
          height={0}
          quality={100}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className={classNames(cl["artworks__content"])}>
        <h2 className={classNames(cl["artworks__heading"])}>Gallery</h2>
      </div>
    </section>
  );
};

export default Artworks;
//1