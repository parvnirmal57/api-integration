import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent {

  deptList: any [] = [];
  leaveList: any [] = [];

  deptObj:any ={
    
  "departmentId": 0,
  "departmentName": "",
  "departmentLogo": ""
  };

  leaveObj: any ={
    "leaveTypeId": 0,
  "typeName": ""
  };


  constructor (private http: HttpClient){

  }
  onSave(){
  
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
      if (res.result) {
        alert("Department created sucessfully");
      } else{
        alert(res.message)
      }
    })
  }

  getDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment").subscribe((res:any)=>{
      this.deptList = res.data;
    })
  }

  addNewLeaveType(){
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewLeaveType",this.leaveObj).subscribe((res:any)=>{
      if (res.result) {
        alert("Type Creation Success");
      } else{
        alert(res.message)
      }
    })
  }

  getLeaveType(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetLeaveTypes").subscribe((res:any) =>{
      this.leaveList = res.data;
    })

  }

  onEdit(data:any){
    this.leaveObj = data;
  }

  onUpdate(){}
  onDelete(id: number) {
    
    const isDelete=  confirm("Are you sure want to delete");
    if(isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/EmployeeManagement/DeleteEarnedLeave" +id).subscribe((res:any)=>{
        if(res.result) {
          alert("Leave Deleted Success");
          this.getLeaveType();
        } else {
          alert(res.message)
        }
      })
    }
    
  }

}
