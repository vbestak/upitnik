import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Upitnik } from 'src/app/models/upitnik';
import { Subscription, Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-form-vote',
  templateUrl: './form-vote.component.html',
  styleUrls: ['./form-vote.component.css']
})
export class FormVoteComponent implements OnInit, OnDestroy {

  subscriptions:Subscription = new Subscription();
  upitnik:Upitnik = new Upitnik();
  id:string;
  newComment:String;
  comments:Comment[];
  user:User;

  constructor(private formService:FormService, private aRoute:ActivatedRoute, private router:Router, private authService:AuthentificationService) { 
    this.comments = new Array<Comment>();
    this.authService.getUser().subscribe((user)=>{
      this.user = user;
    }); 
  }

  ngOnInit() {
    let s = this.aRoute.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.subscriptions.add(this.formService.getUpitnik(this.id).subscribe((res)=>{
          this.upitnik = res.body as Upitnik; 
          
          if(this.upitnik == null)
            this.router.navigateByUrl("/");
          else
           this.getComments();
        }));
    });
    this.subscriptions.add(s);
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  editComment(comment:Comment){
    this.formService.editComment(comment).subscribe((res)=>{
      this.getComments();
    });    
  }

  deleteComment(id:number){
    this.formService.deleteComment(id).subscribe((res)=>{this.getComments();});
  }

  getComments(){
    this.subscriptions.add(this.formService.getComments(this.upitnik.idUpitnik).subscribe((res)=>{              
      this.comments = res.body['comments'] as Comment[];
      this.comments.reverse();
    }))
  }

  addComment(){
    this.formService.addComment(this.newComment, this.upitnik.idUpitnik).subscribe((res)=>{ this.newComment = ""; this.getComments();});
  }

}
