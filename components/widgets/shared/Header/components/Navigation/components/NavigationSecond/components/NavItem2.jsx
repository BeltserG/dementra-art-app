import React from "react";
import Link from "next/link";
import cl from "@/components/widgets/shared/Header/styles/Header.module.scss";
import classNames from "classnames";

const NavItem2 = ({ item }) => {
  return (
    <Link className={classNames(cl["nav__link2"])} href={item}>
      <li className={classNames(cl["header__nav__list--item2"])} key={item}>
        {item.replace("-", " ")}
      </li>
    </Link>
  );
};

export default NavItem2;
