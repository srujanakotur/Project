import { Component, OnInit } from '@angular/core';
import { Adminprofile } from 'src/models/adminprofile';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  details:Adminprofile[]=[
    {retailerid:"1",retailername:"CloudTail",retaileremail:"CloudTail@gamil.com",retailerphone:"022-24930349"},
    {retailerid:"2",retailername:"Federal Shipping",retaileremail:"FederalShipping@gamil.com",retailerphone:"022-22486009"},
    {retailerid:"3",retailername:"Speedy Express",retaileremail:"SpeedyExpress@gamil.com",retailerphone:"022-27418526"},
    {retailerid:"4",retailername:"United Package",retaileremail:"UnitedPackage@gamil.com",retailerphone:"022-28741963"},
  ]

  getinfo:any={};


  addRetailer()
  {
    this.details.push(this.getinfo);
    this.getinfo={};
    var x=document.querySelector<HTMLElement>(".AddForm");
    x.style.display="none";
  }

  addRet()
  {
    var x=document.querySelector<HTMLElement>(".AddForm");
    x.style.display="block";
    var y=document.querySelector<HTMLElement>(".add")
    y.style.display="block";
    var z=document.querySelector<HTMLElement>(".update")
    z.style.display="none";
    this.getinfo.retailerid="";
    this.getinfo.retailername="";
    this.getinfo.retaileremail="";
    this.getinfo.retailerphone="";
  }

  deleteRetailer(i)
  {
    console.log(i);
    this.details.splice(i,1);
  }

  cancel()
  {
    var x=document.querySelector<HTMLElement>(".AddForm");
    x.style.display="none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
