webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_service/commonService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/';
        console.log('CommonService Invoked');
        console.log('CommonService :Constructor invoked');
    }
    // public url: string = 'http://localhost:3000/users/';
    CommonService.prototype.loginUser = function (email, password) {
        var userJson = {
            'email': email,
            'password': password
        };
        return this.http.post(this.url + 'users/login', userJson);
    };
    CommonService.prototype.getMovies = function () {
        return this.http.get(this.url + 'moviesRouter/getAll');
    };
    CommonService.prototype.RegisterUser = function (firstName, lastName, email, password) {
        var userJson = {
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'password': password,
            're_password': password
        };
        return this.http.post(this.url + 'users/register', userJson);
    };
    CommonService.prototype.logout = function () {
        return this.http.get(this.url + 'users/logout');
    };
    CommonService.prototype.updateRating = function (rating, id, user_id) {
        var ratingJson = {
            'movie_id': id,
            'ratings': rating,
            'user_id': user_id
        };
        return this.http.post(this.url + "moviesRouter/rate_movie", ratingJson);
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead>tr>th {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.p = 1;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_commonService__ = __webpack_require__("../../../../../src/app/_service/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_rating__ = __webpack_require__("../../../../ngx-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_13_ngx_rating__["RatingModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__service_commonService__["a" /* CommonService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__movies_movies_component__["a" /* MoviesComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main-wrapper\">\n        <div class=\"main\">\n          <div class=\"main-inner\">\n            <div class=\"page-title\">\n              <div class=\"container\">\n                <h1><a [routerLink]=\"['']\" >Home</a>\n                </h1>\n              </div>\n              <!-- /.container-->\n            </div>\n            <!-- /.page-title -->\n            <div class=\"container\">\n\n              <div class=\"row mb80\">\n                <div class=\"col-sm-4 offset-sm-4\">\n                  <h3 class=\"page-title-small\">Login</h3>\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid && signIn()\" #f=\"ngForm\" novalidate>\n                        <!-- <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                            <label for=\"username\">Username</label>\n                            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"login.username\" #username=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                        </div> -->\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"login.email\" #email=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                        </div>\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"login.password\" #password=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n\n                            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                            <div *ngIf=\"isWorngPassword\" class=\"help-block\" style=\"color:#ff5722;\">{{message}}</div>\n                        </div>\n                    </form>\n                </div>\n                <!-- /.col-sm-4 -->\n              </div>\n              <!-- /.row -->\n            </div>\n            <!-- /.container-fluid -->\n          </div>\n          <!-- /.main-inner -->\n        </div>\n        <!-- /.main -->\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_commonService__ = __webpack_require__("../../../../../src/app/_service/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_login_model__ = __webpack_require__("../../../../../src/app/model/login.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, commonService) {
        this.router = router;
        this.commonService = commonService;
        this.message = '';
        this.isWorngPassword = false;
        this.login = new __WEBPACK_IMPORTED_MODULE_3__model_login_model__["a" /* Login */]();
        console.log('Constructor Invoked');
        console.log('LoginComponent :Constructor invoked');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // forgotpassword() {
    //   this.router.navigate(['/forgotpassword']);
    // }
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        if (this.login) {
            this.commonService.loginUser(this.login.email, this.login.password).subscribe(function (data) {
                localStorage.setItem('currentUser', JSON.stringify(data));
                _this.router.navigate(['/movies']);
            }, function (error) {
                _this.isWorngPassword = true;
                _this.message = error.error.error;
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_commonService__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_commonService__["a" /* CommonService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/login.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "../../../../../src/app/model/register.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration; });
var Registration = /** @class */ (function () {
    function Registration() {
    }
    return Registration;
}());



/***/ }),

/***/ "../../../../../src/app/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1\">\n    <link href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700\" rel=\"stylesheet\">\n\n  <title>Movie Reviews</title>\n  </head>\n  <body class=\"\">\n    <div class=\"page-wrapper\">\n      <div class=\"header-wrapper\">\n        <div class=\"header\">\n          <div class=\"container\">\n            <div class=\"header-inner\">\n\n              <!-- /.header-toggle -->\n              <div class=\"header-logo\">\n\n                <a class=\"header-title\">Test</a>\n              </div>\n\n            </div>\n            <!-- /.header-inner -->\n          </div>\n          <!-- /.container -->\n        </div>\n        <!-- /.header -->\n      </div>\n      <!-- /.header-wrapper -->\n      <div class=\"main-wrapper\">\n        <div class=\"main\">\n          <div class=\"main-inner\">\n            <div class=\"page-title\">\n              <div class=\"container\">\n                <h1>Movie Listings\n                </h1>\n                <div class=\"page-title-actions\">\n                  <div class=\"switcher\" *ngIf=\"isUserAuthenticated\">\n                    <strong ><a href=\"javascript:void(0)\" ><h1>{{currentUser.first_name}}</h1></a></strong>\n                  </div>\n\n                  <div class=\"switcher\" *ngIf=\"!isUserAuthenticated\">\n                    <strong ><a href=\"javascript:void(0)\"[routerLink]=\"['/login']\" ><h1>Login</h1></a></strong>\n                  </div>\n                  <div class=\"switcher\" *ngIf=\"isUserAuthenticated\">\n                    <strong ><a href=\"javascript:void(0)\" (click)=\"logout()\"><h1>Login out</h1></a></strong>\n                  </div>\n                  <!-- /.switcher -->\n                  <div class=\"switcher\" *ngIf=\"!isUserAuthenticated\">\n                    <strong ><a href=\"javascript:void(0)\" [routerLink]=\"['/register']\" ><h1>Sign Up</h1></a></strong>\n\n                  </div>\n                  <!-- /.switcher -->\n                </div>\n                <!-- /.page-title-actions -->\n              </div>\n              <!-- /.container-->\n            </div>\n            <!-- /.page-title -->\n            <div class=\"container\">\n\n              <div class=\"row\">\n                <div class=\"col-md-8 col-lg-9\">\n                  <div class=\"sort-options\">\n\n                    <ul class=\"sort-by\">\n                      <li class=\"active\"><a href=\"javascript:void(0)\" (click)=\"sort('name')\">Title <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n          </a></li>\n\n                      <li><a href=\"javascript:void(0)\" (click)=\"sort('year')\" >Date\n                        <span class=\"glyphicon sort-icon\" *ngIf=\"key =='year'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n            </a></li>\n                    </ul>\n                  </div>\n                  <!-- /.sort-options -->\n                  <div class=\"listing-row\" *ngFor=\"let movie of movies| orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n                    <div class=\"listing-row-inner\">\n                      <a class=\"listing-row-image\">\n                        <img class=\"listing-row-image-content\" [src]=\"movies.img\" alt=\"No Image\">\n                        <!-- <span class=\"listing-row-image-content\" [src]=\"{{movie.img}}\"></span> -->\n                      </a>\n                      <div class=\"listing-row-content\">\n                        <div class=\"listing-row-content-header\">\n                          <h3>{{movie.name}}</h3>\n\n\n                        </div>\n                        <!-- /.listing-row-content-header -->\n                        <div class=\"listing-row-content-meta\">\n                          <div class=\"listing-row-content-meta-item listing-row-content-meta-rating\" >\n                            <span class=\"listing-row-rating\" *ngIf=\"isUserAuthenticated\">\n                            <a href=\"javascript:void(0)\">  <!-- <i class=\"glyphicon glyphicon-star\" *ngFor=\"let dummy of ' '.repeat(movie.avg_rating).split(''), let x = \"index\"></i> -->\n                             <rating [(ngModel)]=\"movie.avg_rating\" (click)=\"updateRating(movie.avg_rating, movie.id)\" [max]=\"5\"></rating>\n                        </a>    </span>\n\n                        <span class=\"listing-row-rating\" *ngIf=\"!isUserAuthenticated\">\n                        <!-- <i class=\"glyphicon glyphicon-star\" *ngFor=\"let dummy of ' '.repeat(movie.avg_rating).split(''), let x = \"index\"></i> -->\n                            <rating [(ngModel)]=\"movie.avg_rating\" [readonly]=\"true\" [max]=\"5\"></rating>\n                       </span>\n                          </div>\n                          <!-- /.listing-row-meta-item -->\n\n                          <!-- /.listing-row-meta-item -->\n                          <div class=\"listing-row-content-meta-item listing-row-content-meta-category\">\n                            <span class=\"tag\">{{movie.actor_name}}</span>\n                          </div>\n                           <div class=\"listing-row-content-meta-item listing-row-content-meta-category\">\n                            <span class=\"tag\">{{movie.year}}</span>\n                          </div>\n                          <!-- /.listing-row-meta-item -->\n                        </div>\n                        <!-- /.listing-row-meta-item -->\n                        <div class=\"listing-row-content-body\">\n                          {{movie.description}}\n                          <!-- <div class=\"listing-row-content-read-more\">\n                            <a href=\"listings-detail.html\">Read more</a>\n                          </div> -->\n                          <!-- /.listing-row-content-read-more -->\n                        </div>\n                        <!-- /.listing-row-content-body -->\n                      </div>\n                      <!-- /.listing-row-content -->\n                    </div>\n                    <!-- /.listing-row-inner -->\n                  </div>\n                  <!-- /.listing-row -->\n\n                  <ul class=\"pagination pull-right\">\n                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </ul>\n\n                </div>\n                <!-- /.col -->\n                <div class=\"col-md-4 col-lg-3\">\n                  <div class=\"sidebar\">\n                    <div class=\"widget\">\n                      <h3 class=\"widgettitle\">Filter Listings</h3>\n                      <div class=\"filter\">\n\n\n                          <div class=\"form-group\">\n\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filter\" name=\"search\" placeholder=\"Search by Title ...\">\n                          </div>\n                      </div>\n                      <!-- /.filter -->\n                    </div>\n                    <!-- /.widget -->\n                  </div>\n                  <!-- /.sidebbar -->\n                </div>\n                <!-- /.col-* -->\n              </div>\n              <!-- /.row -->\n            </div>\n            <!-- /.container-fluid -->\n          </div>\n          <!-- /.main-inner -->\n        </div>\n        <!-- /.main -->\n      </div>\n      <!-- /.main-wrapper -->\n      <div class=\"footer-wrapper\">\n        <div class=\"footer\">\n          <div class=\"footer-inner\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"widget\">\n\n                  </div>\n                </div>\n                <!-- /.col-* -->\n\n                <!-- /.col-* -->\n              </div>\n              <!-- /.row -->\n            </div>\n            <!-- /.container -->\n          </div>\n          <!-- /.footer-inner -->\n        </div>\n        <!-- /.footer -->\n      </div>\n      <!-- /.footer-wrapper -->\n    </div>\n    <!-- /.page-wrapper -->\n\n\n\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_commonService__ = __webpack_require__("../../../../../src/app/_service/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
var PageState = /** @class */ (function () {
    function PageState() {
    }
    return PageState;
}());

var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        // movies: Movie[];
        this.movies = [];
        this.p = 1;
        // Keep track of LoggedUser
        this.isUserAuthenticated = false;
        this.key = 'name'; //set default
        this.reverse = false;
        console.log('Constructor Invoked');
        console.log('MoviesComponent :Constructor invoked');
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MoviesComponent.prototype.checkUserloggedin = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser) {
            this.isUserAuthenticated = true;
        }
        else {
            this.isUserAuthenticated = false;
        }
    };
    MoviesComponent.prototype.updateRating = function (rating, id) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.commonService.updateRating(rating, id, currentUser.id).subscribe(function (data) {
            _this.getMovies();
        }, function (error) {
            console.log(error);
        });
    };
    MoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.checkUserloggedin();
        this.commonService.getMovies().subscribe(function (data) {
            _this.movies = data;
        }, function (error) {
            console.log(error);
        });
    };
    MoviesComponent.prototype.logout = function () {
        var _this = this;
        this.commonService.logout().subscribe(function (data) {
            localStorage.removeItem('currentUser');
            _this.currentUser = null;
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
        });
    };
    MoviesComponent.prototype.pageChange = function (pageState) {
        console.log('Page changed. Reload data with new paging values');
        // do whatever you need here
    };
    MoviesComponent.prototype.sort = function (key) {
        console.log(key);
        this.key = key;
        this.reverse = !this.reverse;
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__("../../../../../src/app/movies/movies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movies/movies.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_commonService__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-wrapper\">\n        <div class=\"main\">\n          <div class=\"main-inner\">\n            <div class=\"page-title\">\n              <div class=\"container\">\n                <a [routerLink]=\"['']\" >Home</a>\n              </div>\n              <!-- /.container-->\n            </div>\n            <!-- /.page-title -->\n            <div class=\"container\">\n\n              <div class=\"row mb80\">\n                <div class=\"col-sm-4 offset-sm-4\">\n                  <h3 class=\"page-title-small\">Registration</h3>\n                  <form name=\"form\" (ngSubmit)=\"f.form.valid && Registration()\" #f=\"ngForm\" novalidate>\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n                          <label for=\"firstName\">First Name</label>\n                          <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"registration.firstName\" #firstName=\"ngModel\" required />\n                          <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n                      </div>\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n                          <label for=\"lastName\">Last Name</label>\n                          <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"registration.lastName\" #lastName=\"ngModel\" required />\n                          <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n                      </div>\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"registration.email\" #email=\"ngModel\" required />\n                          <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">email is required</div>\n                      </div>\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                          <label for=\"password\">Password</label>\n                          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"registration.password\" #password=\"ngModel\" required />\n                          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                      </div>\n                      <div class=\"form-group\">\n                          <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                          <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                          <div *ngIf=\"dupliateEmail\" class=\"help-block\" style=\"color:#ff5722;\">Email Already Registered.</div>\n                      </div>\n                  </form>\n                </div>\n                <!-- /.col-sm-4 -->\n              </div>\n              <!-- /.row -->\n            </div>\n            <!-- /.container-fluid -->\n          </div>\n          <!-- /.main-inner -->\n        </div>\n        <!-- /.main -->\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_register_model__ = __webpack_require__("../../../../../src/app/model/register.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_commonService__ = __webpack_require__("../../../../../src/app/_service/commonService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        // form: FormGroup;
        this.isValid = '';
        // errorMessage: string = '';
        this.dupliateEmail = false;
        this.registration = new __WEBPACK_IMPORTED_MODULE_1__model_register_model__["a" /* Registration */]();
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.Registration = function () {
        var _this = this;
        if (this.registration) {
            console.log(this.registration);
            this.commonService.RegisterUser(this.registration.firstName, this.registration.lastName, this.registration.email, this.registration.password).subscribe(function (data) {
                localStorage.setItem('currentUser', JSON.stringify(data));
                _this.router.navigate(['/movies']);
                // this.getMovies();
            }, function (error) {
                _this.dupliateEmail = true;
                // this.errorMessage = error.error.error;
            });
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_commonService__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map