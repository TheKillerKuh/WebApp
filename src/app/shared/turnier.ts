import { Time, getLocaleCurrencyCode } from "@angular/common";

export class Turnier {
    titel:string;
    date:Date;
    description:string;
    modi:string;
    player_cnt:number;
    is_mixed:number;
    entry_fee:string;
    start_time:string;
    registration:string;
    host:string;
    location:string;
    website:string;
    imagePath:string;

    constructor(titel:string, date:Date, description:string, modi:string, player_cnt:number, is_mixed:number, entry_fee:string, start_time:string, registration:string, host:string, location:string, website:string, imagePath:string) {
      this.titel = titel;
      this.date = date;
      this.description = description;
      this.modi = modi;
      this.player_cnt = player_cnt;
      this.is_mixed = is_mixed;
      this.entry_fee = entry_fee;
      this.start_time = start_time;
      this.registration = registration;
      this.host = host;
      this.location = location;
      this.website = website;
      this.imagePath = imagePath;
      }
}
