import { ReactElement, useEffect, useState } from "react";
import { CharacterModel } from "../models/character";
import { NameModel } from "../models/name";
import { HttpStoreNames } from "../services/http.store.names";
import { MarvelApi } from "../services/marvelApi";
import { MarvelContext } from "./marvel-context";

export function MarvelContextProvider({children}: {children: ReactElement}){ 
  const initialState: CharacterModel[] = [];
  const [homePageCharacters, setHomePageCharacters] = useState(initialState);
  
  const initialNames: NameModel[] = [];
  const apiNames = new HttpStoreNames();
  const [names, setNames] = useState(initialNames);
  

  useEffect(() => {
    MarvelApi.getPokemon().then((array) => array).then(obj => {
      setHomePageCharacters(obj.data.results);
    });
  }, []);

  useEffect(() => {
    console.log('Use effect carga');
    apiNames.getNames().then((data) => setNames(data));
  }, [names]);

  console.log(names);

  const context = {
    homePageCharacters
  };

  return (
    <MarvelContext.Provider value={context} >
      {children}
    </MarvelContext.Provider>
  );
}