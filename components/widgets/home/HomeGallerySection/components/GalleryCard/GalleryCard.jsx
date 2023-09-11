import cl from "./styles/GalleryCard.module.scss";
import classNames from "classnames";
const GalleryCard = ({data}) => {
  return (
    <div>
      <img src="" alt={data.id} />
      <h3>{data.id}</h3>
      <p>{data.description}</p>
    </div>
  )
}

export default GalleryCard