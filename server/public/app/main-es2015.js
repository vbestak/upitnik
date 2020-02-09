(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    {{comment.imeKorisnik}} at {{ comment.datum | date:\"MM/dd/yy HH:mm\" }}h\n  </div>\n  <div class=\"card-body\">\n    <div *ngIf=\"!edit\">\n      {{comment.comment}}\n    </div>\n    <div *ngIf=\"edit\" class=\"md-form\">\n      <textarea [(ngModel)]=\"comment.comment\" class=\"md-textarea form-control\"></textarea>\n    </div>\n\n    <div class=\"float-right\">\n      <button *ngIf=\"canEdit()\" (click)=\"edit = true\" class=\"btn btn-info\" style=\"margin-right: 6px;\">Edit</button>\n      <button *ngIf=\"edit\" (click)=\"editComment()\" class=\"btn btn-success\" style=\"margin-right: 6px;\">Finish editing</button>\n\n      <button *ngIf=\"canDelete()\" [disabled]=\"edit\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"bg-dark custom text-center\">\n    <div>Napravio: Valentino Beštak</div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav class=\"navbar navbar-expand navbar-custom bg-dark\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/' ]\">Home</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/form-create' ]\">Create</a>\n      <a *ngIf=\"authService.isAuthenticated()\" class=\"nav-item nav-link\" [routerLink]=\"[ '/my-forms' ]\">MySPolls</a>\n    </div>\n\n    <div *ngIf=\"!authService.isAuthenticated()\" class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/login' ]\">Login</a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"[ '/register' ]\">Register</a>\n    </div>\n\n    <div *ngIf=\"authService.isAuthenticated()\"  class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link btn btn-danger\" (click)=\"authService.logout()\" [routerLink]=\"[ '/' ]\">Logout</a>\n    </div>\n\n  </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loginDescription\" class=\"alert alert-danger\">\n    {{loginDescription}}\n</div>\n\n<form #form=\"ngForm\" (ngSubmit)=\"login(form)\" novalidate>\n    <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <div>\n            <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" ngModel>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"password\">Password:</label>\n        <div>\n            <input class=\"form-control\" id=\"password\" type=\"password\" name=\"password\" ngModel>\n        </div>\n    </div>\n\n    <div>\n        <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n        <button class=\"btn btn-info\" [routerLink]=\"[ '/register' ]\" type=\"button\">Register</button>\n    </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-danger\" *ngIf=\"sentAndInvalid\">\n  Please fill in data.\n</div>\n\n<form [formGroup]=\"credentials\" (ngSubmit)=\"register(credentials)\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <div [ngClass]=\"{'alert alert-danger': registerDescription.username || invalidTouchedControl('username')}\">\n      <div *ngIf=\"registerDescription.username\">\n        {{registerDescription.username}}\n      </div>\n\n      <div *ngIf=\"credentials.get('username').hasError('required') && invalidTouchedControl('username')\">\n        Username is required.\n      </div>\n      \n      <div *ngIf=\"credentials.get('username').hasError('minlength') && invalidTouchedControl('username')\">\n        Username must have at least {{usernameMinLength}} characters.\n      </div>\n\n\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\">Email:</label>\n\n    <div [ngClass]=\"{'alert alert-danger': registerDescription.email || invalidTouchedControl('email')}\">\n      <div *ngIf=\"registerDescription.email\">\n        {{registerDescription.email}}\n      </div>\n\n      <div *ngIf=\"credentials.get('email').hasError('required') && invalidTouchedControl('email')\">\n        Email is required.\n      </div>\n      \n      <div *ngIf=\"credentials.get('email').hasError('email') && invalidTouchedControl('email')\">\n        Please type valid email.\n      </div>\n\n      <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\">\n    </div>\n  </div>\n\n  <div class=\"form-group form-inline\">\n    <div class=\"col-6\">\n      <label for=\"password\">Password:</label>\n      <div [ngClass]=\"{'alert alert-danger': invalidTouchedControl('password')}\">\n        \n        <div *ngIf=\"credentials.get('password').hasError('required') && invalidTouchedControl('password')\">\n         Password is required.\n        </div>\n        \n        <div *ngIf=\"credentials.get('password').hasError('minlength') && invalidTouchedControl('password')\">\n          Password must have at least {{passwordMinLength}} characters.\n        </div>\n\n\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\">\n      </div>\n    </div>\n\n    <div class=\"col-6\">\n      <label for=\"password\">Repeat password:</label>\n      <div [ngClass]=\"{'alert alert-danger': !passwordMatch }\">\n        <div *ngIf=\"!passwordMatch\">\n          Passwords must match!\n        </div>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"passwordRepeat\">\n      </div>\n    </div>\n  </div>\n\n\n  <div>\n    <button class=\"btn btn-info\" type=\"submit\">Register</button>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik-view/upitnik-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik-view/upitnik-view.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"alert alert-info clearfix\">\n      <span class=\"float-left\">\n        {{upitnik.naslov}}\n      </span>\n\n      <button class=\"btn btn-danger btn-sm float-right\" (click)=\"delete.emit(upitnik.idUpitnik)\">Delete</button>\n      <button class=\"btn btn-success btn-sm float-right\" [routerLink]=\"[ '/form-vote', upitnik.sifra ]\">Go to</button>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik-vote/upitnik-vote.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik-vote/upitnik-vote.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2> {{ upitnik.naslov }} </h2>\n\n<form *ngIf=\"!results; else res\" #form=\"ngForm\" (ngSubmit)=\"vote(form)\" novalidate>\n    <div *ngFor=\"let opcija of upitnik.opcije\">\n        <label class=\"form-check-label\">\n          <input class=\"form-control-input\" type=\"radio\" name=\"opcije\" [value]=\"opcija.idOpcije\" ngModel> {{opcija.opcija}}\n        </label>\n    </div>\n    <div class=\"container-buttons\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.dirty\">Vote</button>\n      <button class=\"btn btn-info\" type=\"button\" (click)=\"getResults()\">Results</button>\n    </div>\n</form>\n\n<ng-template #res>\n<div>\n  <div *ngFor=\"let opcija of upitnik.opcije\">\n    <p>{{opcija.opcija}}: {{opcija.glasovi/totalVotes() | percent:'1.0-2'}} ({{opcija.glasovi + (opcija.glasovi === 1 ? \" vote\" : \" votes\")}})</p>\n    <div class=\"progress\">\n      <div class=\"progress-bar\"  [ngStyle]=\"{'width.%':opcija.glasovi * 100 / totalVotes()}\"> &nbsp; </div>\n    </div>\n  </div>\n\n  <p>Total votes: {{totalVotes()}} </p>\n</div>\n</ng-template>\n\n<div class=\"container-sharing\">\n  <div>\n    <span>\n      Share this strawpool.\n    </span>\n    <span>\n      Link: &nbsp; \"<span class=\"link\">{{fullUrl}}</span>\" &nbsp;  \n    </span>\n  </div>\n\n  <button class=\"btn btn-info\" (click)=\"copyToClipboard(fullUrl)\">Copy link</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik/upitnik.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik/upitnik.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div *ngIf=\"!flaggFilled\" class=\"alert alert-danger\">\n    Please enter at least 2 options.\n  </div>\n\n  <form [formGroup]=\"upitnik\" (ngSubmit)=\"sendForm()\">\n    <div class=\"form-group\">\n      <input class=\"form-control form-control-lg\" type=\"text\" formControlName=\"naslov\" placeholder=\"Type your question here\">\n    </div>\n\n    <div formGroupName=\"opcije\">\n      <div class=\"form-group\" *ngFor=\"let option of getOption().controls; index as i\">\n        <input class=\"form-control\" type=\"text\" [formControl]=\"getOption().controls[i]\" placeholder=\"Enter pool option\"\n          (focus)=\"addOption(i)\">\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" [disabled]=\"upitnik.invalid\" type=\"submit\">Pošalji</button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-create/form-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-create/form-create.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-custom\">\n  <div class=\"upitnik-container\">\n    <h2>\n      Create your strawpoll:\n    </h2>\n    <app-upitnik></app-upitnik>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-vote/form-vote.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-vote/form-vote.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-custom\">\n  <div class=\"upitnik-container\">\n    <div>\n      <app-upitnik-vote [upitnik]=\"upitnik\"></app-upitnik-vote>\n    </div>\n  </div>\n\n  <div class=\"comments-container\">\n    <div class=\"md-form\">\n        <label for=\"comment\">Comment:</label>\n        <textarea [(ngModel)]=\"newComment\" id=\"comment\" class=\"md-textarea form-control\" rows=\"3\" placeholder=\"Text...\"></textarea>\n        \n        <div style=\"margin-top: 8px;\">\n            <button (click)=\"addComment()\" class=\"btn btn-success\">Add comment</button>\n        </div>\n    </div>\n    \n    <br>\n    <div>\n        <div *ngIf=\"comments.length == 0\" class=\"alert alert-info\">\n            No comments\n        </div>\n\n        <div *ngFor=\"let comment of comments\" style=\"margin-top: 12px;\">\n            <app-comment (eComment)=\"editComment($event)\" (deleteComment)=\"deleteComment($event)\" [comment]=\"comment\" [idKorisnikaUpita]=\"upitnik.idKorisnik\" [user]=\"user\"></app-comment>\n        </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-container\">\n  <div>\n    <h2>\n      <span *ngFor=\"let letter of welcomeMessage; index as i\" [ngClass]=\"{'minimize': minimize[i]}\">\n        {{letter}}\n        <span *ngIf=\"letter == ' '\">\n          &nbsp;\n        </span>\n      </span>\n    </h2>\n  </div>\n  <div>\n    <button class=\"btn btn-success\" *ngIf=\"!authService.isAuthenticated()\" [routerLink]=\"[ '/login' ]\">Login</button>\n    <h2 *ngIf=\"authService.isAuthenticated()\">\n      <span [ngClass]=\"{minimize: userAnimation}\">\n          {{user.value.ime || \"User\"}}\n      </span>\n    </h2>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-custom\">\r\n    <div class=\"form-container\">\r\n        <app-login-form></app-login-form>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-forms/my-forms.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-forms/my-forms.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding: 26px 12px;\">\n    <h3>My straw pools:</h3>\n    <div class=\"alert alert-danger\" *ngIf=\"upitnici.length == 0\">\n        You dont have any polls!\n    </div>\n    <div *ngFor=\"let upitnik of upitnici\">\n        <app-upitnik-view (delete)=\"deleteUpitnik($event)\" [upitnik]=\"upitnik\"></app-upitnik-view>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-custom\">\r\n  <div class=\"form-container\">\r\n    <app-register-form></app-register-form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_form_create_form_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/form-create/form-create.component */ "./src/app/pages/form-create/form-create.component.ts");
/* harmony import */ var _pages_form_vote_form_vote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/form-vote/form-vote.component */ "./src/app/pages/form-vote/form-vote.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_my_forms_my_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/my-forms/my-forms.component */ "./src/app/pages/my-forms/my-forms.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");









const routes = [
    { path: "form-create", component: _pages_form_create_form_create_component__WEBPACK_IMPORTED_MODULE_3__["FormCreateComponent"] },
    { path: "form-vote/:id", component: _pages_form_vote_form_vote_component__WEBPACK_IMPORTED_MODULE_4__["FormVoteComponent"] },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "register", component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "my-forms", component: _pages_my_forms_my_forms_component__WEBPACK_IMPORTED_MODULE_7__["MyFormsComponent"] },
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "404", redirectTo: "/" },
    { path: "**", redirectTo: "/" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    padding: 0 0;\r\n    margin: 0 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'upitnik';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_upitnik_upitnik_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/upitnik/upitnik.component */ "./src/app/components/upitnik/upitnik.component.ts");
/* harmony import */ var _pages_form_vote_form_vote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/form-vote/form-vote.component */ "./src/app/pages/form-vote/form-vote.component.ts");
/* harmony import */ var _pages_form_create_form_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/form-create/form-create.component */ "./src/app/pages/form-create/form-create.component.ts");
/* harmony import */ var _components_upitnik_vote_upitnik_vote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/upitnik-vote/upitnik-vote.component */ "./src/app/components/upitnik-vote/upitnik-vote.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "./src/app/components/register-form/register-form.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _services_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/interceptor */ "./src/app/services/interceptor.ts");
/* harmony import */ var _components_upitnik_view_upitnik_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/upitnik-view/upitnik-view.component */ "./src/app/components/upitnik-view/upitnik-view.component.ts");
/* harmony import */ var _pages_my_forms_my_forms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/my-forms/my-forms.component */ "./src/app/pages/my-forms/my-forms.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_upitnik_upitnik_component__WEBPACK_IMPORTED_MODULE_7__["UpitnikComponent"],
            _pages_form_vote_form_vote_component__WEBPACK_IMPORTED_MODULE_8__["FormVoteComponent"],
            _pages_form_create_form_create_component__WEBPACK_IMPORTED_MODULE_9__["FormCreateComponent"],
            _components_upitnik_vote_upitnik_vote_component__WEBPACK_IMPORTED_MODULE_10__["UpitnikVoteComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__["LoginFormComponent"],
            _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_15__["RegisterFormComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
            _components_upitnik_view_upitnik_view_component__WEBPACK_IMPORTED_MODULE_18__["UpitnikViewComponent"],
            _pages_my_forms_my_forms_component__WEBPACK_IMPORTED_MODULE_19__["MyFormsComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__["CommentComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _services_interceptor__WEBPACK_IMPORTED_MODULE_17__["Interceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/comment/comment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/comment/comment.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommentComponent = class CommentComponent {
    constructor() {
        this.deleteComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = false;
    }
    ngOnInit() { }
    editComment() {
        this.edit = false;
        this.eComment.emit(this.comment);
    }
    delete() {
        this.deleteComment.emit(this.comment.idKomentar);
    }
    canEdit() {
        return this.comment.idKorisnik == this.user.idKorisnik && !this.edit;
    }
    canDelete() {
        return this.comment.idKorisnik == this.user.idKorisnik || this.user.idKorisnik == this.idKorisnikaUpita;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "idKorisnikaUpita", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentComponent.prototype, "deleteComment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentComponent.prototype, "eComment", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comment.component.css */ "./src/app/components/comment/comment.component.css")).default]
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom{\r\n    color: rgba(255, 255, 255, 0.884);\r\n    padding: 25px;\r\n    width: 100%;\r\n    position: relative;\r\n    clear: both;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9te1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-custom .navbar-nav .nav-link{\r\n    color: rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n.navbar-custom .navbar-nav .nav-link:hover{\r\n    color: rgba(255, 255, 255, 0.74);\r\n}\r\n\r\nheader{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQpO1xyXG59XHJcblxyXG5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentification.service */ "./src/app/services/authentification.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnDestroy() {
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginFormComponent = class LoginFormComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    login(form) {
        this.authService.login(form.value).subscribe(d => {
            if (d.body['status'] == 'OK') {
                this.loginDescription = "";
                this.authService.user.next(d.body['user']);
                this.authService.token = d.body['token'];
                sessionStorage.setItem('token', this.authService.token);
                this.router.navigateByUrl("/");
            }
            else {
                this.loginDescription = d.body['description'];
            }
        });
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.css */ "./src/app/components/login-form/login-form.component.css")).default]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/components/register-form/register-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=password]{\r\n    width:100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1wYXNzd29yZF17XHJcbiAgICB3aWR0aDoxMDAlXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/register-form/register-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterFormComponent = class RegisterFormComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.registerDescription = {
            username: "",
            email: ""
        };
        this.usernameMinLength = 5;
        this.passwordMinLength = 5;
        this.passwordMatch = true;
        this.sentAndInvalid = false;
        this.credentials = fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.usernameMinLength)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.passwordMinLength)]],
            passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    ngOnInit() { }
    checkIfPasswordsMatch() {
        this.passwordMatch = (this.credentials.value.password == this.credentials.value.passwordRepeat);
    }
    invalidTouchedControl(controlName) {
        return this.credentials.get(controlName).errors && this.credentials.get(controlName).touched;
    }
    register(form) {
        this.checkIfPasswordsMatch();
        if (form.valid && this.passwordMatch)
            this.authService.register(form.value).subscribe(d => {
                if (d.body['status'] == 'OK') {
                    this.authService.user.next(d.body['user']);
                    this.authService.token = d.body['token'];
                    sessionStorage.setItem('token', this.authService.token);
                    this.router.navigateByUrl("/");
                }
                else {
                    this.registerDescription = d.body['description'];
                }
            });
        else
            this.sentAndInvalid = true;
    }
};
RegisterFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-form/register-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-form.component.css */ "./src/app/components/register-form/register-form.component.css")).default]
    })
], RegisterFormComponent);



