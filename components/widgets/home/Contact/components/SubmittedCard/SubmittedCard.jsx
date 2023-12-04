import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/SubmittedCard.module.scss";

import { changeFormData, resetState } from "@/store/slices/contactForm";
import { useSelector, useDispatch } from "react-redux";


const SubmittedCard = ({ children, setIsSubmitted}) => {
  const dispatcher = useDispatch();
  return (
    <>
      <div className={classNames(cl["submit-card"])}>
        <h2 className={classNames(cl["submit-heading"])}>Thank You!</h2>
        <div className={classNames(cl["checkmark-container"])}>
          <svg
            className={classNames(cl["checkmark"])}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={classNames(cl["checkmark__circle"])}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className={classNames(cl["checkmark__check"])}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <p className={classNames(cl["submit-message"])}>
          Your message has been submitted successfully
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            dispatcher(resetState());
          }}
          className={classNames(cl["submit-redirect"])}
        >
          write another one
        </button>
      </div>
    </>
  );
};

export default SubmittedCard;
