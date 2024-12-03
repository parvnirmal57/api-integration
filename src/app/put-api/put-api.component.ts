import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-put-api',
  templateUrl: './put-api.component.html',
  styleUrls: ['./put-api.component.css']
})
export class PutApiComponent {
  postObj: any ={
    title: "",
    body: "",
    userId: "",
  }

  constructor (private http: HttpClient){

  }
  onSavePost(){
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe((res:any)=>{
      if (res.result) {
        console.log(res.json);
      } else{
        alert(res.response)
      }
    })
  }

}
