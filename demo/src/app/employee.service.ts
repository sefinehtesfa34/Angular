import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private url='http://localhost:3000';

constructor( private http:HttpClient) { }

public getUser(){
  return this.http.get<any>(`${this.url}/posts`);
}
public postUser(data:any){
  return this.http.post<any>(`${this.url}/posts`,data);
}
public deleteUser(userId:number){
  return this.http.delete(`${this.url}/posts/${userId}`)
}
public updateUserData(userId:any,data:any){
  return this.http.put(`${this.url}/posts/${userId}`,data);

}

}
