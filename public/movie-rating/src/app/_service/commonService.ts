import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Movie } from '../model/movie.model';

@Injectable()
export class CommonService {

  public url: string = 'http://localhost:3000/';

    constructor(private http: HttpClient) { 
                console.log('CommonService Invoked');
                console.log('CommonService :Constructor invoked');

    }

// public url: string = 'http://localhost:3000/users/';

    loginUser(email, password) {
        let userJson = {
            'email': email,
            'password': password
        };
        return this.http.post(this.url + 'users/login', userJson);
    }

    getMovies(){
      return this.http.get(this.url +  'moviesRouter/getAll');
    }

    RegisterUser(firstName, lastName, email, password){
      const userJson = {
           'first_name': firstName,
           'last_name': lastName,
            'email': email,
            'password': password,
            're_password': password
        };
        return this.http.post(this.url +  'users/register', userJson);
    }

    logout(){
      return this.http.get(this.url +  'users/logout');
    }

    updateRating (rating, id , user_id){
        const ratingJson = {
           'movie_id': id,
           'ratings': rating,
           'user_id': user_id
        };
       return this.http.post(this.url +  "moviesRouter/rate_movie", ratingJson);
      }  

}
