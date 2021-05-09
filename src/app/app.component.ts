import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-employee-list></app-employee-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
 // imagePath: string = 'https://image.shutterstock.com/image-photo/corporate-data-management-system-dms-260nw-304480604.jpg'
}
