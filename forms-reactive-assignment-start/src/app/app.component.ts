import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

statuses = ['Stable','Critical', 'Finished'];
signupForm: FormGroup;
forbiddenNames = 'Test';

ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null,Validators.required,
        this.forbiddenName.bind(this)),
      'email' : new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl('Critical')
    });
}
onSubmit(){
  console.log(this.signupForm.value);
}
forbiddenName(control: FormControl): {[s: string] : boolean}{
  if (this.forbiddenNames.indexOf(control.value) !== -1){
    return{'Forbidden Name' : true};

  }
  return null;
}

}
