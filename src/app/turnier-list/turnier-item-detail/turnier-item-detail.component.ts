import { Component, Input, SimpleChanges } from '@angular/core';
import { Turnier } from '../../shared/turnier';
import { TurnierService } from '../../shared/turnier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-turnier-item-detail',
  templateUrl: './turnier-item-detail.component.html',
  styleUrl: './turnier-item-detail.component.scss'
})
export class TurnierItemDetailComponent {
  @Input() turnierItemChild : Turnier;
  turnierForm: FormGroup;
  imageurl: string;
  file: File;
  isPlaceholder: boolean;

  constructor(
    private turnierService: TurnierService, private fb: FormBuilder, private fireStorage:AngularFireStorage) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['turnierItemChild']) {
      this.initializeForm();
    }
  }

  async initializeForm() {
    this.turnierForm = this.fb.group({
      titel: [this.turnierItemChild.titel, Validators.required],
      website: [this.turnierItemChild.website, Validators.required],
      date: [this.turnierItemChild.date, Validators.required, ],
      description: [this.turnierItemChild.description, Validators.required],
      location: [this.turnierItemChild.location, Validators.required],
      host: [this.turnierItemChild.host, Validators.required],
      imagePath: [this.turnierItemChild.imagePath],
      modi : [this.turnierItemChild.modi, Validators.required],
      player_cnt : [this.turnierItemChild.player_cnt, Validators.required],
      is_mixed : [this.turnierItemChild.is_mixed, Validators.required],
      start_time : [this.turnierItemChild.start_time, Validators.required],
      registration : [this.turnierItemChild.registration, Validators.required],
      entry_fee : [this.turnierItemChild.entry_fee],
      upload: [{value: "", disabled: true}]
    });

    if(this.turnierItemChild.imagePath)
    {
      const ref = this.fireStorage.ref("TurnierUploads/"+this.turnierItemChild.imagePath);

      ref.getDownloadURL().subscribe(url => {
        this.imageurl = url;
      });
      this.isPlaceholder = false;
    }
    else
    {
      this.imageurl = "assets/images/placeholder.jpg";
      this.isPlaceholder = true;
    }

    this.turnierForm.get('date').patchValue(this.formatDate(this.turnierItemChild.date));
    console.log('Received turnier:', this.turnierItemChild); // Add this line
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }


  async onFileCchange(event : any){
    this.file = event.target.files[0];

    if(this.file){

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageurl = e.target.result;
      };

      reader.readAsDataURL(this.file);
    }
  }

  async onSubmit() {
    // Handle form submission
    if (this.turnierForm.valid) {
      const formValue = this.turnierForm.value;
      const turnier = new Turnier(
        formValue.titel,
        formValue.date,
        formValue.description,
        formValue.modi,
        formValue.player_cnt,
        formValue.is_mixed,
        formValue.entry_fee,
        formValue.start_time,
        formValue.registration,
        formValue.host,
        formValue.location,
        formValue.website,
        formValue.imagePath
      );
      const path = `TurnierUploads/${this.file.name}`;
      const uploadTask = await this.fireStorage.upload(path,this.file);
      this.imageurl = await uploadTask.ref.getDownloadURL();
      // Now 'turnier' contains the updated values from the form
      console.log(turnier);
      // You can perform further actions like saving to a database, etc.
    }
  }

  clearForm() {
    this.turnierItemChild = null;
  }
}
