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

  editComment(comment:Comment):Observable<HttpResponse<object>>{
    return this.http.put(`/rcomment/`, comment, {observe:"response"});
  }

  deleteComment(id:number):Observable<HttpResponse<object>>{
    return this.http.delete(`/rcomment/${id}`, {observe:"response"});
  }

  getComments(idUpitnik:number):Observable<HttpResponse<object>>{
    return this.http.get(`/rcomment/comments/${idUpitnik}`, {observe:"response"})
  }

  addComment(comment:String, idUpitnik:number):Observable<HttpResponse<object>>{
    return this.http.post('/rcomment', {comment:comment, idUpitnik:idUpitnik}, {observe:"response"});
  }

  vote(form:NgForm):Observable<HttpResponse<string>>{
    return this.http.post('/rform-vote/vote', form.value, {observe:'response', responseType:"text"});
  }

  deleteUpitnik(id:number){
    return this.http.delete(`/rmy-forms/${id}`);
  }

  getUpitnici():Observable<HttpResponse<object>>{
    return this.http.get(`/rmy-forms/upitnici`, {observe:"response"});
  }

  getUpitnik(sifra:String):Observable<HttpResponse<object>>{
    return this.http.get(`/rform-vote/upitnik/${sifra}`, {observe:"response"});
  }

  sendForm(form:FormGroup):Observable<HttpResponse<object>>{
    let options = form.get('opcije') as FormArray;
    let length = options.length;

    for(let i=length; i >= 0; i--){
      if(options.value[i] === ''){
        options.removeAt(i);
      }
    }
    
    return this.http.post("/rform-create/", form.value, {responseType:"json", observe:"response"});
  }
}
