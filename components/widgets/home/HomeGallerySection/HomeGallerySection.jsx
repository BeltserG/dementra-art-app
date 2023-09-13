import GalleryCard from "./components/GalleryCard/GalleryCard";
import cl from "./styles/HomeGallerySection.module.scss";
import classNames from "classnames";

const HomeGallerySection = ({ gallery }) => {
  console.log(gallery);
  return (
    <section className={classNames(cl["gallery"])}>
      <h2 className={classNames(cl["gallery__heading"])}>Gallery</h2>
      <div className={classNames(cl["gallery__items-container"])}>
        {gallery.map((section) => (
          <GalleryCard key={section.id} data={section} />
        ))}
      </div>
    </section>
  );
};

export default HomeGallerySection;
