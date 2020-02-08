import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  AuthentificationService
} from 'src/app/services/authentification.service';
import {
  User
} from 'src/app/models/User';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: Observable<User>;
  subscriptions:Subscription = new Subscription();

  welcomeMessage: String[] = "Welcome to strawpoll!".split("");
  userAnimation: boolean = true;
  minimize: boolean[] = new Array(this.welcomeMessage.length).fill(true);
  interval;

  constructor(private authService: AuthentificationService) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
        this.user = this.authService.getUser();
    }

    let i = 0;
    this.interval = setInterval(() => {
      this.minimize[i] = false;
      i++;

      if (i == this.welcomeMessage.length) {
        clearInterval(this.interval);
        this.userAnimation = false
      }
    }, 16);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.subscriptions.unsubscribe();
  }

}
