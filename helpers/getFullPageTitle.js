import { useRouter } from "next/router";

export function getFullPageTitle(initial) {
  const route = useRouter().route;
  let pageTitle = route.slice(route.lastIndexOf("/") + 1);
  pageTitle = pageTitle[0] ? 
    pageTitle.replace(/^./, pageTitle[0].toUpperCase()) : "";
  const fullPageTitle =
    pageTitle === "" ? initial : initial + " | " + pageTitle;
  return fullPageTitle;
}