/***/ }),

/***/ "./src/app/components/upitnik-view/upitnik-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/upitnik-view/upitnik-view.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBpdG5pay12aWV3L3VwaXRuaWstdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/upitnik-view/upitnik-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/upitnik-view/upitnik-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpitnikViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpitnikViewComponent", function() { return UpitnikViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpitnikViewComponent = class UpitnikViewComponent {
    constructor() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpitnikViewComponent.prototype, "upitnik", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UpitnikViewComponent.prototype, "delete", void 0);
UpitnikViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upitnik-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upitnik-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik-view/upitnik-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upitnik-view.component.css */ "./src/app/components/upitnik-view/upitnik-view.component.css")).default]
    })
], UpitnikViewComponent);



/***/ }),

/***/ "./src/app/components/upitnik-vote/upitnik-vote.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/upitnik-vote/upitnik-vote.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=radio]{\r\n    -webkit-transform:scale(1.15);\r\n            transform:scale(1.15);\r\n}\r\n\r\nlabel{\r\n    padding: 8px;\r\n}\r\n\r\n.container-buttons{\r\n    padding: 6px;\r\n}\r\n\r\n.container-buttons button{\r\n    margin-right: 8px;\r\n}\r\n\r\n.container-sharing{\r\n    padding: 12px 0;\r\n}\r\n\r\n.container-sharing button{\r\n    margin: 8px 0 0 0;\r\n}\r\n\r\nspan{\r\n    display: block;\r\n}\r\n\r\n.link{\r\n    display: contents;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGl0bmlrLXZvdGUvdXBpdG5pay12b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGl0bmlrLXZvdGUvdXBpdG5pay12b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXJhZGlvXXtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9uc3tcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1idXR0b25zIGJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXNoYXJpbmd7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2hhcmluZyBidXR0b257XHJcbiAgICBtYXJnaW46IDhweCAwIDAgMDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/upitnik-vote/upitnik-vote.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/upitnik-vote/upitnik-vote.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpitnikVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpitnikVoteComponent", function() { return UpitnikVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/form.service */ "./src/app/services/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UpitnikVoteComponent = class UpitnikVoteComponent {
    constructor(formService, aRoute, router) {
        this.formService = formService;
        this.aRoute = aRoute;
        this.router = router;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.results = false;
        this.fullUrl = window.location.href;
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        clearInterval(this.intervalVote);
    }
    copyToClipboard(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    getResults() {
        this.results = true;
        //refreshaj i trazi rezultate
        this.intervalVote = setInterval(() => {
            this.subscriptions.add(this.formService.getUpitnik(this.upitnik.sifra).subscribe((res) => {
                this.upitnik = res.body;
            }));
        }, 500);
    }
    totalVotes() {
        return this.upitnik.opcije.map(opcija => opcija.glasovi).reduce((acc, curr) => { return acc + curr; });
    }
    vote(form) {
        this.formService.vote(form).subscribe((res) => { this.getResults(); });
    }
};
UpitnikVoteComponent.ctorParameters = () => [
    { type: src_app_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpitnikVoteComponent.prototype, "upitnik", void 0);
UpitnikVoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upitnik-vote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upitnik-vote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik-vote/upitnik-vote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upitnik-vote.component.css */ "./src/app/components/upitnik-vote/upitnik-vote.component.css")).default]
    })
], UpitnikVoteComponent);



