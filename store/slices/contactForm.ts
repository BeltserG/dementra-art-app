import { createSlice } from "@reduxjs/toolkit";

import { inputTypeRouter } from "./inputValidations";
type contactFormAction = {
  type: string;
  payload: {
    type: string;
    value: string;
  };
};

type State = {
  isValid: boolean,
  name: string,
  surname: string,
  email: string,
  message: string,
  data: {
    name: string,
    surname: string,
    email: string,
    message: string,
  },
  errors: {
    name: {
      isValid: boolean,
      errorData: string[],
    },
    surname: {
      isValid: boolean,
      errorData: string[],
    },
    email: {
      isValid: boolean,
      errorData: string[],
    },
    message: {
      isValid: boolean,
      errorData: string[],
    },
  },
};

const initialState : State = {
  isValid: false,
  name: "",
  surname: "",
  email: "",
  message: "",
  data: {
    name: "",
    surname: "",
    email: "",
    message: "",
  },
  errors: {
    name: {
      isValid: true,
      errorData: [],
    },
    surname: {
      isValid: true,
      errorData: [],
    },
    email: {
      isValid: false,
      errorData: [],
    },
    message: {
      isValid: true,
      errorData: [],
    },
  },
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    changeFormData(state, action: contactFormAction) {
      const key = action.payload.type as "email" || "password" || "name" || "surname" || "message";
      const value = action.payload.value;
      state[key] = value;
      if(key === "email"){
        const {inputIsValid, errorData } = inputTypeRouter("email", value)!;
        state.errors[key].isValid = inputIsValid;
        state.errors[key].errorData = errorData; 
      }
      let formIsValid = true;
      for (const key in state.errors) {
        if(!state.errors[key as keyof typeof state.errors].isValid){
            formIsValid = false;
            break;
        };
      }
      state.isValid = formIsValid;
    },
    resetState(state){
      return initialState
    }
  },
});

export const { changeFormData, resetState } = contactFormSlice.actions;
export { contactFormSlice };