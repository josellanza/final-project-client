import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  feedbackEnabled = false;
  error = null;
  processing = false;
  userLogged = false;
  loginLoading = false;
  username: string;
  password: string;

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.login(this.username, this.password)
        .then((result) => {
          this.userLogged = true;
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error; //
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  ngOnInit() {
    this.loginLoading = true;
  }

}
