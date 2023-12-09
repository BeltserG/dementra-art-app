import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Error_Page.module.scss";

const Error_Page = () => {
  return (
    <>
      <div className={classNames(cl["error-container"])}>
        <Image
          className={classNames(cl["gallery__item--image"])}
          src={"/images/404_Otter.jpg"}
          alt={"sad_otter"}
          priority={true}
          width="0"
          height="0"
          sizes="50vw"
          style={{
            width: "25%",
            height: "auto",
            // objecFit: "cover",
            // objectPosition: "50 % 50%",
            // overflow: "hidden",
          }}
        />
        <div className={classNames(cl["text-container"])}>
          <h1 className={classNames(cl["error-heading"])}> 404 | </h1>
          <span>Page is not found</span>
        </div>
      </div>
    </>
  );
};

export default Error_Page;
