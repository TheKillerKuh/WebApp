import { Time, getLocaleCurrencyCode } from "@angular/common";

export class Turnier {
    id:number;
    titel:string;
    website:string;
    datum:Date;
    description:string;
    location:string;
    host:string;
    starttime:Time;

    constructor(id:number, titel:string, website:string, datum:Date, description:string, location:string, host:string) {
            this.id = id;
            this.titel =titel;
            this.website = website;
            this.datum = datum
            this.description = description;
            this.location =  location;
            this.host = host;
      }
}
