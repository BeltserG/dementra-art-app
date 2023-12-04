import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Loading.module.scss";

const Loading = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  useEffect(() => {
    window.addEventListener("load", ()=>{
        console.log("loaded")
    })
    // document.addEventListener("readystatechange", () => {
    //   console.log(document.readyState);
    //   if (document.readyState === "complete") {
    //     setIsLoaded(true);
    //   }
    // });
  }, []);
  return (
    <>
      <div
        className={classNames(
          cl["loading-container"],
          isLoaded ? cl["loaded"] : ""
        )}
      >
        Loading...
      </div>
    </>
  );
};

export default Loading;
