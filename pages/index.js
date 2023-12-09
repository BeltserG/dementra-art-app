import Hero from "@/components/widgets/shared/Hero/Hero";
import HomeGallerySection from "@/components/widgets/home/HomeGallerySection/HomeGallerySection";
import StateMade from "@/components/widgets/home/StateMade/StateMade";
import Contact from "@/components/widgets/home/Contact/Contact";
import { useState } from "react";
import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
const Mainpage = (props) => {
  return (
    <>
      <Hero />
      {/* <StateMade biography={props.biography} /> */}
      {/* <HomeGallerySection gallery={props.gallery}/> */}
      {/* <Contact /> */}
    </>
  );
};

export async function getStaticProps(context) {
  const dataNames = ["socialNetworks", "gallery", "biography"];
  const data = getStaticPropsFromJSON(dataNames);
  return {
    props: {
      ...data,
    },
  };
}

export default Mainpage;