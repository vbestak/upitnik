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
    this.formService.sendForm(this.upitnik).subscribe((res)=>{
      console.log(res.body, "pppppp");
      
      this.router.navigateByUrl(`form-vote/${res.body['id']}`);
    });
  }

}
