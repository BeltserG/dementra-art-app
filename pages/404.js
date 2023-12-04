import React from "react";
import Error_Page from "@/components/Error_Page/Error_Page";
import { useRouter } from "next/router";

const Error = () => {
  console.log(useRouter())
  return <Error_Page />;
};

export default Error;