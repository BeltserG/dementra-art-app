import cl from "@/components/widgets/shared/Footer/styles/Footer.module.scss";
import classNames from "classnames";
// import fs from "fs";
const SocialNetworks = ({socialNetworks}) => {
  return (
    <div className={classNames(cl["footer-info__social-networks"])}>
      <h5 className={classNames(cl["social-networks--heading"])}>Follow</h5>
      <ul className={classNames(cl["social-networks--list"])}>
        {socialNetworks.map((network)=>
        <a key={network.id + "-link"} href={network.url} target="_blank">
          <img key={network.id}
          className={classNames(cl["social-networks--item"])}
          src={network.icon}/>
        </a>
        )}
      </ul>
    </div>
  )
}


export default SocialNetworks