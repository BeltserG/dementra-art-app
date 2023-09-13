import cl from "./styles/GalleryCard.module.scss";
import classNames from "classnames";
import Link from "next/link";
const GalleryCard = ({ data }) => {
  return (
    <div className={classNames(cl["gallery__item"])}>
      <h3 className={classNames(cl["gallery__item--heading"])}>{data.id}</h3>
      <Link href={"/"+ data.id}>
        <img
          className={classNames(cl["gallery__item--image"])}
          src=""
          alt={data.id}
        />
      </Link>
      <p className={classNames(cl["gallery__item--text"])}>
        {data.description}
      </p>
    </div>
  );
};

export default GalleryCard;