import { createContext, useState } from "react";

const GalleryIsClickedContext = createContext();

function GalleryIsClickedContextProvider({ children }) {
  const [galleryIsClicked, setGalleryIsClicked] = useState(false);


  return (
    <GalleryIsClickedContext.Provider
      value={{
        galleryIsClicked: galleryIsClicked,
        setGalleryIsClicked: setGalleryIsClicked,
      }}
    >
      {children}
    </GalleryIsClickedContext.Provider>
  );
}

export { GalleryIsClickedContext, GalleryIsClickedContextProvider };
