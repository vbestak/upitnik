import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  AuthentificationService
} from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerDescription: Object = {
    username: "",
    email: ""
  };
  usernameMinLength = 5;
  passwordMinLength = 5;
  passwordMatch = true;
  sentAndInvalid = false;
  credentials: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService, private router:Router) {
    this.credentials = fb.group({
      username: ['', [Validators.required, Validators.minLength(this.usernameMinLength)]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  checkIfPasswordsMatch() {
    this.passwordMatch = (this.credentials.value.password == this.credentials.value.passwordRepeat);
  }

  invalidTouchedControl(controlName: string) {
    return this.credentials.get(controlName).errors && this.credentials.get(controlName).touched;
  }

  register(form: FormGroup) {
    this.checkIfPasswordsMatch();

    if (form.valid && this.passwordMatch)
      this.authService.register(form.value).subscribe(d => {
        if (d.body['status'] == 'OK') {
          this.authService.user.next(d.body['user'] as User);
          this.authService.token = d.body['token'];
          sessionStorage.setItem('token', this.authService.token);
          this.router.navigateByUrl("/");
        } else {
          this.registerDescription = d.body['description'];
        }
      });

    else
      this.sentAndInvalid = true;
  }

}
