import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Users } from 'src/app/users';
import { EmployeeService } from '../../employee.service';
// import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
formValue !:FormGroup;
user:Users=new Users();
userData:any;
showAddButton!:boolean;
showUpdateButton!:boolean;


  constructor(private fromBuilder:FormBuilder,
      private userService:EmployeeService ) { }

  ngOnInit(): void {
 
    this.formValue=this.fromBuilder.group({
      id:[""],
      firstName:[''],
      lastName:[''],
      email:[''],
      address:[''],
      country:[''],
    })
    this.getUsers();
  }

  showAdd(){
    this.formValue.reset();
    this.showAddButton=true;
    this.showUpdateButton=false;
  }
  postUserDetails(){
    
    this.user.firstName=this.formValue.value.firstName;
    this.user.lastName=this.formValue.value.lastName;
    this.user.email=this.formValue.value.email;
    this.user.address=this.formValue.value.address;
    this.user.country=this.formValue.value.country;
    this.userService.postUser(this.user).subscribe(result=>{
      console.log("added"+result);
      // alert("User Added");
      let cancel=document.getElementById("close")
      cancel?.click();
      this.formValue.reset();
      this.getUsers()
    })
  }

  getUsers(){
  this.userService.getUser().subscribe(result=>{
    this.userData=result;
  })    
  }
  deleteUser(data:any){
    this.userService.deleteUser(data.id).subscribe(response=>{
      alert(`User of UserId=${data.id} is deleted`);
      this.getUsers();
    }
  )
  }
fillEdited(data:any){
  this.showAddButton=false;
  this.showUpdateButton=true;
  this.user.id =data.id
  this.formValue.controls["firstName"].setValue(data.firstName);
  this.formValue.controls["lastName"].setValue(data.lastName);
  this.formValue.controls["email"].setValue(data.email);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls["country"].setValue(data.country);

}
updateUser(){
  this.user.firstName=this.formValue.value.firstName;
  this.user.lastName=this.formValue.value.lastName;
  this.user.email=this.formValue.value.email;
  this.user.address=this.formValue.value.address;
  this.user.country=this.formValue.value.country;
  this.userService.updateUserData(this.user.id,this.user).subscribe(response=>{
  alert("User Updated successfully")
  }
  ); 
  let cancel=document.getElementById("close")
      cancel?.click();
      this.formValue.reset();
      this.getUsers()
}

}
