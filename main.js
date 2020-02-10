(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingcomponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingcomponents", function() { return routingcomponents; });
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingcomponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <footer id=\"main-footer\" class=\"p-5 bg-dark text-white\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <a href=\"https://drive.google.com/file/d/1kYkDBMZLwcMMy39fLZtvvLqwKRwNWVtj/view?usp=sharing\" target=\"_blank\" class=\"btn btn-outline-light\">\n            <i class=\"fas fa-cloud\"></i>\n            Download Resume\n          </a>\n        </div>\n      </div>\n    </footer>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["routingcomponents"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactColor{\r\n      background-color:#3f4547 ;\r\n}\r\n\r\n.contactColor1{\r\n      background-color: #a3adad;\r\n}\r\n\r\n.lead{\r\n      text-indent: 80px\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"collapse\">\n  <div class=\"card card-body contactColor text-white py-5\">\n    <h2 class=\"text-center\">About Me</h2>\n    <p class=\"lead\">Hello, I am Sujitkumar Borse Graduate Student specializing in\n      industrial mathematics with computer application.<br>\n      Looking for job at position as front-end Developer.\n      I have <span class=\"text-warning\"> 1.5 years of experience </span> in Angular 6/7.</p>\n  </div>\n  <div class=\"card contactColor1\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Personal Details</h4>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Name : Sujitkumar Vinayakrao Borse\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          phone : (+91) 9028725588\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          DOB : 03rd June, 1993\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Address : Ft.No.10, Pashan Sadan Building, Pashan, Pune – 411021.\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Email ID : sujitkumarborse@gmail.com\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Marital Status : Unmarried\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Nationality : Indian\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Gender : Male\n        </p>\n        <p class=\"p-2 md-3 bg-dark text-white\">\n          Hobbies : Trekking, Cooking, Traveling\n        </p>\n      </div>\n    </div>\n  <!-- <div class=\"card card-body py-5\">\n    <h3>PERSONAL DETAILS</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos illo, dicta id voluptates enim.</p>\n    <form>\n      <div class=\"form-group\">\n        <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg-danger text-white\">\n              <i class=\"fas fa-user\"></i>\n            </span>\n          </div>\n          <input type=\"text\" class=\"form-control bg-dark text-white\" placeholder=\"Name\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg-danger text-white\">\n              <i class=\"fas fa-envelope\"></i>\n            </span>\n          </div>\n          <input type=\"email\" class=\"form-control bg-dark text-white\" placeholder=\"Email\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg-danger text-white\">\n              <i class=\"fas fa-pencil-alt\"></i>\n            </span>\n          </div>\n          <textarea class=\"form-control bg-dark text-white\" placeholder=\"Message\"></textarea>\n        </div>\n      </div>\n\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-danger btn-block btn-lg\">\n    </form>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-header img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  #main-header .port-item {\r\n    width: 25%;\r\n  }\r\n\r\n  #main-header .port-item:hover {\r\n    opacity: 0.8;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #main-header .p-4{\r\n  height: 108px;\r\n  text-align: center;\r\n  }\r\n\r\n  .bg-port-item1{\r\n    background-color: #00838F;\r\n  }\r\n\r\n  .bg-port-item2{\r\n    background-color: #2E7D32;\r\n  }\r\n\r\n  .bg-port-item3{\r\n    background-color: #FF8F00;\r\n  }\r\n\r\n  .bg-port-item4{\r\n    background-color: #c62828;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"main-header\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-lg-4 col-md-5\">\n      <img src=\"assets/img/sujitkumar.jpg\" alt=\"sujitkumar image\">\n    </div>\n    <div class=\"col-lg-8 col-md-7\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"p-5 bg-dark text-white\">\n          <div class=\"d-flex flex-row justify-content-between align-items-center\">\n            <h1 class=\"display-4\">Sujitkumar Borse</h1>\n            <div>\n              <a href=\"http://github.com\" target=\"_blank\" class=\"text-white\">\n                <i class=\"fab fa-github\"  style=\"font-size:30px;\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"p-4 bg-black\">\n         <Span class=\"text-warning\">Angular Developer</Span> <br> (Angular 6/7, Html/Html5, Css/Css3, JavaScript,Bootstrap 4)\n        </div>\n\n        <div>\n          <div class=\"d-flex flex-row text-white align-items-stretch text-center\">\n            <div class=\"port-item p-4 bg-port-item1\" data-toggle=\"collapse\" data-target=\"#home\" routerLink= \"/home\" routerLinkActive=\"active\">\n              <i class=\"fas fa-home fa-2x d-block\"></i>\n              <span class=\"d-none d-sm-block\">Home</span>\n            </div>\n            <div class=\"port-item p-4 bg-port-item2\" data-toggle=\"collapse\" data-target=\"#resume\" routerLink= \"/resume\" routerLinkActive=\"active\">\n              <i class=\"fas fa-graduation-cap fa-2x d-block\"></i>\n              <span class=\"d-none d-sm-block\">Resume</span>\n            </div>\n            <div class=\"port-item p-4 bg-port-item3\" data-toggle=\"collapse\" data-target=\"#work\" routerLink= \"/work\" routerLinkActive=\"active\">\n              <i class=\"fas fa-folder-open fa-2x d-block\"></i>\n              <span class=\"d-none d-sm-block\">Work</span>\n            </div>\n            <div class=\"port-item p-4 bg-port-item4\" data-toggle=\"collapse\" data-target=\"#contact\" routerLink= \"/contact\" routerLinkActive=\"active\">\n              <i class=\"fas fa-envelope fa-2x d-block\"></i>\n              <span class=\"d-none d-sm-block\">Contact</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeColor{\r\n      background-color:#3f4547;\r\n}\r\n.homeColor1{\r\n      background-color:#a3adad;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"collapse show\">\n  <div class=\"card card-body text-white py-5 homeColor\">\n    <h2 class=\"text-center\">Welcome To My Page</h2>\n    <!-- <p class=\"lead\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, tempora!</p> -->\n  </div>\n  <div class=\"card card-body py-5 homeColor1\">\n    <h3>My Skills</h3>\n    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, a est. Laborum soluta sit qui?</p> -->\n    <hr>\n    <h4>Html/Html5</h4>\n    <div class=\"progress mb-3\">\n      <div class=\"progress-bar bg-dark\" style=\"width:90%\"></div>\n    </div>\n    <h4>Css/Css3</h4>\n    <div class=\"progress mb-3\">\n      <div class=\"progress-bar bg-dark\" style=\"width:70%\"></div>\n    </div>\n    <h4>Javascript</h4>\n    <div class=\"progress mb-3\">\n      <div class=\"progress-bar bg-dark\" style=\"width:70%\"></div>\n    </div>\n    <h4>Bootstrap 4</h4>\n    <div class=\"progress mb-3\">\n      <div class=\"progress-bar bg-dark\" style=\"width:75%\"></div>\n    </div>\n    <h4>Angular 6/7</h4>\n    <div class=\"progress mb-3\">\n      <div class=\"progress-bar bg-dark\" style=\"width:80%\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron text-center\" style=\"background-color:rgb(136, 127, 127);\">\n  <h1>404 Not Found</h1>\n  <h4>You may be lost. Follow the breadcrumbs back <a routerLink=\"/\">Home</a>.</h4>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resumeColor{\r\n      background-color:#3f4547 ;\r\n}\r\n\r\n.resumeColor1{\r\n      background-color: #a3adad;\r\n}"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"resume\" class=\"collapse\">\r\n  <div class=\"card card-body resumeColor text-white py-5\">\r\n    <h2 class=\"text-center \">My Resume</h2>\r\n  </div>\r\n  <div class=\"card card-body resumeColor1 text-white py-5\">\r\n<pre>\r\n      \r\nName :- Sujitkumar Vinayakrao Borse\t                                                                       Mob.No :-  9028725588\r\nEmail ID :- sujitkumarborse@gmail.com\r\n        \r\n        \r\n<b style=\"font-size: 17px\">CARRIER OBJECTIVE_________________________________</b>\r\n        \r\n  Seeking a responsible position in an organization, Which gives me chance to improve knowledge, enhance my skills and enable me to \r\n  strive towards the overall development of the organization.\r\n        \r\n        \r\n<b style=\"font-size: 17px\">EDUCATIONAL QUALIFICATION________________________</b>\r\n\r\n        <table border=\"3px\"  style=\"border-color:rgb(251, 251, 251);text-align: center;\">\r\n            <tr>\r\n              <th> College/University</th>\r\n              <th> Exam</th>\r\n              <th> Years of Passing</th>\r\n<!--               <th> Percentage</th> -->\r\n              <th> Class </th>\r\n            </tr>\r\n            <tr>\r\n              <td> Maharashtra State Board </td>\r\n              <td> SSC </td>\r\n              <td> 2009 </td>\r\n<!--               <td> 83.69 </td> -->\r\n              <td> Distinction </td>\r\n            </tr>\r\n            <tr>\r\n                <td> Maharashtra State Board </td>\r\n                <td> HSC </td>\r\n                <td> 2011 </td>\r\n<!--                 <td> 45.05 </td> -->\r\n                <td> pass Class </td>\r\n            </tr>\r\n            <tr>\r\n                <td> Modern College,Pune </td>\r\n                <td> BSC(MATH) </td>\r\n                <td> 2015 </td>\r\n<!--                 <td> 72.25 </td> -->\r\n                <td> Distinction </td>\r\n            </tr>\r\n            <tr>\r\n                <td> Fergusson College,Pune </td>\r\n                <td> M.Tech(IMWCA) </td>\r\n                <td> 2018 </td>\r\n<!--                 <td> 59 </td> -->\r\n                <td> Higher Second Class </td>\r\n            </tr>\r\n        </table>\r\n\r\n<b style=\"font-size: 17px\">TECHNICAL SKILL____________________________________</b>\r\n        \r\nLanguages :\r\n            • Angular 6/7 \r\n            • JavaScript,\r\n            • HTML/HTML5,\r\n            • CSS/CSS3,\r\n            • Bootstrap 4\r\n        \r\n        \r\n<b style=\"font-size: 17px\">AREAS OF INTEREST : Web Development</b>\r\n        \r\n        \r\n<b style=\"font-size: 17px\">COLLEGE PROJECT__________________________________________</b>\r\n        \r\n        \r\nProject Name:\tOut Patient Department System (OPD System)\r\nTeam Size:\t3\r\nTechnologies:\tMEAN Stack(MongoDB, ExpressJS, Angular 4, Node.js)\r\n\r\nDescription:\r\n        \r\n    •Out Patient Department System is a web application for small Clinics. Basically it will be used by small to midsize medical\r\n     practitioners for keeping the patient details along with his/her appointment details and doctor details.\r\n    •The proposed system can be accessed from any corner of the world what you need is to get registered with OPD System.\r\n\r\n        \r\n      \r\n<b style=\"font-size: 17px\">PROJECTS________________________________</b>\r\n        \r\n(1)Project Name:  <b>CStoreBO</b>\r\nTechnologies:\t   Angular 6(Html/Html5, Css/Css3, JavaScript, Bootstrap4)\r\nResponsibility:   • Understanding business requirements.\r\n                  • Gathering Client Requirement.\r\n                  • Designing Web Pages.\r\n                  • Working on the change request.\r\n   \r\nDescription:  \r\n        \r\n    •cStore is an US based project. And it is intermediate in between CRM and fuel station to update\r\n     daily product price and offers. It is wrap up of CRM. and back office application for fuel station or gas station\r\n     management\r\n    •In CStoreBO we have developed a web application by using Angular 6 and MVC .Net. By using Angular 6 we have improved\r\n     the performance of application which was our main task. This project was mainly built for developed countries where Gas stations\r\n     and shops operates automatically using the systems with less human resources.\r\n     \r\n\r\n     \r\n(2)Project Name:  <b>CarSparc</b>\r\nTechnologies:\t   Angular 7(Html/Html5, Css/Css3, JavaScript, Bootstrap4)\r\nResponsibility:   • Understanding business requirements.\r\n                  • Gathering Client Requirement.\r\n                  • Designing Web Pages.\r\n                  • Working on the change request.\r\n   \r\nDescription:  \r\n        \r\n    •The aim of the project is to provide the car services which will be affordable to user. Also it is beneficial for the Service\r\n     center as it helps to bring more customers to be the part of that center.\r\n     \r\n     \r\n<b style=\"font-size: 17px\">PERSONAL DETAILS__________________________________</b>\r\n        \r\n        •\tDOB : 03rd June, 1993\r\n        •\tAddress : Ft.No.10, Pashan Sadan Building, Pashan, Pune – 411021.\r\n        •\tEmail ID : sujitkumarborse@gmail.com\r\n        •\tMarital Status : Unmarried \r\n        •\tNationality : Indian\r\n        •\tGender : Male\r\n        •\tHobbies : Trekking, Cooking, Traveling\r\n        \r\n\r\n\r\n\r\nDate:      \t                                                                                         Sujitkumar Vinayakrao Borse\r\n    </pre>\r\n  </div>\r\n  <div class=\"card card-body bg-success py-5\">\r\n    <h3>Where Have I Worked?</h3>\r\n    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditepudiandae debitis sit aperiam\r\n      magnam!</p> -->\r\n    <div class=\"card-deck\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Arnav Technosys</h4>\r\n          <!-- <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sit?</p> -->\r\n          <p class=\"p-2 md-3 bg-dark text-white\">\r\n            Position : UI Developer(Intern)\r\n          </p>\r\n          <p class=\"p-2 md-3 bg-dark text-white\">\r\n            Skills : Html/Html5, Css/Css3, Bootstrap 4, JavaScript\r\n          </p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <h6 class=\"text-muted\">Dates : Jan 2018 - June 2018</h6>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Arnav Technosys</h4>\r\n          <!-- <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sit?</p> -->\r\n          <p class=\"p-2 md-3 bg-dark text-white\">\r\n            Position : Angular Developer\r\n          </p>\r\n          <p class=\"p-2 md-3 bg-dark text-white\">\r\n            Skills : Angular 6/7, Html/Html5, Css/Css3, Bootstrap 4, JavaScript\r\n          </p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <h6 class=\"text-muted\">Dates : Aug 2018 - Present</h6>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".workColor{\r\n      background-color:#3f4547 ;\r\n}\r\n\r\n.workColor1{\r\n      background-color: #a3adad;\r\n}\r\n\r\n.col-md-6{\r\n      border: 3px solid rgb(255, 255, 255);\r\n      padding: 5px;\r\n}\r\n\r\n.col-md-12{\r\n      border: 4px solid rgb(255, 255, 255);\r\n}"

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"work\" class=\"collapse\">\n  <div class=\"card card-body workColor text-white py-5\">\n    <h2 class=\"text-center\">My Work</h2>\n    <!-- <p class=\"lead\">Lorem ipsum, dolor sit tempora!</p> -->\n  </div>\n  <div class=\"card card-body py-5 workColor1\">\n    <h3>What I Have Built </h3>\n    <hr>\n    <h4>(1)Project (college project) :</h4>\n    <p>Out Patient Department System (OPD System) </p>\n    <div class=\"row no-gutters p-4 \">\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img1.png\" alt=\"img1\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img2.png\" alt=\"img2\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img3.png\" alt=\"img3\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img4.png\" alt=\"img4\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img5.png\" alt=\"img5\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img6.png\" alt=\"img6\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img7.png\" alt=\"img7\" class=\"img-fluid\">\n        </a>\n      </div>\n    </div>\n    <hr>\n    <h4>(2)Project (Product):</h4>\n    <p>SafeOne Safety App For Womans (SafeOneApp) </p>\n    <div class=\"row no-gutters p-4 \">\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img8.PNG\" alt=\"img8\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img9.PNG\" alt=\"img9\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img10.PNG\" alt=\"img10\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img11.PNG\" alt=\"img11\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img12.PNG\" alt=\"img12\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/img13.PNG\" alt=\"img13\" class=\"img-fluid\">\n        </a>\n      </div>\n    </div>\n    <hr>\n    <h4>(3)Self Project:</h4>\n    <p> PhotoShop Gallary </p>\n    <div class=\"row no-gutters p-4 \">\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph1.PNG\" alt=\"Photograph1\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph2.PNG\" alt=\"Photograph2\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph3.PNG\" alt=\"Photograph3\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph4.PNG\" alt=\"Photograph4\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph5.PNG\" alt=\"Photograph5\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph6.PNG\" alt=\"Photograph6\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph7.PNG\" alt=\"Photograph7\" class=\"img-fluid\">\n        </a>\n      </div>\n      <div class=\"col-md-6\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/Photograph8.PNG\" alt=\"Photograph8\" class=\"img-fluid\">\n        </a>\n      </div>\n    </div>\n    <hr>\n    <h4>(4)Self Project :</h4>\n    <p>Static Website </p>\n    <div class=\"row no-gutters p-4 \">\n      <div class=\"col-md-12\">\n        <a data-toggle=\"lightbox\">\n          <img src=\"assets/img/simple_website.jpg\" alt=\"simple_website\" class=\"img-fluid\">\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Amol\Desktop\All Projects\sujitkumarprofile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map