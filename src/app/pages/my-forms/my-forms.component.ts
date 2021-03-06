import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Subscription, Observable } from 'rxjs';
import { Upitnik } from 'src/app/models/upitnik';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {
  upitnici:Upitnik[] = new Array<Upitnik>();
  checked:boolean = false;

  constructor(private formService:FormService) {
    this.formService.getUpitnici().subscribe((res)=>{
      this.upitnici = res.body as Upitnik[];
      this.checked = true;
    });
   }

  ngOnInit() {  }

  deleteUpitnik(idUpitnik:number){
    this.formService.deleteUpitnik(idUpitnik).subscribe((res)=>{
      let index = this.upitnici.map((up)=>up.idUpitnik).indexOf(idUpitnik);
      this.upitnici.splice(index, 1);
    });
    
  }

}
