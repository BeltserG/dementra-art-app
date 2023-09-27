import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import NavButtons from "./components/NavButtons/NavButtons";

import classNames from "classnames";
import cl from "./styles/FullView.module.scss";

const FullView = ({ artData }) => {
  const [worksAdjustValue, setWorksAdjustValue] = useState(0);
  let worksCount = 0;
  function handleWorksAdjustment (action){
    let overflow = worksCount + worksAdjustValue;
    if(action === "+" && overflow > 1){
      setWorksAdjustValue(prev=>prev-1)
    }else if (action === "-" && worksAdjustValue !== 0){
      setWorksAdjustValue(prev=>prev+1)
    }
  }
 
  useEffect(() =>{
    console.log(worksAdjustValue)
    console.log(worksCount)
  })

  const works = artData.works.map((work) => {
    worksCount +=1;
    return (
      <Image
        className={classNames(cl["work-image"])}
        key={work.name}
        width="0"
        height="0"
        sizes="100vw"
        src={work.url}
        alt={work.name}
        style={{
          width: "100%",
          height: "auto",
          transform: `translateX(${100*worksAdjustValue}%`,
        }}
      />
    );
  });
  function adjustWorkImages(worksArray) {}
  return (
    <>
      <div className={classNames(cl["fullview"])}>
        <div className={classNames(cl["fullview__works-container"])}>
          {works}
          <NavButtons handleWorksAdjustment={handleWorksAdjustment}/>
        </div>
      </div>
    </>
  );
};

export default FullView;
