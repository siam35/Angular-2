import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  all:number;
  @Input()
  male:number;
  @Input()
  female:number;

  selectedRadioButtonValue: string ='All';
  
  @Output()
  countRadioButtonSelectedChanged:EventEmitter<string>= new EventEmitter<string>();

  onRadioButtonSelectedChange(){
    this.countRadioButtonSelectedChanged.emit(this.selectedRadioButtonValue);
  }


}
