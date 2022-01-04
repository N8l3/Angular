import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseModelComponent } from '../base-model.component';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent extends BaseModelComponent implements OnInit {

  constructor() { 
    super();
  }

  override ngOnInit(): void {
  }

}

