import { NameModel } from '../models/name';

export class HttpStoreNames {
    url: string;
    constructor() {
        this.url = 'http://localhost:8080/names';
    }

    getNames(): Promise<Array<NameModel>> {

        // GET
        return fetch(this.url).then((resp) => {
          
            console.log(resp.status);
            return resp.json();
        });
    }
   
   
}
