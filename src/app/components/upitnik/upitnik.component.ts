import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { RouterLink, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upitnik',
  templateUrl: './upitnik.component.html',
  styleUrls: ['./upitnik.component.css']
})
export class UpitnikComponent implements OnInit {
  upitnik:FormGroup;
  flaggFilled:boolean = true;

  constructor(private fb:FormBuilder, private formService:FormService, private router:Router) { }

  ngOnInit() {
    this.upitnik = this.fb.group({
      naslov:['', Validators.required],
      opcije:this.fb.array([
        this.fb.control(''),
        this.fb.control('')
      ])
    });
  }

  getOption():FormArray {
    return this.upitnik.get('opcije') as FormArray;
  }

  addOption(index:number) {
    if( (index+1) === this.getOption().length)
      this.getOption().push(this.fb.control(''));
  }

  sendForm(){
    let options = this.getOption();
    let length = options.length - 1;
    let filled = 0;
    
    for(let i=length; i >= 0; i--){
      if(options.value[i] != ''){
        filled+=1;
      }
    }

    if(filled >= 2){
      this.flaggFilled = true;
      this.formService.sendForm(this.upitnik).subscribe((res)=>{  
        setTimeout(() => {
          this.router.navigateByUrl(`form-vote/${res.body['id']}`);
        }, 500);    
      });
    }else{
      this.flaggFilled = false;
    }
    
  }

}
