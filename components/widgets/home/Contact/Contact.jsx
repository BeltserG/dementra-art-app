import { useState, useEffect, useContext, useReducer, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

import classNames from "classnames";
import cl from "./styles/Contact.module.scss";

import ConctactForm from "./components/ConctactForm/ConctactForm";

import { contactAnimation } from "./anim/animation";

const Contact = (children) => {
  useEffect(() => {
    // const ctx = gsap.context(contactAnimation);
    // return () => ctx.revert();
  }, []);
  return (
    <div id="contact" className={classNames(cl["contact"])}>
      <ConctactForm />
    </div>
  );
};

export default Contact;
