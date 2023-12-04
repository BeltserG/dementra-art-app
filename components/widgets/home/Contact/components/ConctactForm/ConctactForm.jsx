import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/ConctactForm.module.scss";

import Form from "./components/Form/Form";
import SubmittedCard from "../SubmittedCard/SubmittedCard.jsx";


const ConctactForm = ({children}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <div className={classNames(cl["form-container"])}>
        <h1 className={classNames(cl["form-heading"])}>
          Let<span>&apos;</span>s be in touch
        </h1>

        <div className={classNames(cl["form-interactive-container"])}>
          {isSubmitted ? (
            <SubmittedCard setIsSubmitted={setIsSubmitted}/>
          ) : (
            <>
              <p className={classNames(cl["form-text"])}>
                Reach me on{" "}
                <a href="mailto:dementraart7@gmail.com">
                  dementraart7@gmail.com
                </a>{" "}
                or submit a form:
              </p>
              <Form setIsSubmitted={setIsSubmitted} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ConctactForm;
