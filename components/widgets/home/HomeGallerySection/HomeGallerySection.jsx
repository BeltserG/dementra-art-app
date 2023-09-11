import GalleryCard from "./components/GalleryCard/GalleryCard"
import gallery from "@/data/gallery.json";
import cl from "./styles/HomeGallerySection.module.scss"
import classNames from "classnames";

const HomeGallerySection = () => {
  return (
    <section>
        <h2></h2>
        {gallery.map(section=> <GalleryCard key={section.id} data={section}/>)}
    </section>
  )
}

export default HomeGallerySection