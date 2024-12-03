import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent {
  
  userList: any [] = [];
  productList: any[] = [];
  customerList: any[] = [];

  constructor( private http: HttpClient){
  }

  getAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }

  getAllProducts(){
    this.http.get("https://fakestoreapi.com/products").subscribe((result:any)=>{
      this.productList = result;
    })
  }

  getAllCustomers(){
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      this.customerList = result.data;
    })
  }
  

}
