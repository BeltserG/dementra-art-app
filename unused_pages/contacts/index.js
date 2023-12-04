import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";

const contacts = () => {
  return (
    <div>contacts</div>
  )
}

export async function getStaticProps(context){
  const dataNames = ["socialNetworks", "gallery", "biography"];
  const data = getStaticPropsFromJSON(dataNames);
  return {
    props:{
      ...data
    }
  }
}

export default contacts