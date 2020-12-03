import { Component, OnInit } from '@angular/core';
import {PasswordChecker} from 'src/models/passwordchecker';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerretailer',
  templateUrl: './registerretailer.component.html',
  styleUrls: ['./registerretailer.component.css']
})
export class RegisterretailerComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private fromBuilder : FormBuilder) { }

  phoneregex = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    this.registerForm=this.fromBuilder.group({
      retailername : new FormControl('',[Validators.required, Validators.minLength(5)]),
      retaileremail:new FormControl('',[Validators.email,Validators.required]),
      retailerphone : new FormControl('',[Validators.required, Validators.pattern(this.phoneregex)]),
      retailerpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      confretailerpassword : new FormControl('',[Validators.required,Validators.minLength(6)])
    },{
      validators:PasswordChecker("retailerpassword","confretailerpassword"),
    })
  }
  get g()
  {
    return this.registerForm.controls;
  }

  doRegister()
  {
    
  }

}
