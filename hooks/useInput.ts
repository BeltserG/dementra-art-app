import { useState } from "react";

type Return = {
  inputIsValid: boolean;
  errorData: string[];
};

const useInput = (inputType: string) => {
  const validationHandler = inputTypeRouter(inputType);
  const [isRequired, setIsRequired] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [enteredDataIsValid, setEntreDataIsValid] = useState(false);
  const [errorData, setErrorData] = useState<string[]>([]);
  const [inputFieldWasTouched, setInputFieldWasTouched] = useState(false);

  function inputChangeHandler(inputValue: string) {
    const { inputIsValid, errorData } = validationHandler!(inputValue);
    setInputValue(inputValue);
    setInputFieldWasTouched(true);
    setErrorData(errorData);
    setEntreDataIsValid(inputIsValid);
  }

  return {
    inputValue,
    errorData,
    enteredDataIsValid,
    inputFieldWasTouched,
    inputChangeHandler,
  };
};

function emptyFieldValidation(inputValue: string) {
  return inputValue === ""
    ? { inputIsValid: false, errorData: ["Field is empty"] }
    : { inputIsValid: true, errorData: [] };
}
function emailValidation(inputValue: string) {
  if (inputValue === "") {
    return { inputIsValid: false, errorData: ["Field is empty"] };
  }
  const mailFormat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return mailFormat.test(inputValue)
    ? { inputIsValid: true, errorData: [] }
    : { inputIsValid: false, errorData: ["Invalid Email"] };
}
function passwordValidation(inputValue: string) {
  if (inputValue === "") {
    return { inputIsValid: false, errorData: ["Field is empty"] };
  }
  let returnInfo: { inputIsValid: boolean; errorData: string[] } = {
    inputIsValid: true,
    errorData: [],
  };
  const requirements = [
    {
      regex: /.{9,}/,
      message: "be at least 9 characters length",
    },
    {
      regex: /\d/,
      message: "contain at least 1 number",
    },
    {
      regex: /[A-Z]/,
      message: "contain at least 1 uppercase letter",
    },
    {
      regex: /[!@#\$%\^\&*\)\(+=._-]/,
      message: "contain at least 1 special character(!@#$%^&*)(+=._-)",
    },
  ];
  requirements.forEach((req) => {
    if (!req.regex.test(inputValue)) {
      returnInfo.inputIsValid = false;
      returnInfo.errorData.push(req.message);
    }
  });

  return returnInfo;
}
function inputTypeRouter(inputType: string) {
  switch (inputType) {
    case "text":
      return emptyFieldValidation;
    case "password":
      return passwordValidation;
    case "email":
      return emailValidation;
  }
}

export { useInput };
