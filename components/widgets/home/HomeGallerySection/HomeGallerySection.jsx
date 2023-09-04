import GalleryCard from "./components/GalleryCard"
import gallery from "@/data/gallery.json";
const HomeGallerySection = () => {
  return (
    <section>
        <h2></h2>
        {gallery.map(section=> <GalleryCard key={section.id} data={section}/>)}
    </section>
  )
}

export default HomeGallerySection