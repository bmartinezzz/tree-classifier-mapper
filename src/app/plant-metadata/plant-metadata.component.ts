import { Component, OnInit } from '@angular/core';
import { PlantMetadataService } from "../shared/plant-metadata.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plant-metadata',
  templateUrl: './plant-metadata.component.html',
  styleUrls: ['./plant-metadata.component.css']
})
export class PlantMetadataComponent implements OnInit {

  constructor(public plantMetadataService:PlantMetadataService) {}

  ngOnInit(): void {
  }

  plantType = ["Oak", "Maple", "Ash", "Fur", "Cherry", "Pine"];

  onSubmit(): void {
    let data = this.plantMetadataService.form.value;

    this.plantMetadataService.createTreeMetadataEntry(data)
      .then(res => {
        /* do something here....
        maybe clear the form or give a success message */
      });
  }

  changePlantType(event) {
    this.plantType = event.target.value
  }
}

