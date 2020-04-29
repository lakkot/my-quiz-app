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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>'
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question-form/question-form.component */ "./src/app/question-form/question-form.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
















const appRoutes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"] },
    { path: ':quizId', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__["QuestionsComponent"] },
    { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_10__["QuestionFormComponent"],
        _results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"],
        _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__["QuestionsComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_10__["QuestionFormComponent"],
                    _results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"],
                    _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__["QuestionsComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/question-form/question-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-form/question-form.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function QuestionFormComponent_div_4_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const choice_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", choice_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](choice_r2.value);
} }
function QuestionFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuestionFormComponent_div_4_label_6_Template, 4, 2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.question.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.question.choices);
} }
class QuestionFormComponent {
    constructor() {
        this.onChoiceMade = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = () => {
            this.onChoiceMade.emit(this.form.value.choice);
        };
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.form.valueChanges.subscribe(this.onChange);
    }
}
QuestionFormComponent.ɵfac = function QuestionFormComponent_Factory(t) { return new (t || QuestionFormComponent)(); };
QuestionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionFormComponent, selectors: [["app-question-form"]], inputs: { question: "question" }, outputs: { onChoiceMade: "onChoiceMade" }, decls: 5, vars: 1, consts: [["class", "question-card", 4, "ngIf"], [1, "question-card"], [3, "formGroup"], [1, "answers"], [1, "form-group"], [4, "ngFor", "ngForOf"], ["type", "radio", "formControlName", "choice", 3, "value"]], template: function QuestionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular Quiz App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionFormComponent_div_4_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["body[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #ece9e5;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #8536b3;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #ece9e5;\n}\n\n.question-card[_ngcontent-%COMP%] {\n  background-color: #8536b3;\n  border-radius: 20px;\n  color: #ece9e5;\n  padding: 10px;\n  margin: 80px auto 50px auto;\n  text-align: center;\n  height: 400px;\n  width: 400px;\n  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);\n}\n\n.question-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 20%;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 33%;\n  text-align: right;\n  margin: 0 auto;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: left;\n  width: 80%;\n  padding: 10px 0;\n}\n\n.question-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0ZpbGVzL3dlYmRldi9teS1hd2Vzb21lLXF1aXotYXBwL3NyYy9hcHAvcXVlc3Rpb24tZm9ybS9xdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0VBQ0EseUJBSlU7QUNFWjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EseUJBWFE7QUNRVjs7QURRQTtFQUNFLFdBQUE7RUFDQSxjQWpCVTtBQ1laOztBRFFBO0VBQ0UseUJBdEJRO0VBdUJSLG1CQUFBO0VBQ0EsY0F2QlU7RUF3QlYsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogcmdiKDEzMywgNTQsIDE3OSk7XG4kc2Vjb25kYXJ5OiByZ2IoMjM2LCAyMzMsIDIyOSk7XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XG5cbn1cblxubWF0LXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuXG5cbn1cblxubWF0LXRvb2xiYXIgc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHNlY29uZGFyeTtcbn1cblxuLnF1ZXN0aW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICRzZWNvbmRhcnk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDUwcHggYXV0bzs7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIC41KTtcbn1cblxuLnF1ZXN0aW9uLWNhcmQgaDEge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMzMlOyBcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1jYXJkIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZm9ybSBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59IiwiYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTllNTtcbn1cblxubWF0LXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTM2YjM7XG59XG5cbm1hdC10b29sYmFyIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNlY2U5ZTU7XG59XG5cbi5xdWVzdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1MzZiMztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNlY2U5ZTU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnF1ZXN0aW9uLWNhcmQgaDEge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMzMlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWNhcmQgLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-form',
                templateUrl: './question-form.component.html',
                styleUrls: ['./question-form.component.scss']
            }]
    }], null, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChoiceMade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.model */ "./src/app/quiz.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class QuestionsService {
    constructor(http) {
        this.http = http;
    }
    getQuizzes() {
        return this.http.get(`./assets/quiz-list.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result.map(r => new _quiz_model__WEBPACK_IMPORTED_MODULE_2__["Quiz"](r.label, r.name, r.description, r.fileName));
        }));
    }
    getQuestions(fileName) {
        return this.http.get(`./assets/${fileName}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result.map(r => new _quiz_model__WEBPACK_IMPORTED_MODULE_2__["Question"](r.label, r.choices));
        }));
    }
}
QuestionsService.ɵfac = function QuestionsService_Factory(t) { return new (t || QuestionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
QuestionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionsService, factory: QuestionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-form/question-form.component */ "./src/app/question-form/question-form.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../results/results.component */ "./src/app/results/results.component.ts");









function QuestionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
function QuestionsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-question-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChoiceMade", function QuestionsComponent_div_1_div_1_Template_app_question_form_onChoiceMade_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.updateChoice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_1_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.nextOrViewResults(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", ctx_r2.questions[ctx_r2.currentQuestionIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.answers.values[ctx_r2.currentQuestionIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentQuestionIndex === ctx_r2.questions.length - 1 ? "View results" : "Next");
} }
function QuestionsComponent_div_1_app_results_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-results", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("answers", ctx_r3.answers);
} }
function QuestionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionsComponent_div_1_div_1_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionsComponent_div_1_app_results_2_Template, 1, 1, "app-results", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showResults);
} }
class QuestionsComponent {
    // inject both the active route and the questions service
    constructor(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.showResults = false;
    }
    ngOnInit() {
        // read from the dynamic route and load the proper quiz data
        this.questionsService.getQuestions(this.route.snapshot.params.quizId)
            .subscribe(questions => {
            // initialize everything
            this.questions = questions;
            this.answers = new _quiz_model__WEBPACK_IMPORTED_MODULE_1__["Answers"]();
            this.currentQuestionIndex = 0;
        });
    }
    updateChoice(choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
    }
    nextOrViewResults() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults = true;
            return;
        }
        this.currentQuestionIndex++;
    }
    reset() {
        this.quiz = undefined;
        this.questions = undefined;
        this.answers = undefined;
        this.currentQuestionIndex = undefined;
    }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"])); };
QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], decls: 2, vars: 2, consts: [["class", "spinner-grow text-primary", 4, "ngIf"], ["class", "quiz", 4, "ngIf"], [1, "spinner-grow", "text-primary"], [1, "quiz"], ["class", "questions", 4, "ngIf"], [3, "answers", 4, "ngIf"], [1, "questions"], [3, "question", "onChoiceMade"], ["mat-raised-button", "", 1, "btn", "btn-success", 3, "disabled", "click"], [3, "answers"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuestionsComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionsComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quiz && !ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_5__["QuestionFormComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"]], styles: [".quiz[_ngcontent-%COMP%] {\n  background-color: #ece9e5;\n  height: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 50px;\n  width: 150px;\n  text-decoration: none;\n  color: #8536b3;\n}\n\n.questions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0ZpbGVzL3dlYmRldi9teS1hd2Vzb21lLXF1aXotYXBwL3NyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUhVO0VBSVYsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQWJRO0FDV1Y7O0FETUE7RUFDRSxrQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiByZ2IoMTMzLCA1NCwgMTc5KTtcbiRzZWNvbmRhcnk6IHJnYigyMzYsIDIzMywgMjI5KTtcblxuLnF1aXoge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDs7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbiAgXG59XG5cbi5xdWVzdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLnF1aXoge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlOWU1O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM4NTM2YjM7XG59XG5cbi5xdWVzdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-questions',
                templateUrl: './questions.component.html',
                styleUrls: ['./questions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz.model.ts":
/*!*******************************!*\
  !*** ./src/app/quiz.model.ts ***!
  \*******************************/
/*! exports provided: Choice, Question, Quiz, Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
class Choice {
    constructor(value, correct) {
        this.value = value;
        this.correct = correct;
    }
}
class Question {
    constructor(label, choices) {
        this.label = label;
        this.choices = choices;
    }
}
class Quiz {
    constructor(label, name, description, fileName) {
        this.label = label;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
    }
}
class Answers {
    constructor(values = []) {
        this.values = values;
    }
}


/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { correct: a0 }; };
function ResultsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, a_r1.correct));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r1.value, " ");
} }
class ResultsComponent {
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(); };
ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], inputs: { answers: "answers" }, decls: 10, vars: 1, consts: [["mat-raised-button", "", "routerLink", "/welcome", 1, "gohome"], [1, "results"], [1, "results-card"], ["class", "answer", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "answer", 3, "ngClass"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular Quiz App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose another quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResultsComponent_div_9_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answers.values);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ece9e5;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #8536b3;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #ece9e5;\n}\n\n.answer[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding-bottom: 10px;\n  color: #ffa4a4;\n}\n\n.correct[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding-bottom: 10px;\n  color: #9bff9b;\n}\n\n.gohome[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.results[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.results-card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 400px;\n  width: 400px;\n  background-color: #8536b3;\n  border-radius: 20px;\n  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);\n}\n\n.results-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ece9e5;\n  font-size: 24px;\n  padding: 25px;\n  height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0ZpbGVzL3dlYmRldi9teS1hd2Vzb21lLXF1aXotYXBwL3NyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFIVTtBQ0NaOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSx5QkFWUTtBQ09WOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGNBaEJVO0FDV1o7O0FEUUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTdDUTtFQThDUixtQkFBQTtFQUNBLDBDQUFBO0FDTEY7O0FEU0E7RUFDRSxjQW5EVTtFQW9EVixlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5OiByZ2IoMTMzLCA1NCwgMTc5KTtcbiRzZWNvbmRhcnk6IHJnYigyMzYsIDIzMywgMjI5KTtcblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XG5cbn1cblxubWF0LXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuXG5cbn1cblxubWF0LXRvb2xiYXIgc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHNlY29uZGFyeTtcbn1cblxuLmFuc3dlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAxNjQsIDE2NCk7XG59XG5cbi5jb3JyZWN0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHJnYigxNTUsIDI1NSwgMTU1KTtcbn1cblxuLmdvaG9tZSB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnJlc3VsdHMge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVzdWx0cy1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuXG59XG5cbi5yZXN1bHRzLWNhcmQgaDIge1xuICBjb2xvcjogJHNlY29uZGFyeTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBoZWlnaHQ6IDMwJTtcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTllNTtcbn1cblxubWF0LXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTM2YjM7XG59XG5cbm1hdC10b29sYmFyIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNlY2U5ZTU7XG59XG5cbi5hbnN3ZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2ZmYTRhNDtcbn1cblxuLmNvcnJlY3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzliZmY5Yjtcbn1cblxuLmdvaG9tZSB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnJlc3VsdHMge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVzdWx0cy1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1MzZiMztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucmVzdWx0cy1jYXJkIGgyIHtcbiAgY29sb3I6ICNlY2U5ZTU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAzMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-results',
                templateUrl: './results.component.html',
                styleUrls: ['./results.component.scss']
            }]
    }], null, { answers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function WelcomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go to quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", q_r1.name, "");
} }
class WelcomeComponent {
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    ngOnInit() {
        this.questionsService.getQuizzes()
            .subscribe(quiz => {
            this.quiz = quiz;
        });
    }
    reset() {
        this.quiz = undefined;
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 11, vars: 1, consts: [[1, "content"], [1, "card-area"], [4, "ngFor", "ngForOf"], [1, "quiz-card"], ["mat-raised-button", ""], [3, "routerLink"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular Quiz App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to the quiz app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WelcomeComponent_div_10_Template, 10, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quiz);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ece9e5;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #8536b3;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #ece9e5;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #8536b3;\n  text-align: center;\n  margin: 20px 0;\n  text-transform: uppercase;\n  font-size: 30px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  color: #8536b3;\n  text-align: center;\n  width: 100%;\n}\n\n.card-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n}\n\n.quiz-card[_ngcontent-%COMP%] {\n  background-color: #8536b3;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 250px;\n  height: 250px;\n  margin: 20px;\n  padding: 20px;\n  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);\n}\n\n.quiz-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  color: #ece9e5;\n  padding: 15px;\n  font-size: 36px;\n  height: 25%;\n}\n\n.quiz-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  color: #ece9e5;\n  padding-bottom: 15px;\n  height: 30%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #ece9e5;\n}\n\nbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0ZpbGVzL3dlYmRldi9teS1hd2Vzb21lLXF1aXotYXBwL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkFIVTtBQ0NaOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSx5QkFWUTtBQ09WOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGNBaEJVO0FDV1o7O0FEUUE7RUFDRSxjQXJCUTtFQXNCUixrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNMRjs7QURVQTtFQUNFLGNBL0JRO0VBZ0NSLGtCQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFVBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNQQTs7QURXQTtFQUNFLHlCQTlDUTtFQStDUixtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FDUkY7O0FEV0E7RUFDRSxjQTFEVTtFQTJEVixhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSRjs7QURXQTtFQUNFLGNBakVVO0VBa0VWLG9CQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFdBO0VBQ0UseUJBdkVVO0FDK0RaOztBRFdBO0VBQ0UscUJBQUE7QUNSRjs7QURXQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUkEiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogcmdiKDEzMywgNTQsIDE3OSk7XG4kc2Vjb25kYXJ5OiByZ2IoMjM2LCAyMzMsIDIyOSk7XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xuXG59XG5cbm1hdC10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcblxuXG59XG5cbm1hdC10b29sYmFyIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICRzZWNvbmRhcnk7XG59XG5cbmgyIHtcbiAgY29sb3I6ICRwcmltYXJ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtYXJlYSB7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmhlaWdodDogNzAlO1xuXG59XG5cbi5xdWl6LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAuNSk7XG59XG5cbi5xdWl6LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogJHNlY29uZGFyeTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBoZWlnaHQ6IDI1JTtcbn1cblxuLnF1aXotY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcbiAgY29sb3I6ICRzZWNvbmRhcnk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcbn1cblxuYnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbnBhZGRpbmctdG9wOiAyMHB4O1xud2lkdGg6IDEwMCU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2U5ZTU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUzNmIzO1xufVxuXG5tYXQtdG9vbGJhciBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZWNlOWU1O1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjODUzNmIzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM4NTM2YjM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi5xdWl6LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUzNmIzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5xdWl6LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogI2VjZTllNTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBoZWlnaHQ6IDI1JTtcbn1cblxuLnF1aXotY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcbiAgY29sb3I6ICNlY2U5ZTU7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTllNTtcbn1cblxuYnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: _questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Files/webdev/my-awesome-quiz-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map