import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginForm : FormGroup;

  adminemail:string;
  adminpassword:string;
  constructor(private router:Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      adminemail : new FormControl('',[Validators.email, Validators.required]),
      adminpassword : new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  get h(){
    return this.loginForm.controls;
  }

  doLogin(){

  }

  /*validate() {
    if(this.adminemail=="admin@gmail.com" && this.adminpassword=="admin@123") {
      this.router.navigate(['approve-retailer']);
    }
  }*/


}
