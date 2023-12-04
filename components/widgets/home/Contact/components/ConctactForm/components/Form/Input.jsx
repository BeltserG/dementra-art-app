import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Form.module.scss";

import { useDispatch } from "react-redux";
import { changeFormData } from "@/store/slices/contactForm";


import { useInput } from "@/hooks/useInput";

const Input = ({ children, inputName }) => {
  const inputTypeChanger = (inputName) => {
    switch (inputName) {
      case "name":
        return { inputType: "text", isRequired: false };
      case "surname":
        return { inputType: "text", isRequired: false };
      case "email":
        return { inputType: "email", isRequired: true };
    }
    return { inputType: "", isRequired: false };
  };
  const { inputType, isRequired } = inputTypeChanger(inputName);

  //Custom hook
  const {
    inputValue,
    errorData,
    enteredDataIsValid,
    inputFieldWasTouched,
    inputChangeHandler,
  } = useInput(inputType);

  const moveLabel = inputValue !== "" && inputFieldWasTouched ? true : false;

  const dispatcher = useDispatch();
  return (
    <>
      <div className={classNames(cl["input-container"])}>
        <input
          className={classNames(cl["input"])}
          type={inputType}
          name={inputName}
          id={inputName}
          value={inputValue}
          onChange={(e) => {
            inputChangeHandler(e.target.value);
            dispatcher(
              changeFormData({ type: inputName, value: e.target.value })
            );
          }}
          onBlur={(e) => inputChangeHandler(e.target.value)}
        />
        <label
          className={classNames(moveLabel ? cl["moved"] : "")}
          htmlFor={inputName}
        >
          {inputName + (isRequired ? "*" : "")}
        </label>
        {inputName === "email" && (
          <span className={classNames(cl["input-error"])}>{errorData}</span>
        )}
      </div>
    </>
  );
};

export default Input;
