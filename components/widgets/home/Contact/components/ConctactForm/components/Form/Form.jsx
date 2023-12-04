import {
  useState,
  useEffect,
  useContext,
  useReducer,
  ReactNode,
  ChangeEventHandler,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Form.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { changeFormData, resetState } from "@/store/slices/contactForm";

import Input from "./Input";

const Form = ({ children, setIsSubmitted }) => {
  const contactFormData = useSelector((state) => state.contactForm);
  const [isSending, setIsSending] = useState(false);
  const dispatcher = useDispatch();
  const submitHandler = (e) => {

    e.preventDefault();
    setIsSending(true);
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(contactFormData),
      // headers: {
      //   "Content-Type": "application/json",
      //   "Accept": "application/json",
      // }
    }).then((res) => {
      if (res.ok) {
        setIsSubmitted(true);
        setIsSending(false);
      }
    }).catch((err) => {console.log(err)});
  };
  return (
    <form className={classNames(cl["form"])} onSubmit={submitHandler}>
      <Input inputName="name" />
      <Input inputName="surname" />
      <Input inputName="email" />
      <textarea
        className={classNames(cl["input"], cl["text-area"])}
        name="message"
        id="message"
        // cols={100}
        rows={12}
        onChange={(e) =>
          dispatcher(changeFormData({ type: "message", value: e.target.value }))
        }
      ></textarea>
      <label htmlFor="message"></label>
      <button
        className={classNames(cl["form-button"])}
        disabled={!contactFormData.isValid || isSending}
      >
        {isSending ? <span className={classNames(cl["loader"])}></span> : "submit"}
      </button>
    </form>
  );
};

export default Form;
