import cl from "./styles/GalleryCard.module.scss";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const GalleryCard = ({ data }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useEffect(() => {
    window.innerWidth < 600 ? setIsSmallScreen(true) : setIsSmallScreen(false);
  }, []);

  console.log(data);

  return (
    <div className={classNames(cl["gallery__item"])}>
      {isSmallScreen && (
        <h3 className={classNames(cl["gallery__item--heading"])}>{data.id}</h3>
      )}
      
        <div className={classNames(cl["gallery__item--image-container"])}>
        <Link href={"/" + data.id}>
          <Image
            className={classNames(cl["gallery__item--image"])}
            src={data.thumbnail}
            alt={data.id}
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              // objecFit: "cover",
              // objectPosition: "50 % 50%",
              // overflow: "hidden",
            }}
          />
          </Link>
        </div>
      <div className={classNames(cl["gallery__item--info-container"])}>
        {!isSmallScreen && (
          <h3 className={classNames(cl["gallery__item--heading"])}>
            {data.id}
          </h3>
        )}

        <p className={classNames(cl["gallery__item--text"])}>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
