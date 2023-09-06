import { createContext, useState} from "react";

const NavOpenedContext = createContext();

function NavOpenedContextProvider ({children}){
    const [navOpened, setNavOpened] = useState(false);
    function changeNavOpened(){
      setNavOpened(prev=>!prev);
    }

    return(
        <NavOpenedContext.Provider>
            {children}
        </NavOpenedContext.Provider>
    )
}

export default NavOpenedContextProvider;