/***/ }),

/***/ "./src/app/components/upitnik/upitnik.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/upitnik/upitnik.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBpdG5pay91cGl0bmlrLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/upitnik/upitnik.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/upitnik/upitnik.component.ts ***!
  \*********************************************************/
/*! exports provided: UpitnikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpitnikComponent", function() { return UpitnikComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/form.service */ "./src/app/services/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpitnikComponent = class UpitnikComponent {
    constructor(fb, formService, router) {
        this.fb = fb;
        this.formService = formService;
        this.router = router;
        this.flaggFilled = true;
    }
    ngOnInit() {
        this.upitnik = this.fb.group({
            naslov: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            opcije: this.fb.array([
                this.fb.control(''),
                this.fb.control('')
            ])
        });
    }
    getOption() {
        return this.upitnik.get('opcije');
    }
    addOption(index) {
        if ((index + 1) === this.getOption().length)
            this.getOption().push(this.fb.control(''));
    }
    sendForm() {
        let options = this.getOption();
        let length = options.length - 1;
        let filled = 0;
        for (let i = length; i >= 0; i--) {
            if (options.value[i] != '') {
                filled += 1;
            }
        }
        if (filled >= 2) {
            this.flaggFilled = true;
            this.formService.sendForm(this.upitnik).subscribe((res) => {
                this.router.navigateByUrl(`form-vote/${res.body['id']}`);
            });
        }
        else {
            this.flaggFilled = false;
        }
    }
};
UpitnikComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpitnikComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upitnik',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upitnik.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upitnik/upitnik.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upitnik.component.css */ "./src/app/components/upitnik/upitnik.component.css")).default]
    })
], UpitnikComponent);



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/models/upitnik.ts":
/*!***********************************!*\
  !*** ./src/app/models/upitnik.ts ***!
  \***********************************/
