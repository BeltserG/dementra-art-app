import cl from "@/components/widgets/shared/Footer/styles/Footer.module.scss";
import classNames from "classnames";

const Menu = () => {
  const sectionsList = ["biography", "gallery", "contacts"];
  return (
    <div className={classNames(cl["footer-info__sections"])}>
      <h5 className={classNames(cl["sections--heading"])}>Sections</h5>
      <ul className={classNames(cl["sections--list"])}>
        {sectionsList.map((section) => {
          const link = section === "digital-art" ? `/${section}` : `#${section}`
          return <a key={section + "-link"} href={link}>
            <li key={section} className={classNames(cl["sections--list-item"])}>
              {section.replace("-", " ")}
            </li>
          </a>;
        })}
      </ul>
    </div>
  );
};

export default Menu;
