import Hero from "@/components/widgets/home/Hero/Hero";
import HomeGallerySection from "@/components/widgets/home/HomeGallerySection/HomeGallerySection";
import StateMade from "@/components/widgets/home/StateMade/StateMade";
const Mainpage = (props) => {
  return (
    <>
      <Hero />
      <StateMade />
      <HomeGallerySection />
    </>
  );
};

export default Mainpage;
