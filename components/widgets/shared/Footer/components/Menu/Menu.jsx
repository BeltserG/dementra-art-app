import cl from "@/components/widgets/shared/Footer/styles/Footer.module.scss";
import classNames from "classnames";

const Menu = () => {
  const sectionsList = [
    "biography",
    "digital-art",
    "oil-painting",
    "glass-art",
  ];
  return (
    <div className={classNames(cl["footer-info__sections"])}>
      <h5 className={classNames(cl["sections--heading"])}>Sections</h5>
      <ul className={classNames(cl["sections--list"])}>
        {sectionsList.map((section) => (
          <a key={section + "-link"} href={"/" + section}>
            <li key={section} className={classNames(cl["sections--list-item"])}>{section.replace("-", " ")}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