/*! exports provided: Upitnik */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upitnik", function() { return Upitnik; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Upitnik {
}


/***/ }),

/***/ "./src/app/pages/form-create/form-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-create/form-create.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upitnik-container{\r\n    width: 80%;\r\n    max-width: 1000px;\r\n    min-width: 300px;\r\n    padding: 32px;\r\n}\r\n\r\n.container-custom{\r\n    width: 100%;\r\n    min-width: 300px;\r\n    min-height: 400px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    align-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS1jcmVhdGUvZm9ybS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0tY3JlYXRlL2Zvcm0tY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBpdG5pay1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b217XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/form-create/form-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/form-create/form-create.component.ts ***!
  \************************************************************/
/*! exports provided: FormCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreateComponent", function() { return FormCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormCreateComponent = class FormCreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-create/form-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-create.component.css */ "./src/app/pages/form-create/form-create.component.css")).default]
    })
], FormCreateComponent);



/***/ }),

/***/ "./src/app/pages/form-vote/form-vote.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/form-vote/form-vote.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upitnik-container, .comments-container{\r\n    width: 80%;\r\n    max-width: 1000px;\r\n    min-width: 300px;\r\n    padding: 32px;\r\n}\r\n\r\n.container-custom{\r\n    width: 100%;\r\n    min-width: 300px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS12b3RlL2Zvcm0tdm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybS12b3RlL2Zvcm0tdm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwaXRuaWstY29udGFpbmVyLCAuY29tbWVudHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItY3VzdG9te1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/form-vote/form-vote.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/form-vote/form-vote.component.ts ***!
  \********************************************************/
