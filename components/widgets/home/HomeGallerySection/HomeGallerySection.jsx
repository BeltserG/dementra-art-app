import GalleryCard from "./components/GalleryCard"
import gallery from "@/data/gallery.json";
const HomeGallerySection = () => {
  console.log(gallery)
  return (
    <section>
        <h2></h2>
        {gallery.map(section=> <GalleryCard data={section}/>)}
    </section>
  )
}

export default HomeGallerySection