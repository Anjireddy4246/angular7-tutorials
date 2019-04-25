import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {

  loginForm: FormGroup;
  loginIdField = new FormControl("", [Validators.required, Validators.minLength(2)]);
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      loginId: this.loginIdField,
      password: new FormControl("", Validators.required)
    });
     this.onChanges();
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.loginForm);
  }
  onChanges(): void {
    this.loginForm.get('loginId').valueChanges.subscribe(val => {
      console.log(`My loginId is ${val}.`);
    });
  }


  fullUpdate() {
    this.loginForm.setValue({ loginId: 'Partial', password: 'monkey' });
  }

  partialUpdate() {
    this.loginForm.patchValue({ loginId: 'Partial' });
  }

  reset() {
    this.loginForm.reset();
  }

}
