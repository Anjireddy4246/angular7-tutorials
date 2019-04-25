import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }
  loginModel: Object = {
  };
  ngOnInit() {
  }
  onSubmitLoginForm() {
    console.log(this.loginModel);
  }

  onSubmit(form) {
    console.log(form.value);
  }

}
