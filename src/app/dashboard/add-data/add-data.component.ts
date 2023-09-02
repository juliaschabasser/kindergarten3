import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { kindergardens, children } from 'src/app/shared/data';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder) {
  }
  public addChildForm: any;
  public kindergardens = kindergardens;

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergarten: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  onSubmit() {
    if(this.addChildForm.valid) {

      var kindergarten = kindergardens.find(kindergarden => kindergarden.id == this.addChildForm.value.kindergarten);

      if (!kindergarten) {
        throw new Error("Unexpected error: Missing name");
      }

      children.push({
        id: uuid(),
        name: this.addChildForm.value.name,
        birthDate: this.addChildForm.value.birthDate,
        kindergarten: kindergarten
      });
    }
  }
}
