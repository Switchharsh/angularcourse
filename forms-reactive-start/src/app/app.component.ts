import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray, Form } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupFrom: FormGroup;
  forbiddenUsernames = ['harsh','hars'];

  ngOnInit(){
    this.signupFrom = new FormGroup({
      'username': new FormControl(null, [Validators.required,this.forbiddennames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupFrom.statusChanges.subscribe(
      (status) => console.log(status)
    );
  
  }
  onSubmit(){
    console.log(this.signupFrom);
  }
  onAddHobby() {
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.signupFrom.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.signupFrom.get('hobbies')).controls;
  }
  forbiddennames(control: FormControl): {[s: string] : boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1){
    return {'forbidden username' :  true};
    }
    return null; 

  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
 