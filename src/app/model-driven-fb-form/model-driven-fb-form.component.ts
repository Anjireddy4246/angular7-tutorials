import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-fb-form',
  templateUrl: './model-driven-fb-form.component.html',
  styleUrls: ['./model-driven-fb-form.component.less']
})
export class ModelDrivenFbFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginId: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]]
    });
  }

  // onSubmitModelBased() {
  //   console.log("model-based form submitted");
  //   console.log(this.loginForm.value);
  // }

  onSubmitModelBased({ value, valid }: { value: ILogin, valid: boolean }) {
    debugger;
    console.log('read form values from HTML ' + value);
    console.log("model-based form submitted");
    console.log(this.loginForm.value);
  }

}
