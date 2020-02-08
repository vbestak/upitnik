import {
  Injectable
} from '@angular/core';
import {
  HttpClient, HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { BehaviorSubject, Observable} from 'rxjs';
import {FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user:BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  token: string;
  

  constructor(private http: HttpClient, private router:Router) {}

  whoAmI() {
    this.http.get("http://localhost:8081/login/", {
      responseType: "json",
      observe: "response"
    }).subscribe((res) => {
      console.log(res, "whoami");
      
      this.user.next(res.body as User);
    });
  }

  isAuthenticated() {
    return sessionStorage.getItem('token') ? true : false;
  }

  register(registerData:FormGroup):Observable<HttpResponse<Object>>{
    return this.http.post(`http://localhost:8081/register/`, registerData, {observe:"response", responseType:"json"});
  }

  getUser():Observable<User> {
    ///TODO
    if (this.user.getValue().ime == undefined)
      this.whoAmI();  
    return this.user;
  }

  getToken() {
    return this.token || sessionStorage.getItem('token');
  }

  login(credentials:String[]):Observable<HttpResponse<Object>> {
    return this.http.post('http://localhost:8081/login/', credentials, {responseType:"json", observe:"response"}); 
  }

  logout() {
    sessionStorage.removeItem('token');
    this.user.next(new User());
    this.router.navigateByUrl("login");
  }

}