import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RetailerComponent } from './retailer/retailer.component';
import { RegisterretailerComponent } from './registerretailer/registerretailer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RetailerloginComponent } from './retailerlogin/retailerlogin.component';
import { RetailerprofileComponent } from './retailerprofile/retailerprofile.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RetailerComponent,
    RegisterretailerComponent,
    AdminloginComponent,
    RetailerloginComponent,
    RetailerprofileComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
