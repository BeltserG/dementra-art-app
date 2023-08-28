
const Mainpage = (props) => {
  return (
    <div>Mainpage nad {props.product}</div>
  )
}
export async function getStaticProps(){
  return {
    props:{
      product: "456"
    }
  }
}
export default Mainpage