/*! exports provided: FormVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormVoteComponent", function() { return FormVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/form.service */ "./src/app/services/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_upitnik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/upitnik */ "./src/app/models/upitnik.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentification.service */ "./src/app/services/authentification.service.ts");







let FormVoteComponent = class FormVoteComponent {
    constructor(formService, aRoute, router, authService) {
        this.formService = formService;
        this.aRoute = aRoute;
        this.router = router;
        this.authService = authService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.upitnik = new src_app_models_upitnik__WEBPACK_IMPORTED_MODULE_4__["Upitnik"]();
        this.comments = new Array();
        this.authService.getUser().subscribe((user) => {
            this.user = user;
        });
    }
    ngOnInit() {
        let s = this.aRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.subscriptions.add(this.formService.getUpitnik(this.id).subscribe((res) => {
                this.upitnik = res.body;
                if (this.upitnik == null)
                    this.router.navigateByUrl("/");
                else
                    this.getComments();
            }));
        });
        this.subscriptions.add(s);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    editComment(comment) {
        this.formService.editComment(comment).subscribe((res) => {
            this.getComments();
        });
    }
    deleteComment(id) {
        this.formService.deleteComment(id).subscribe((res) => { this.getComments(); });
    }
    getComments() {
        this.subscriptions.add(this.formService.getComments(this.upitnik.idUpitnik).subscribe((res) => {
            this.comments = res.body['comments'];
            this.comments.reverse();
        }));
    }
    addComment() {
        this.formService.addComment(this.newComment, this.upitnik.idUpitnik).subscribe((res) => { this.newComment = ""; this.getComments(); });
    }
};
FormVoteComponent.ctorParameters = () => [
    { type: src_app_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationService"] }
];
FormVoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-vote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-vote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-vote/form-vote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-vote.component.css */ "./src/app/pages/form-vote/form-vote.component.css")).default]
    })
], FormVoteComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span{\r\n    display: inline-block;\r\n    -webkit-transition: .5s all ease-in-out;\r\n    transition: .5s all ease-in-out;\r\n}\r\n\r\nh2 .minimize{\r\n    -webkit-transform: scale(.25);\r\n            transform: scale(.25);\r\n}\r\n\r\n.custom-container{\r\n    min-height: 550px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsdUNBQStCO0lBQS9CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaDIgLm1pbmltaXple1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let HomeComponent = class HomeComponent {
    constructor(authService) {
        this.authService = authService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.welcomeMessage = "Welcome to strawpoll!".split("");
        this.userAnimation = true;
        this.minimize = new Array(this.welcomeMessage.length).fill(true);
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.user = this.authService.getUser();
        }
        let i = 0;
        this.interval = setInterval(() => {
            this.minimize[i] = false;
            i++;
            if (i == this.welcomeMessage.length) {
                clearInterval(this.interval);
                this.userAnimation = false;
            }
        }, 16);
    }
    ngOnDestroy() {
        clearInterval(this.interval);
        this.subscriptions.unsubscribe();
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container{\r\n    width: 100%;\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n    padding: 16px;\r\n}\r\n\r\n.container-custom{\r\n    width: 100%;\r\n    min-width: 300px;\r\n    min-height: 450px;\r\n    max-height: 750px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWN1c3RvbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/my-forms/my-forms.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-forms/my-forms.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWZvcm1zL215LWZvcm1zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/my-forms/my-forms.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/my-forms/my-forms.component.ts ***!
  \******************************************************/
/*! exports provided: MyFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormsComponent", function() { return MyFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/form.service */ "./src/app/services/form.service.ts");



let MyFormsComponent = class MyFormsComponent {
    constructor(formService) {
        this.formService = formService;
        this.upitnici = new Array();
    }
    ngOnInit() {
        this.formService.getUpitnici().subscribe((res) => {
            this.upitnici = res.body;
        });
    }
    deleteUpitnik(idUpitnik) {
        this.formService.deleteUpitnik(idUpitnik).subscribe((res) => {
            let index = this.upitnici.map((up) => up.idUpitnik).indexOf(idUpitnik);
            this.upitnici.splice(index, 1);
        });
    }
};
MyFormsComponent.ctorParameters = () => [
    { type: src_app_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }
];
MyFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-forms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-forms/my-forms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-forms.component.css */ "./src/app/pages/my-forms/my-forms.component.css")).default]
    })
], MyFormsComponent);



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container{\r\n    width: 100%;\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n    padding: 16px;\r\n}\r\n\r\n.container-custom{\r\n    width: 100%;\r\n    min-width: 300px;\r\n    min-height: 450px;\r\n    max-height: 750px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWN1c3RvbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/authentification.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/authentification.service.ts ***!
  \******************************************************/
/*! exports provided: AuthentificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationService", function() { return AuthentificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthentificationService = class AuthentificationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]());
    }
    whoAmI() {
        this.http.get("/rlogin/whoAmI", {
            responseType: "json",
            observe: "response"
        }).subscribe((res) => {
            this.user.next(res.body);
        });
    }
    isAuthenticated() {
        return sessionStorage.getItem('token') ? true : false;
    }
    register(registerData) {
        return this.http.post(`/rregister/`, registerData, { observe: "response", responseType: "json" });
    }
    getUser() {
        ///TODO    
        if (this.user.value.ime == undefined)
            this.whoAmI();
        return this.user;
    }
    getToken() {
        return this.token || sessionStorage.getItem('token');
    }
    login(credentials) {
        return this.http.post('/rlogin', credentials, { responseType: "json", observe: "response" });
    }
    logout() {
        sessionStorage.removeItem('token');
        this.user.next(new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]());
        this.router.navigateByUrl("login");
    }
};
AuthentificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthentificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthentificationService);



/***/ }),

