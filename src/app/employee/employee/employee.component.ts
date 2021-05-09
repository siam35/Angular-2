import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName:string = 'Hasan';
  lastName:string = 'Sakib';
  age:number = 20;
  gender:string = 'male';
  showDetails:boolean = false;

  toggleDetails():void{
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
