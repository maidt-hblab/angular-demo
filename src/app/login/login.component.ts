import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// export function fobbidenUserName(users: any = []) {
//   return (c: AbstractControl) => {
//     return (users.includes(c.value)) ? {
//       invalidUserName: true
//     } : null;
//   };
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any;

  constructor(
    private fb: FormBuilder,
    private authServive: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({  
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  loginComplete(res: any) {
    if(res) {
      this.authServive.setAuth(true);
      this.formLogin.reset();
      this.router.navigate(['/']);
    }
  }

  onSubmit(form: any) {
   this.authServive.login(form).subscribe(arg => this.loginComplete(arg));
  }

  goRegister() {
    this.router.navigate(['/register']);
  }

}
