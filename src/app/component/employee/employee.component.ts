import { Component, OnInit } from '@angular/core';
import { BaseModelComponent } from '../base-model.component';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent extends BaseModelComponent implements OnInit {
  
  
  constructor() {
    super();
    
  }

  override ngOnInit(): void {
  
  }

}
