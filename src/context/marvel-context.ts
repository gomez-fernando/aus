import { createContext } from 'react';
import { CharacterModel } from '../models/character';

const initialContext: {
  homePageCharacters: CharacterModel[]
} = {
  homePageCharacters: []
}


export const MarvelContext = createContext(initialContext)