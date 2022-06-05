import { ReactElement, useEffect, useState } from "react";
import { CharacterModel } from "../models/character";
import { MarvelApi } from "../services/marvelApi";
import { MarvelContext } from "./marvel-context";

export function MarvelContextProvider({children}: {children: ReactElement}){ 
  const initialState: CharacterModel[] = [];
  const [homePageCharacters, setHomePageCharacters] = useState(initialState);
  

  

  useEffect(() => {
    console.log('Use effect carga');
    MarvelApi.getPokemon().then((array) => array).then(obj => {
      // console.log(obj);
      setHomePageCharacters(obj.data.results);
      // console.log(obj.data.results);
    });
  }, []);

  // console.log(homePageCharacters);
  const context = {
    homePageCharacters
  };

  return (
    <MarvelContext.Provider value={context} >
      {children}
    </MarvelContext.Provider>
  );
}