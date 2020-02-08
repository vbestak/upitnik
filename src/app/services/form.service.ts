import { Injectable } from '@angular/core';
import { FormGroup, FormArray, NgForm } from '@angular/forms';
import { Upitnik } from '../models/upitnik';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  upitnik:Upitnik;

  constructor(private http:HttpClient) { }

  vote(form:NgForm):Observable<HttpResponse<string>>{
    return this.http.post('http://localhost:8081/form-vote/vote', form.value, {observe:'response', responseType:"text"});
  }

  deleteUpitnik(id:number){
    return this.http.delete(`http://localhost:8081/my-forms/${id}`);
  }

  getUpitnici():Observable<HttpResponse<object>>{
    return this.http.get(`http://localhost:8081/my-forms/`, {observe:"response"});
  }

  getUpitnik(sifra:String):Observable<HttpResponse<object>>{
    return this.http.get(`http://localhost:8081/form-vote/${sifra}`, {observe:"response"});
  }

  sendForm(form:FormGroup):Observable<HttpResponse<object>>{
    let options = form.get('opcije') as FormArray;
    let length = options.length;

    for(let i=length; i >= 0; i--){
      if(options.value[i] === ''){
        options.removeAt(i);
      }
    }
    
    return this.http.post("http://localhost:8081/form-create/", form.value, {responseType:"json", observe:"response"});
  }
}
