import { Component, OnInit } from '@angular/core';
import { Retailerprofile } from 'src/models/retailerprofile';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {
  details:Retailerprofile[]=[
    {productname:"Mobile",productimage:"image1",productdescription:"Oneplus",productprice:"50000"},
    {productname:"Laptop",productimage:"image2",productdescription:"HP",productprice:"50000"},
    {productname:"TV",productimage:"image3",productdescription:"Sony",productprice:"50000"},
    {productname:"Earphones",productimage:"image4",productdescription:"JBL",productprice:"50000"},
    
  ]

  getinfo:any={};


  addProduct()
  {
    this.details.push(this.getinfo);
    this.getinfo={};
    var x=document.querySelector<HTMLElement>(".AddForm");
    x.style.display="none";
  }

  addProd()
  {
    var x=document.querySelector<HTMLElement>(".AddForm");
    x.style.display="block";
    var y=document.querySelector<HTMLElement>(".add")
    y.style.display="block";
    var z=document.querySelector<HTMLElement>(".update")
    z.style.display="none";
    this.getinfo.productname="";
    this.getinfo.productimage="";
    this.getinfo.productdescription="";
    this.getinfo.productprice="";
  }

  deleteProduct(i)
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
