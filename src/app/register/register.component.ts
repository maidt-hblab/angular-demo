import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

function comparePassword(c: AbstractControl) {
  const value = c.value;
  return (value.password === value.confirmPassword) ? null : {
    passwordNotMatch: true,
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: any;

  constructor(
    private router: Router,
    private formBd: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBd.group({
      name: ['', [ Validators.required, Validators.minLength(3)]],
      email: ['', [ Validators.required, Validators.email]],
      pw: this.formBd.group({
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]]
        },{
          validator: comparePassword
        }),
    });
  }

  completeRegister(res: any) {
    if(res.data) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(form: any) {
    this.authService.register(form).subscribe(res => this.completeRegister(res));
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

}
