import { ReactElement, useEffect, useState } from "react";
import { CharacterModel } from "../models/character";
// import { NameModel } from "../models/name";
// import { HttpStoreNames } from "../services/http.store.names";
import { MarvelApi } from "../services/marvelApi";
import { MarvelContext } from "./marvel-context";

export function MarvelContextProvider({children}: {children: ReactElement}){ 
  const initialState: CharacterModel[] = [];
  const [homePageCharacters, setHomePageCharacters] = useState(initialState);
  
  // const initialNames: NameModel[] = [];
  // const apiNames = new HttpStoreNames();
  // const [names, setNames] = useState(initialNames);

  // useEffect(() => {
  //   console.log('Use effect carga');
  //   apiNames.getNames().then((data) => setNames(data));
  //   console.log({names});
  // }, []);

  // const names2 =  apiNames.getNames().then((data) => [...data])

  useEffect(() => {
    MarvelApi.getCharacter().then((array) => array).then(obj => {
      setHomePageCharacters(obj.data.results);
      // const temp = obj.data.results.map((item: CharacterModel, index: number) => {
      //   // item.name = names2[index].name;
      //   return item
      // })
      // console.log(temp);
      // const temp = [...obj.data.results, item.name = names]
    });
  }, []);


  const context = {
    homePageCharacters
  };

  return (
    <MarvelContext.Provider value={context} >
      {children}
    </MarvelContext.Provider>
  );
}