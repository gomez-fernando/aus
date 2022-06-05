export class CharacterModel{
  thumbnail: {
    path: string,
    extension: string
  }

  constructor( path: string = '', extension: string = ''){
    this.thumbnail = {
      path,
      extension
    }
  }
}