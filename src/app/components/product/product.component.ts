import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Product[] = [
    {id:1,name:'Mobile',price:300},
    {id:2,name:'PC',price:800},
    {id:3,name:'cAMERA',price:200},
  ];

  editing = false;
  idEdit:any;

  constructor() { 
  }

  addProduct(name:any,price:any){
     const newProduct:Product = {id:this.products.length + 1,name:name,price:price};
    this.products.push(newProduct);
   (<HTMLInputElement>document.getElementById('name')).value = "";
   (<HTMLInputElement>document.getElementById('price')).value = "";
  }

  removeProduct(id:any){
  const index = this.products.findIndex(product=> product.id == id);
  const potvrda = confirm('Are you sure?');
  if(potvrda){
    this.products.splice(index,1);
  }
  };


  editProduct(product:Product){
    console.log(product);
    (<HTMLInputElement>document.getElementById('name')).value = product.name;
    (<HTMLInputElement>document.getElementById('price')).value =product.price;
    this.editing = true;
    this.idEdit = product.id;
  }

  submitEdit(){
    this.products[this.idEdit -1].name = (<HTMLInputElement>document.getElementById('name')).value;
    this.products[this.idEdit -1].price =  (<HTMLInputElement>document.getElementById('price')).value;
    this.editing = false;
  }


  ngOnInit(): void {
  }

}
