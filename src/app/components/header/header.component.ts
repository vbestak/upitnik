import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private authService:AuthentificationService) { 
  }

  ngOnDestroy(){
  }

  ngOnInit() {
  }
}