/***/ "./src/app/services/form.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/form.service.ts ***!
  \******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FormService = class FormService {
    constructor(http) {
        this.http = http;
    }
    editComment(comment) {
        return this.http.put(`/rcomment/`, comment, { observe: "response" });
    }
    deleteComment(id) {
        return this.http.delete(`/rcomment/${id}`, { observe: "response" });
    }
    getComments(idUpitnik) {
        return this.http.get(`/rcomment/comments/${idUpitnik}`, { observe: "response" });
    }
    addComment(comment, idUpitnik) {
        return this.http.post('/rcomment', { comment: comment, idUpitnik: idUpitnik }, { observe: "response" });
    }
    vote(form) {
        return this.http.post('/rform-vote/vote', form.value, { observe: 'response', responseType: "text" });
    }
    deleteUpitnik(id) {
        return this.http.delete(`/rmy-forms/${id}`);
    }
    getUpitnici() {
        return this.http.get(`/rmy-forms/upitnici`, { observe: "response" });
    }
    getUpitnik(sifra) {
        return this.http.get(`/rform-vote/upitnik/${sifra}`, { observe: "response" });
    }
    sendForm(form) {
        let options = form.get('opcije');
        let length = options.length;
        for (let i = length; i >= 0; i--) {
            if (options.value[i] === '') {
                options.removeAt(i);
            }
        }
        return this.http.post("/rform-create/", form.value, { responseType: "json", observe: "response" });
    }
};
FormService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormService);



/***/ }),

/***/ "./src/app/services/interceptor.ts":
/*!*****************************************!*\
  !*** ./src/app/services/interceptor.ts ***!
  \*****************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let Interceptor = class Interceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        let token = this.authService.getToken();
        let uRequest = request.clone({
            headers: request.headers.append('x-access-token', token || "")
        });
        return next.handle(uRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                /* console.log('event--->>>', event); */
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            if (error.error.message == 'No token' || error.error.message == 'Wrong token') {
                this.authService.logout();
                this.router.navigateByUrl("/login");
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
Interceptor.ctorParameters = () => [
    { type: _authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
Interceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Interceptor);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ValentinoBestak\Desktop\upitnikZad\upitnik\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map