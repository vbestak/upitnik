import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Upitnik } from 'src/app/models/upitnik';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upitnik-vote',
  templateUrl: './upitnik-vote.component.html',
  styleUrls: ['./upitnik-vote.component.css']
})
export class UpitnikVoteComponent implements OnInit, OnDestroy {
  @Input() upitnik:Upitnik;
  subscriptions:Subscription = new Subscription();
  results:boolean = false;
  fullUrl:string = window.location.href;
  intervalVote;
  
  constructor(private formService:FormService, private aRoute:ActivatedRoute, private router:Router) {}
  
  ngOnInit() { }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    clearInterval(this.intervalVote);
  }

  copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  getResults(){
    this.results = true;
    //refreshaj i trazi rezultate
    this.intervalVote = setInterval(()=>{
      this.subscriptions.add(this.formService.getUpitnik(this.upitnik.sifra).subscribe((res)=>{
        this.upitnik = res.body as Upitnik;
      }));
    }, 500);
  }

  totalVotes():number{
    return this.upitnik.opcije.map(opcija => opcija.glasovi).reduce((acc, curr)=>{return acc+curr});
  }

  vote(form:NgForm){
    this.formService.vote(form).subscribe((res)=>{this.getResults()});
  }

}
