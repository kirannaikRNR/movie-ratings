import { Component, OnInit } from '@angular/core';
import { Registration } from '../model/register.model';
import {Router} from '@angular/router';
import { CommonService } from '../_service/commonService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [CommonService]
})
export class RegistrationComponent implements OnInit {

   // form: FormGroup;
  isValid: any = '';
  registration: Registration;
  // errorMessage: string = '';
  dupliateEmail: boolean = false;
  

  constructor(
    private commonService : CommonService,
    private router: Router) {
    this.registration = new Registration();
  }

  ngOnInit() {}

  Registration() {
      if(this.registration){
        console.log(this.registration);
        this.commonService.RegisterUser(this.registration.firstName, this.registration.lastName, this.registration.email, this.registration.password).subscribe(
          data =>{
           localStorage.setItem('currentUser', JSON.stringify(data));
           this.router.navigate(['/movies']);
        // this.getMovies();
           }, error => {
           this.dupliateEmail = true;
           // this.errorMessage = error.error.error;
          });
     }
  }

}

