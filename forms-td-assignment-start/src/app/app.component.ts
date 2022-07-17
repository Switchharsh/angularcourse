import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild ('f') formassignment: NgForm;
skillDefault = 'advance';
skills = ['basic', 'advance', 'pro'];

onSubmit(form: NgForm){
  console.log(form);
}
ngOnInit(){
  
}
}
