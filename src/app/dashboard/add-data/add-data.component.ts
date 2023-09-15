import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { kindergardens } from 'src/app/shared/data';

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
      console.log(this.addChildForm.value);
    }
  }
}
