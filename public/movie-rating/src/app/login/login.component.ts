import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonService } from '../_service/commonService';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CommonService]
})

export class LoginComponent implements OnInit {
   // form: FormGroup;

  login: Login;
  message: string = '';
  isWorngPassword: boolean = false;

  constructor(private router: Router,
              private commonService : CommonService) {
              this.login = new Login();
              console.log('Constructor Invoked');
              console.log('LoginComponent :Constructor invoked');
  }

  ngOnInit() {
  }

  // forgotpassword() {
  //   this.router.navigate(['/forgotpassword']);
  // }
  

  signIn() {
    if(this.login){
       this.commonService.loginUser(this.login.email, this.login.password).subscribe(
         data => {
           localStorage.setItem('currentUser', JSON.stringify(data));
           this.router.navigate(['/movies']);
      }, error => {
           this.isWorngPassword = true;
           this.message = error.error.error;
      });
    }
  }

}

