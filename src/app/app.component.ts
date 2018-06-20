import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')  signupForm : NgForm
  defaultStates ="cityy"
  defaultt ='male'
  answer= " this is the anser"
  genders= [ 'male' , 'female'];
  user=
  {
    username: "",

 EmailAddress : "",
Password: "",
  Gender: ""
  }
  onsubmit()
{
this.user.username= this.signupForm.value.name,
this.user.EmailAddress= this.signupForm.value.email,
this.user.Password= this.signupForm.value.pwd,
this.user.Gender= this.signupForm.value.gender
}
}

