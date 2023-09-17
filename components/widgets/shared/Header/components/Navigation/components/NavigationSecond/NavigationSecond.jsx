import React from "react";
import NavItem2 from "./components/NavItem2";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from 'classnames';


const NavigationSecond = () => {
  const navListSecond = ["digital-art", "oil-painting", "glass-art"];
  return (
    <ul className={classNames(cl["header__nav__list2"])}>
      {navListSecond.map((item) => (
        <NavItem2 key={item} item={item}/>
      ))}
    </ul>
  );
};

export default NavigationSecond;
