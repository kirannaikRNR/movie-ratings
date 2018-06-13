import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_service/commonService';
import { appConfig } from '../_service/app.config';
import { Movie } from '../model/movie.model';
import {Router} from '@angular/router';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export class PageState {
  currentPage: number;
  pageSize: number;
  totalItems?: number;
  numberOfPages?: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [CommonService]
})
export class MoviesComponent implements OnInit {

  // movies: Movie[];
  movies :any = [];
  p: number = 1;
  currentUser;
  isValid;
  userId : number;

  // Keep track of LoggedUser
  public isUserAuthenticated = false;

  

constructor(
    private commonService : CommonService,
    private router: Router) {
    console.log('Constructor Invoked');
    console.log('MoviesComponent :Constructor invoked');
}

  ngOnInit() {
    this.getMovies();
  }

  checkUserloggedin(){
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
         if(this.currentUser){
         this.isUserAuthenticated = true;
         } else{
         this.isUserAuthenticated = false;
       }
   }

  updateRating(rating , id){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.commonService.updateRating(rating , id , currentUser.id).subscribe(
      data =>{
        this.getMovies();
      }, error => {
         console.log(error);
      });
  }
  

  getMovies(){
    this.checkUserloggedin();
    this.commonService.getMovies().subscribe(
      data =>{
        this.movies = data;
       }, error => {
         console.log(error);
      });
    }


  logout() {
    this.commonService.logout().subscribe(
        data => {
         localStorage.removeItem('currentUser');
         this.currentUser = null;
         this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      });
  }



  pageChange(pageState: PageState) {
    console.log('Page changed. Reload data with new paging values');
    // do whatever you need here
  }


  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    console.log(key)
    this.key = key;
    this.reverse = !this.reverse;
  }



}
