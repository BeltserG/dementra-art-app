import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/NavButtons.module.scss";

const NavButtons = ({ handleWorksAdjustment }) => {
  return (
    <div className={classNames(cl["nav-buttons-container"])}>
      <button
        onClick={() => handleWorksAdjustment("-")}
        className={classNames(cl["nav-button"], "left")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m401.218-480 284.956 284.956q18.392 18.392 18.175 44.044-.218 25.652-19.175 44.609-18.391 18.392-44.044 18.392-25.652 0-44.043-18.392L297.565-404.912q-15.956-15.957-23.652-35.479-7.696-19.522-7.696-39.609 0-20.087 7.696-39.609 7.696-19.522 23.652-35.479l299.522-298.956q18.391-18.391 44.261-18.457 25.87-.065 44.826 18.892 18.392 18.391 18.392 44.326 0 25.935-18.392 44.327L401.218-480Z" />
        </svg>
      </button>
      <button
        onClick={() => handleWorksAdjustment("+")}
        className={classNames(cl["nav-button"], "right")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M560.912-480 275.956-764.956q-18.391-18.392-18.174-44.261.217-25.87 18.609-44.262 18.391-18.391 44.544-18.391 26.152 0 44.544 18.391L664-555.088q15.957 15.957 23.652 35.479 7.696 19.522 7.696 39.609 0 20.087-7.696 39.609-7.695 19.522-23.652 35.479L365.044-105.956Q346.652-87.565 321-88.065q-25.652-.5-44.044-18.891-18.391-18.392-18.391-44.544 0-26.152 18.391-44.544L560.912-480Z" />
        </svg>
      </button>
    </div>
  );
};

export default NavButtons;
