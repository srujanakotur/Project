import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-retailerlogin',
  templateUrl: './retailerlogin.component.html',
  styleUrls: ['./retailerlogin.component.css']
})
export class RetailerloginComponent implements OnInit {

  loginForm : FormGroup;

  retaileremail:string;
  retailerpassword:string;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      retaileremail : new FormControl('',[Validators.email, Validators.required]),
      retailerpassword : new FormControl('',[Validators.required, Validators.minLength(6)])
    })

  }

  get h(){
    return this.loginForm.controls;
  }

  doLogin(){

  }



}
