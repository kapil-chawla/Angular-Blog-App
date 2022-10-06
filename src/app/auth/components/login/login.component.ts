import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/loginPayload';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRequest: LoginRequest;
  errorMsg: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    this.loginRequest = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.loginRequest.username = this.loginForm.get('username')?.value;
    this.loginRequest.password = this.loginForm.get('password')?.value;
    this.authService.login(this.loginRequest).subscribe({
      next: (data) => {
        console.log(data);
        if (data) this.router.navigateByUrl('/home');
        else this.errorMsg = 'Username or password incorrect';
      },
      error: (err) => {
        this.errorMsg = 'Someting went wrong!';
        console.error(err);
      },
    });
  }
}
