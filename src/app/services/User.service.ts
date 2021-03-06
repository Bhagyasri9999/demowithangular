import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from '../Model/UserTable';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  baseURL: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get<UserTable[]>(this.baseURL);
  }

  addUser(user)
  {
    return this._http.post<UserTable>(this.baseURL,JSON.stringify(user),this.httpOptions);
  }
  deleteUser(user:UserTable){
    
    return this._http.delete<UserTable>(this.baseURL+"\\",this.httpOptions);

  }
}