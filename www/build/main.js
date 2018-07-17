webpackJsonp([2],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twofatorstate_twofatorstate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__twofatorstate_constants__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(events, navCtrl, user, toast, translateService) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toast = toast;
        this.translateService = translateService;
        this.account = {
            //login_id: 'swap7',
            //password: '1111'
            login_id: '',
            password: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        //this.events.subscribe('login:success', this.callLoginApi);
        this.callLoginApi = this.callLoginApi.bind(this);
    }
    LoginPage.prototype.callLoginApi = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_9__twofatorstate_constants__["j" /* IS_MRI */] == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { login_id: this.account.login_id, amount: 0 });
            return;
        }
        this.toast.showLoader();
        this.user.login(this.account).subscribe(function (resp) {
            _this.toast.hideLoader();
            if (resp.error) {
                _this.toast.showToast(resp.error);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { login_id: resp.login_id, amount: resp.balance });
            }
        }, function (err) {
            _this.toast.hideLoader();
            _this.toast.showToast(_this.loginErrorString);
        });
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        if (!this.validate())
            return;
        this.toast.showLoader();
        var state;
        state = new __WEBPACK_IMPORTED_MODULE_8__twofatorstate_twofatorstate__["a" /* TwoFactorState */](this.navCtrl, this.toast, this.events);
        state.callback = this;
        state.doLogin(this.account.login_id.trim(), this.account.password.trim());
    };
    LoginPage.prototype.validate = function () {
        if (this.account.login_id.trim().length === 0) {
            this.toast.showToast("Please enter loginID");
            return false;
        }
        if (this.account.password.trim().length === 0) {
            this.toast.showToast("Please enter RPIN");
            return false;
        }
        return true;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form >\n    <ion-list>\n\n      <ion-item>\n        <!-- <ion-label fixed>{{ \'USER NAME\'  }}</ion-label> -->\n        <ion-input type="email" [(ngModel)]="account.login_id" name="email" placeholder="Login PIN"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <!-- <ion-label fixed>{{ \'PASSWORD\' }}</ion-label> -->\n        <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="RPIN"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block (click)="doLogin()">{{ \'LOGIN_BUTTON\' }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__toast_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageMRI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twofatorstate_twofatorstate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_toast__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPageMRI = (function () {
    function RegisterPageMRI(navCtrl, user, toast, translateService, events, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toast = toast;
        this.translateService = translateService;
        this.events = events;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            // login_id: 'swap7',
            // card_no: '111111',
            // card_pin:"1111",
            // password: '1111',
            // password_cofirm:'1111'
            login_id: '',
            mob_no: '',
            card_no: "",
            password: '',
            password_cofirm: ''
        };
        this.onSuccessSessionId = this.onSuccessSessionId.bind(this);
        this.doSignup = this.doSignup.bind(this);
        this.activation = this.activation.bind(this);
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
        // if(RegisterPage.openHttpListener)
        //  document.removeEventListener('onHttpResponse',RegisterPage.openHttpListener)   
        document.addEventListener('onHttpResponse', this.activation);
        com.uniken.rdnaplugin.RdnaClient.getSessionID(this.onSuccessSessionId, this.onFailureSessionId);
        //com.uniken.rdnaplugin.RdnaClient.getDeviceID(this.onSuccessSessionId,this.onFailureSessionId);
        //com.uniken.rdnaplugin.RdnaClient.getAgentID(this.onSuccessSessionId,this.onFailureSessionId);
    }
    RegisterPageMRI.prototype.activation = function (e) {
        console.log(e);
        this.toast.hideLoader();
        var jsonObj = JSON.parse(e.response);
        if (jsonObj.errorCode == 0) {
            var res;
            try {
                res = JSON.parse(atob(jsonObj.httpResponse.body));
            }
            catch (e) {
                alert("Invalid response.Please try again..");
                return;
            }
            if (res.error === '0') {
                // this.saveACTCODE(res.actCode);
                var state = void 0;
                state = new __WEBPACK_IMPORTED_MODULE_5__twofatorstate_twofatorstate__["a" /* TwoFactorState */](this.navCtrl, this.toast, this.events);
                state.callback = this;
                state.startActivation(res.actCode, this.account.login_id, this.account.password);
            }
            else {
                alert(res.error);
            }
        }
        else {
            alert("Something went wrong, please try again..!");
        }
    };
    RegisterPageMRI.prototype.doSignup = function () {
        if (!this.validate())
            return;
        this.toast.showLoader();
        var URL = "http://18.232.236.255:8080/enterprise-api-server/enrollUser";
        //console.log("---Register ---baseUrl =" + baseUrl)
        // USER_ID_STR, mandatory = true          // will be email Id
        // GROUP_NAME_STR, mandatory = true       // Hardcode
        // SECONDARY_GROUP_NAMES_STR, mandatory = false
        // EMAIL_ID_STR, mandatory = false          // sholud be there
        // MOB_NUM_ID_STR, mandatory = false        // sholud be there
        // IS_RELIDZERO_ENABLED, mandatory = true     // hardcode
        var userMap = {
            "emailId": this.account.login_id,
            "mobNum": this.account.mob_no,
            "cardNum": this.account.card_no,
            "sessionId": this.sessionID,
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": "0"
        };
        com.uniken.rdnaplugin.RdnaClient.openHttpConnection(this.onSuccess, this.onFailure, [com.uniken.rdnaplugin.RdnaClient.RDNAHttpMethods.RDNA_HTTP_POST, URL, JSON.stringify(userMap), ""]);
    };
    RegisterPageMRI.prototype.convertToPostData = function (jsonObject) {
        if (jsonObject != null && jsonObject != undefined) {
            var postData = "";
            var firstKey = true;
            var keys = Object.keys(jsonObject).forEach(function (key) {
                if (firstKey === true) {
                    firstKey = false;
                    postData = postData + key + '=' + jsonObject[key];
                }
                else {
                    postData = postData + '&' + key + '=' + jsonObject[key];
                }
            });
            return postData;
        }
        else {
            return null;
        }
    };
    RegisterPageMRI.prototype.onSuccess = function (data) {
        console.log("RdnaClient.js: openHttpConnectionSuccess");
    };
    RegisterPageMRI.prototype.onFailure = function (data) {
        this.toast.hideLoader();
        console.log("RdnaClient.js: openHttpConnectionFailure");
        this.toast.hideLoader();
    };
    RegisterPageMRI.prototype.onSuccessSessionId = function (data) {
        console.log("RdnaClient.js: onSuccessSessionId" + data);
        var jsonObj;
        try {
            jsonObj = JSON.parse(data);
        }
        catch (e) {
            console.log("parsing fails");
        }
        console.log("jsonObj --- " + jsonObj.response);
        this.sessionID = jsonObj.response;
        console.log("SessionId --- " + this.sessionID);
        //this.doSignup();
    };
    RegisterPageMRI.prototype.onFailureSessionId = function (data) {
        console.log("RdnaClient.js: onFailureSessionId" + data);
        this.toast.hideLoader();
    };
    /*doSignup() {
  
      if(!this.validate())
      return;
  
      this.toast.showLoader();
      // Attempt to login in through our User service
      this.user.signup(this.account).subscribe((resp:any) => {
        this.toast.hideLoader();
        if(resp.error){
         
          this.toast.showToast(resp.error);
        }else{
           this.response = resp;
          let state:TwoFactorState;
          state = new TwoFactorState(this.navCtrl,this.toast,this.events);
          state.callback = this;
          state.startActivation(this.response.act_code,this.account.login_id,this.account.password);
        }
      }, (err) => {
        this.toast.showToast(this.signupErrorString);
        this.toast.hideLoader();
        // Unable to sign up
      });
      }*/
    RegisterPageMRI.prototype.doDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], {
            login_id: "cdcd", amount: "cdc"
        });
    };
    RegisterPageMRI.prototype.validate = function () {
        if (this.account.login_id.trim().length === 0) {
            this.toast.showToast("Please enter loginID");
            return false;
        }
        if (this.account.mob_no.trim().length === 0 || this.account.mob_no.trim().length < 10) {
            this.toast.showToast("Please enter valid Mobile number (10 - 15)");
            return false;
        }
        if (this.account.card_no.trim().length === 0 || this.account.card_no.trim().length < 6) {
            this.toast.showToast("Please enter card number (Lasrt 6 Digit)");
            return false;
        }
        if (this.account.password.trim().length === 0) {
            this.toast.showToast("Please enter RPIN");
            return false;
        }
        if (this.account.password_cofirm.trim().length === 0) {
            this.toast.showToast("Please enter confirm RPIN");
            return false;
        }
        if (this.account.password_cofirm.trim() === this.account.password.trim()) {
        }
        else {
            this.toast.showToast("RPIN and Confirm RPIN should be same");
            return false;
        }
        return true;
    };
    RegisterPageMRI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register_mri',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/register_mri/register_mri.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="account.login_id" name="login_id" placeholder="Login ID"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="account.card_no" name="card_no" placeholder="Card Number(Last 6 digit)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="account.mob_no" name="mob_no" placeholder="Mobile Number(10-15)"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="PIN"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="account.password_cofirm" name="password_cofirm" placeholder="Confirm PIN"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'SUBMIT\'  }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/register_mri/register_mri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__toast_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], RegisterPageMRI);
    return RegisterPageMRI;
}());

//# sourceMappingURL=register_mri.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/register.module": [
		311,
		1
	],
	"../pages/register_mri/register_mri.module": [
		310,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'http://poc7-uniken.com:8080/DummyWalletAPI2';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        alert(this.url + '/' + endpoint);
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twofatorstate_twofatorstate__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NotificationPage = (function () {
    function NotificationPage(events, navCtrl, user, toast, translateService, _ngZone) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toast = toast;
        this.translateService = translateService;
        this._ngZone = _ngZone;
        this.refresh = false;
        this.account = {
            login_id: 'swap7',
            password: '1111'
            //login_id: '',
            //password: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.callGetMyNotification();
        if (NotificationPage_1.getNotificationListener) {
            document.removeEventListener('onGetNotifications', NotificationPage_1.getNotificationListener);
        }
        if (NotificationPage_1.updateListener) {
            document.removeEventListener('onUpdateNotification', NotificationPage_1.updateListener);
        }
        NotificationPage_1.getNotificationListener = function (e) {
            console.log("***********************" + _this.replaceString("\n", "\\n", e.response));
            _this._ngZone.run(function () {
                var res = JSON.parse(_this.replaceString("\n", "\\n", e.response));
                //console.log(res);
                if (res.errCode === 0) {
                    var statusCode = res.pArgs.response.StatusCode;
                    if (statusCode === 100) {
                        if (res.pArgs.response.ResponseData) {
                            var count = res.pArgs.response.ResponseData.notifications.length;
                            _this.notificationList = res.pArgs.response.ResponseData.notifications;
                        }
                    }
                }
            });
        };
        NotificationPage_1.updateListener = function (e) {
            //this.toast.hideLoader();
            _this._ngZone.run(function () {
                var res = JSON.parse(e.response);
                if (res.errCode === 0) {
                    var statusCode = res.pArgs.response.StatusCode;
                    if (statusCode === 100) {
                        //this.props.navigator.pop();
                        for (var i = 0; i < _this.notificationList.length; i++) {
                            var notification = _this.notificationList[i];
                            if (notification.notification_uuid === res.pArgs.response.ResponseData.notification_uuid) {
                                _this.notificationList.splice(i, 1);
                                //this.account.login_id = notification.notification_uuid;
                                _this.refresh = !_this.refresh;
                                _this.ref.detectChanges();
                                console.log(_this.notificationList);
                                break;
                            }
                        }
                    }
                    else {
                        alert(res.pArgs.response.StatusMsg);
                        _this.callGetMyNotification();
                    }
                }
                else {
                    alert("Notification update error : " + res.errCode);
                }
            });
        };
        document.addEventListener('onGetNotifications', NotificationPage_1.getNotificationListener);
        document.addEventListener('onUpdateNotification', NotificationPage_1.updateListener);
    }
    NotificationPage_1 = NotificationPage;
    NotificationPage.prototype.addslashes = function (str) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    };
    NotificationPage.prototype.callGetMyNotification = function () {
        var recordCount = "0";
        var startIndex = "1";
        var enterpriseID = "";
        var startDate = "";
        var endDate = "";
        com.uniken.rdnaplugin.RdnaClient.getNotifications(this.initSuccess, this.initFailure, [recordCount, startIndex, enterpriseID, startDate, endDate]);
    };
    NotificationPage.prototype.replaceString = function (find, replace, str) {
        while (str.indexOf(find) > -1) {
            str = str.replace(find, replace);
        }
        return str;
    };
    NotificationPage.prototype.getBulletList = function (body) {
        var bodyarray = body.split("\n");
        var amount = bodyarray[3];
        var font = 22;
        var bulletList = [];
        for (var i = 0; i < bodyarray.length; i++) {
            var bodyStr = bodyarray[i];
            bodyStr = this.replaceString('<br/>', '\n', bodyStr);
            bulletList.push(bodyStr);
        }
        return bulletList;
    };
    NotificationPage.prototype.getButtonList = function (actions) {
        var count = actions.length;
        var buttonList = [];
        for (var i = 0; i < count; i++) {
            var colorTemp;
            var button = actions[i];
            switch (i) {
                case 0:
                    colorTemp = "secondary";
                    break;
                case 1:
                    colorTemp = "danger";
                    break;
                case 2:
                    colorTemp = "light";
                    break;
                default:
                    break;
            }
            buttonList.push({ color: colorTemp, action: button.action, label: button.label });
        }
        return buttonList;
    };
    NotificationPage.prototype.notificationClick = function (notification, action) {
        //alert(action);
        //this.toast.showLoader();
        this.callUpdateNotification(notification.notification_uuid, action);
    };
    NotificationPage.prototype.callUpdateNotification = function (notificationID, action) {
        com.uniken.rdnaplugin.RdnaClient.updateNotifications(this.updateSuccess, this.updateFailure, [notificationID, action]);
    };
    NotificationPage.prototype.initSuccess = function (data) {
        // this.toast.hideLoader();
        console.log("RdnaClient.js: initSuccess");
    };
    NotificationPage.prototype.initFailure = function (data) {
        //this.toast.hideLoader();
        this.toast.hideLoader();
        console.log("RdnaClient.js: initFailure");
    };
    NotificationPage.prototype.updateSuccess = function (data) {
        // this.toast.hideLoader();
        console.log("RdnaClient.js: updateSuccess");
    };
    NotificationPage.prototype.updateFailure = function (data) {
        //this.toast.hideLoader();
        this.toast.hideLoader();
        console.log("RdnaClient.js: updateSuccess");
    };
    NotificationPage.prototype.callLoginApi = function () {
        var _this = this;
        this.toast.showLoader();
        this.user.login(this.account).subscribe(function (resp) {
            _this.toast.hideLoader();
            if (resp.error) {
                _this.toast.showToast(resp.error);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { login_id: resp.login_id, amount: resp.balance });
            }
        }, function (err) {
            _this.toast.hideLoader();
            _this.toast.showToast(_this.loginErrorString);
        });
    };
    // Attempt to login in through our User service
    NotificationPage.prototype.doLogin = function () {
        if (!this.validate())
            return;
        this.toast.showLoader();
        var state;
        state = new __WEBPACK_IMPORTED_MODULE_8__twofatorstate_twofatorstate__["a" /* TwoFactorState */](this.navCtrl, this.toast, this.events);
        state.callback = this;
        state.doLogin(this.account.login_id.trim(), this.account.password.trim());
    };
    NotificationPage.prototype.validate = function () {
        if (this.account.login_id.trim().length === 0) {
            this.toast.showToast("Please enter loginID");
            return false;
        }
        if (this.account.password.trim().length === 0) {
            this.toast.showToast("Please enter RPIN");
            return false;
        }
        return true;
    };
    NotificationPage = NotificationPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notification-login',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/notification/notification.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notification\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- [(ngModel)]="refresh" -->\n<body ng-controller="NotificationPage">\n  <ion-content >\n      <!-- <ion-item>\n          <ion-input type="text" [(ngModel)]="account.login_id" name="login_id" placeholder="Login ID"></ion-input>\n        </ion-item> -->\n    <div style="display:hidden">{{refresh}}</div>\n    <ion-list >\n      <!-- add a section header -->\n      <ion-item class="item-divider">List of Objects</ion-item>\n      <!-- iterate thru each item in the list, use $index as item identifier -->\n      <ion-item *ngFor="let notification of notificationList">\n        <div>\n          <div>\n            <span>{{notification.message.subject}}</span>\n            <span>{{notification.created_ts}}</span>\n          </div>\n          <ul>\n            <div *ngFor="let bullet of getBulletList(notification.message.body)">\n              <li>{{bullet}}</li>\n            </div>\n          </ul>\n          <div class="button-bar">\n            <button *ngFor="let button of getButtonList(notification.action)" ion-button color={{button.color}} (click)="notificationClick(notification,button.action)">{{button.label}}</button>\n\n          </div>\n        </div>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n</body>'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__toast_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], NotificationPage);
    return NotificationPage;
    var NotificationPage_1;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twofatorstate_twofatorstate__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NotificationHistoryPage = (function () {
    function NotificationHistoryPage(events, navCtrl, user, toast, translateService, _ngZone) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toast = toast;
        this.translateService = translateService;
        this._ngZone = _ngZone;
        this.refresh = false;
        this.account = {
            login_id: 'swap7',
            password: '1111'
            //login_id: '',
            //password: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.callGetMyNotificationHistory();
        if (NotificationHistoryPage_1.getNotificationHistoryListener) {
            document.removeEventListener('onGetNotificationHistory', NotificationHistoryPage_1.getNotificationHistoryListener);
        }
        NotificationHistoryPage_1.getNotificationHistoryListener = function (e) {
            console.log("***********************" + _this.replaceString("\n", "\\n", e.response));
            _this._ngZone.run(function () {
                //const res = JSON.parse(this.replaceString("\n","\\n",e.response));
                var res = JSON.parse(_this.replaceString("\n", "\\n", e.response));
                //console.log(res);
                if (res.errCode === 0) {
                    var statusCode = res.pArgs.response.StatusCode;
                    if (statusCode === 100) {
                        if (res.pArgs.response.ResponseData) {
                            var count = res.pArgs.response.ResponseData.history.length;
                            _this.notificationList = res.pArgs.response.ResponseData.history;
                        }
                    }
                }
            });
        };
        document.addEventListener('onGetNotificationsHistory', NotificationHistoryPage_1.getNotificationHistoryListener);
        //document.addEventListener('onUpdateNotification', NotificationPage.updateListener);
    }
    NotificationHistoryPage_1 = NotificationHistoryPage;
    NotificationHistoryPage.prototype.addslashes = function (str) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    };
    NotificationHistoryPage.prototype.callGetMyNotificationHistory = function () {
        //[RECORD_COUNT, START_RECORD, ENTERPRISE_ID, START_DATE, END_DATE, NOTIFICATION_STATUS, NOTIFICATION_ACTION_PERFORMED, KEYWORD_SEARCH, DEVICE_ID]
        var recordCount = "10";
        var startIndex = "1";
        var enterpriseID = "";
        var startDate = "";
        var endDate = "";
        var notificationStatus = "";
        var actionPerformed = "";
        var keywordSearch = "";
        var deviceID = "";
        com.uniken.rdnaplugin.RdnaClient.getNotificationHistory(this.initSuccess, this.initFailure, [recordCount, enterpriseID, startIndex, startDate, endDate, notificationStatus, actionPerformed, keywordSearch, deviceID]);
    };
    NotificationHistoryPage.prototype.replaceString = function (find, replace, str) {
        while (str.indexOf(find) > -1) {
            str = str.replace(find, replace);
        }
        return str;
    };
    NotificationHistoryPage.prototype.getBulletList = function (body) {
        var bodyarray = body.split("\n");
        var amount = bodyarray[3];
        var font = 22;
        var bulletList = [];
        for (var i = 0; i < bodyarray.length; i++) {
            var bodyStr = bodyarray[i];
            bodyStr = this.replaceString('<br/>', '\n', bodyStr);
            bulletList.push(bodyStr);
        }
        return bulletList;
    };
    NotificationHistoryPage.prototype.getButtonList = function (actions) {
        var count = actions.length;
        var buttonList = [];
        for (var i = 0; i < count; i++) {
            var colorTemp;
            var button = actions[i];
            switch (i) {
                case 0:
                    colorTemp = "secondary";
                    break;
                case 1:
                    colorTemp = "danger";
                    break;
                case 2:
                    colorTemp = "light";
                    break;
                default:
                    break;
            }
            buttonList.push({ color: colorTemp, action: button.action, label: button.label });
        }
        return buttonList;
    };
    NotificationHistoryPage.prototype.notificationClick = function (notification, action) {
        //alert(action);
        //this.toast.showLoader();
        this.callUpdateNotification(notification.notification_uuid, action);
    };
    NotificationHistoryPage.prototype.callUpdateNotification = function (notificationID, action) {
        com.uniken.rdnaplugin.RdnaClient.updateNotifications(this.updateSuccess, this.updateFailure, [notificationID, action]);
    };
    NotificationHistoryPage.prototype.initSuccess = function (data) {
        // this.toast.hideLoader();
        console.log("RdnaClient.js: initSuccess");
    };
    NotificationHistoryPage.prototype.initFailure = function (data) {
        //this.toast.hideLoader();
        this.toast.hideLoader();
        console.log("RdnaClient.js: initFailure");
    };
    NotificationHistoryPage.prototype.updateSuccess = function (data) {
        // this.toast.hideLoader();
        console.log("RdnaClient.js: updateSuccess");
    };
    NotificationHistoryPage.prototype.updateFailure = function (data) {
        //this.toast.hideLoader();
        this.toast.hideLoader();
        console.log("RdnaClient.js: updateSuccess");
    };
    NotificationHistoryPage.prototype.callLoginApi = function () {
        var _this = this;
        this.toast.showLoader();
        this.user.login(this.account).subscribe(function (resp) {
            _this.toast.hideLoader();
            if (resp.error) {
                _this.toast.showToast(resp.error);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], { login_id: resp.login_id, amount: resp.balance });
            }
        }, function (err) {
            _this.toast.hideLoader();
            _this.toast.showToast(_this.loginErrorString);
        });
    };
    // Attempt to login in through our User service
    NotificationHistoryPage.prototype.doLogin = function () {
        if (!this.validate())
            return;
        this.toast.showLoader();
        var state;
        state = new __WEBPACK_IMPORTED_MODULE_8__twofatorstate_twofatorstate__["a" /* TwoFactorState */](this.navCtrl, this.toast, this.events);
        state.callback = this;
        state.doLogin(this.account.login_id.trim(), this.account.password.trim());
    };
    NotificationHistoryPage.prototype.validate = function () {
        if (this.account.login_id.trim().length === 0) {
            this.toast.showToast("Please enter loginID");
            return false;
        }
        if (this.account.password.trim().length === 0) {
            this.toast.showToast("Please enter RPIN");
            return false;
        }
        return true;
    };
    NotificationHistoryPage = NotificationHistoryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notificationhistory-login',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/notificationhistory/notificationhistory.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notification History\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- [(ngModel)]="refresh" -->\n<body ng-controller="NotificationPage">\n  <ion-content >\n      <!-- <ion-item>\n          <ion-input type="text" [(ngModel)]="account.login_id" name="login_id" placeholder="Login ID"></ion-input>\n        </ion-item> -->\n    <div style="display:hidden">{{refresh}}</div>\n    <ion-list >\n      <!-- add a section header -->\n      <ion-item class="item-divider">List of Objects</ion-item>\n      <!-- iterate thru each item in the list, use $index as item identifier -->\n      <ion-item *ngFor="let notification of notificationList">\n        <div>\n          <div>\n            <span>{{notification.message.subject}}</span>\n            <span>{{notification.created_ts}}</span>\n          </div>\n          <ul>\n            <div *ngFor="let bullet of getBulletList(notification.message.body)">\n              <li>{{bullet}}</li>\n            </div>\n          </ul>\n          <!-- <div class="button-bar">\n            <button *ngFor="let button of getButtonList(notification.action)" ion-button color={{button.color}} (click)="notificationClick(notification,button.action)">{{button.label}}</button>\n\n          </div> -->\n        </div>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n</body>'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/notificationhistory/notificationhistory.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__toast_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], NotificationHistoryPage);
    return NotificationHistoryPage;
    var NotificationHistoryPage_1;
}());

//# sourceMappingURL=notificationhistory.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var loading;
var Toast = (function () {
    function Toast(toastCtrl, loadingController) {
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        loading = this.loadingController.create({ content: "Please wait..." });
    }
    Toast.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    Toast.prototype.showLoader = function () {
        loading.present();
    };
    Toast.prototype.hideLoader = function () {
        loading.dismissAll();
    };
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/toast/toast.html"*/''/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/toast/toast.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Toast);
    return Toast;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_mri_register_mri__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_toast__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__twofatorstate_twofatorstate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twofatorstate_constants__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, toast, alertCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        document.addEventListener('onInitializeCompleted', function (e) {
            //console.log(e);
            alert('onInitializeCompleted');
            var res = JSON.parse(e.response);
            //console.log("error code--->" + responseJson.errCode);
            if (res.errCode == 0) {
                //this.toast.showToast("Initialization Done");
                //  var statusCode = res.pArgs.response.StatusCode;
                //   if (statusCode == 100) {
                var challengeJson = void 0;
                if (res.pArgs.response.ResponseData) {
                    challengeJson = res.pArgs.response.ResponseData;
                    __WEBPACK_IMPORTED_MODULE_7__twofatorstate_twofatorstate__["a" /* TwoFactorState */].initialChallengesJson = challengeJson;
                }
            }
            else
                _this.toast.showToast("Initialization Failed");
            //alert(JSON.stringify(e));
        });
        setTimeout(function () {
            _this.initRelID();
        }, 2000);
        document.addEventListener('onSecurityThreat', function (e) {
            //alert(JSON.parse(JSON.stringify(e)).response);
            //platform.exitApp();
            //ionic.Platform.exitApp();
            var confirmAlert = _this.alertCtrl.create({
                title: 'Threat detected',
                message: JSON.parse(JSON.stringify(e)).response,
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                            //confirmAlert.
                            if (_this.platform.is('android'))
                                _this.platform.exitApp();
                        }
                    }]
            });
            confirmAlert.present();
        });
    }
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.register = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__twofatorstate_constants__["j" /* IS_MRI */] == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_mri_register_mri__["a" /* RegisterPageMRI */]);
    };
    HomePage.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__test_test__["a" /* TestPage */]);
    };
    HomePage.prototype.initRelID = function () {
        // this.toast.showLoader();
        if (__WEBPACK_IMPORTED_MODULE_8__twofatorstate_constants__["j" /* IS_MRI */] == 1)
            com.uniken.rdnaplugin.RdnaClient.initialize(this.initSuccess, this.initFailure, ["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", "18.232.236.255", "4443", "AES/256/CFB/PKCS7Padding", "Rel-ID-Secure-IV", "", com.uniken.rdnaplugin.RdnaClient.RDNALoggingLevel.RDNA_NO_LOGS]);
        else {
            com.uniken.rdnaplugin.RdnaClient.setApplicationVersion(this.initSuccessVersionName, this.initFailureVersionName, ["6.0.1"]);
            com.uniken.rdnaplugin.RdnaClient.initialize(this.initSuccess, this.initFailure, ["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", "poc7-uniken.com", "4443", "AES/256/CFB/PKCS7Padding", "Rel-ID-Secure-IV", ""]);
        }
        //com.uniken.rdnaplugin.RdnaClient.initialize(this.initSuccess, this.initFailure, ["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", "poc7-uniken.com", "4443", "AES/256/CFB/PKCS7Padding", "Rel-ID-Secure-IV", ""]);
        //com.uniken.rdnaplugin.RdnaClient.initialize(this.initSuccess, this.initFailure, ["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", "10.0.5.21", "4443", "AES/256/CFB/PKCS7Padding", "Rel-ID-Secure-IV", ""]);
    };
    HomePage.prototype.initSuccess = function (data) {
        // this.toast.hideLoader();
        console.log("RdnaClient.js: initSuccess");
    };
    HomePage.prototype.initFailure = function (data) {
        //this.toast.hideLoader();
        this.toast.hideLoader();
        console.log("RdnaClient.js: initFailure");
    };
    HomePage.prototype.initSuccessVersionName = function (data) {
        // this.toast.hideLoader();
        alert("initSuccessVersionName");
        console.log("RdnaClient.js: initSuccessVersionName");
        //com.uniken.rdnaplugin.RdnaClient.initialize(this.initSuccess, this.initFailure, ["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", "poc7-uniken.com", "4443", "AES/256/CFB/PKCS7Padding", "Rel-ID-Secure-IV", ""]);
    };
    HomePage.prototype.initFailureVersionName = function (data) {
        //this.toast.hideLoader();
        //his.toast.hideLoader();
        alert("initFailureVersionName");
        console.log("RdnaClient.js: initFailureVersionName");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      RPOC Wallet\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="login()">{{ \'Login\' }}</button>\n  <button ion-button block (click)="register()" class="login">{{ \'Register\'}}</button>\n  <!-- <button ion-button block (click)="test()" class="login">{{ \'TEST\'}}</button> -->\n</ion-content>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__toast_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestPage = (function () {
    function TestPage(navCtrl, toast) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.serviceName = 'port_forward';
        this.ip = "127.0.0.1";
        this.port = 9080;
        // this.serviceStringJson = "{\"serviceName\": \"serv3_portF\",\"targetHNIP\": \"99.99.99.99\",\"app_uuid\": \"415a4174-c0c3-4ee4-8931-04c5f325db0c\",\"accessServerName\": \"cluster1\",\"targetPort\": 9999,\"portInfo\": {\"isAutoStartedPort\": 0,\"isLocalhostOnly\": 1,\"isStarted\": 0,\"isPrivacyEnabled\": 1,\"portType\": 1,\"port\": 9999}}";
        this.serviceStringJson = "{\"serviceName\": \"port_forward\", \"targetHNIP\": \"127.0.0.1\", \"app_uuid\": \"729f64e2-5a67-11e8-a9f4-e6cfa37cafc2\", \"accessServerName\": \"uniken\", \"targetPort\": 9080, \"portInfo\": { \"isAutoStartedPort\": 1, \"isLocalhostOnly\": 1, \"isStarted\": 1, \"isPrivacyEnabled\": 0, \"portType\": 1, \"port\": 8443 }}";
        this.cipherSalt = "";
        this.cipherSpect = "";
        this.plainText = "uniken";
        this.encryptDataPacketOutput = "";
        this.decryptDataPacketOutput = "";
        this.plainHttpRequest = "GET /docs/index.html HTTP/1.1\r\nHost: www.nowhere123.com\r\n\r\n";
        this.encryptHttpRequestOutput = "";
        this.decryptHttpResponseOutput = "";
        this.getDefaultCipherSpecSuccess = this.getDefaultCipherSpecSuccess.bind(this);
        this.getDefaultCipherSaltSuccess = this.getDefaultCipherSaltSuccess.bind(this);
        this.decryptDataPacketSuccess = this.decryptDataPacketSuccess.bind(this);
        this.encryptDataPacketSuccess = this.encryptDataPacketSuccess.bind(this);
        this.encryptHttpRequestSuccess = this.encryptHttpRequestSuccess.bind(this);
        this.decryptHttpResponseSuccess = this.decryptHttpResponseSuccess.bind(this);
    }
    TestPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    TestPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    TestPage.prototype.getServiceByServiceName = function () {
        com.uniken.rdnaplugin.RdnaClient.getServiceByServiceName(this.getServiceByServiceNameSuccess, this.getServiceByServiceNameFailure, [this.serviceName]);
    };
    TestPage.prototype.getServiceByServiceNameSuccess = function (data) {
        console.log("RdnaClient.js: getServiceByServiceNameSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getServiceByServiceNameFailure = function (data) {
        console.log("RdnaClient.js: getServiceByServiceNameFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getServiceByTargetCoordinate = function () {
        com.uniken.rdnaplugin.RdnaClient.getServiceByTargetCoordinate(this.getServiceByTargetCoordinateSuccess, this.getServiceByTargetCoordinateFailure, [this.ip, this.port]);
    };
    TestPage.prototype.getServiceByTargetCoordinateSuccess = function (data) {
        console.log("RdnaClient.js: getServiceByServiceNameSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getServiceByTargetCoordinateFailure = function (data) {
        console.log("RdnaClient.js: getServiceByTargetCoordinateFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getAllServices = function () {
        com.uniken.rdnaplugin.RdnaClient.getAllServices(this.getAllServicesSuccess, this.getAllServicesFailure);
    };
    TestPage.prototype.getAllServicesSuccess = function (data) {
        console.log("RdnaClient.js: getAllServicesSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getAllServicesFailure = function (data) {
        console.log("RdnaClient.js: getAllServicesFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.serviceAccessStart = function () {
        com.uniken.rdnaplugin.RdnaClient.serviceAccessStart(this.serviceAccessStartSuccess, this.serviceAccessStartFailure, [this.serviceStringJson]);
    };
    TestPage.prototype.serviceAccessStartSuccess = function (data) {
        console.log("RdnaClient.js: serviceAccessStartSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.serviceAccessStartFailure = function (data) {
        console.log("RdnaClient.js: serviceAccessStartSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.serviceAccessStop = function () {
        com.uniken.rdnaplugin.RdnaClient.serviceAccessStop(this.serviceAccessStopSuccess, this.serviceAccessStopFailure, [this.serviceStringJson]);
    };
    TestPage.prototype.serviceAccessStopSuccess = function (data) {
        console.log("RdnaClient.js: serviceAccessStopSuccess-->" + data);
        alert(data);
    };
    ;
    TestPage.prototype.serviceAccessStopFailure = function (data) {
        console.log("RdnaClient.js: serviceAccessStopFailure-->" + data);
        alert(data);
    };
    ;
    TestPage.prototype.serviceAccessStartAll = function () {
        com.uniken.rdnaplugin.RdnaClient.serviceAccessStartAll(this.serviceAccessStartAllSuccess, this.serviceAccessStartAllFailure);
    };
    TestPage.prototype.serviceAccessStartAllSuccess = function (data) {
        console.log("RdnaClient.js: serviceAccessStartAllSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.serviceAccessStartAllFailure = function (data) {
        console.log("RdnaClient.js: serviceAccessStartAllFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.serviceAccessStopAll = function () {
        com.uniken.rdnaplugin.RdnaClient.serviceAccessStopAll(this.serviceAccessStopAllSuccess, this.serviceAccessStopAllSuccess);
    };
    TestPage.prototype.serviceAccessStopAllSuccess = function (data) {
        console.log("RdnaClient.js: serviceAccessStopAllSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.serviceAccessStopAllFailure = function (data) {
        console.log("RdnaClient.js: serviceAccessStopAllFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getDefaultCipherSpec = function () {
        com.uniken.rdnaplugin.RdnaClient.getDefaultCipherSpec(this.getDefaultCipherSpecSuccess, this.getDefaultCipherSpecFailure);
    };
    TestPage.prototype.getDefaultCipherSpecSuccess = function (data) {
        var jsonObj;
        jsonObj = JSON.parse(data);
        this.cipherSpect = jsonObj.response;
        console.log("RdnaClient.js: getDefaultCipherSpecSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getDefaultCipherSpecFailure = function (data) {
        console.log("RdnaClient.js: getDefaultCipherSpecFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getDefaultCipherSalt = function () {
        com.uniken.rdnaplugin.RdnaClient.getDefaultCipherSalt(this.getDefaultCipherSaltSuccess, this.getDefaultCipherSaltFailure);
    };
    TestPage.prototype.getDefaultCipherSaltSuccess = function (data) {
        var jsonObj;
        jsonObj = JSON.parse(data);
        this.cipherSalt = jsonObj.response;
        console.log("RdnaClient.js: getDefaultCipherSaltSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getDefaultCipherSaltFailure = function (data) {
        console.log("RdnaClient.js: getDefaultCipherSaltFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.encryptDataPacket = function () {
        com.uniken.rdnaplugin.RdnaClient.encryptDataPacket(this.encryptDataPacketSuccess, this.encryptDataPacketFailure, [com.uniken.rdnaplugin.RdnaClient.RDNAPrivacyScope.RDNA_PRIVACY_SCOPE_DEVICE, this.cipherSpect, this.cipherSalt, this.plainText]);
    };
    TestPage.prototype.encryptDataPacketSuccess = function (data) {
        var jsonObj;
        jsonObj = JSON.parse(data);
        this.encryptDataPacketOutput = jsonObj.response;
        console.log("RdnaClient.js: encryptDataPacketSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.encryptDataPacketFailure = function (data) {
        console.log("RdnaClient.js: encryptDataPacketFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.decryptDataPacket = function () {
        com.uniken.rdnaplugin.RdnaClient.decryptDataPacket(this.decryptDataPacketSuccess, this.decryptDataPacketFailure, [com.uniken.rdnaplugin.RdnaClient.RDNAPrivacyScope.RDNA_PRIVACY_SCOPE_DEVICE, this.cipherSpect, this.cipherSalt, this.encryptDataPacketOutput]);
    };
    TestPage.prototype.decryptDataPacketSuccess = function (data) {
        var jsonObj;
        jsonObj = JSON.parse(data);
        this.decryptDataPacketOutput = jsonObj.response;
        console.log("RdnaClient.js: decryptDataPacketSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.decryptDataPacketFailure = function (data) {
        console.log("RdnaClient.js: decryptDataPacketFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.encryptHttpRequest = function () {
        com.uniken.rdnaplugin.RdnaClient.encryptHttpRequest(this.encryptHttpRequestSuccess, this.encryptHttpRequestFailure, [2, this.cipherSpect, this.cipherSalt, this.plainHttpRequest]);
    };
    TestPage.prototype.encryptHttpRequestSuccess = function (data) {
        var jsonObj;
        jsonObj = JSON.parse(data);
        this.encryptHttpRequestOutput = jsonObj.response;
        console.log("RdnaClient.js: encryptHttpRequestSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.encryptHttpRequestFailure = function (data) {
        console.log("RdnaClient.js: encryptHttpRequestFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.decryptHttpResponse = function () {
        com.uniken.rdnaplugin.RdnaClient.decryptHttpResponse(this.decryptHttpResponseSuccess, this.decryptHttpResponseFailure, [2, this.cipherSpect, this.cipherSalt, this.encryptHttpRequestOutput]);
    };
    TestPage.prototype.decryptHttpResponseSuccess = function (data) {
        var jsonObj;
        jsonObj = JSON.parse(data);
        this.decryptDataPacketOutput = jsonObj.response;
        console.log("RdnaClient.js: decryptHttpResponseSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.decryptHttpResponseFailure = function (data) {
        console.log("RdnaClient.js: decryptHttpResponseFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getSessionID = function () {
        com.uniken.rdnaplugin.RdnaClient.getSessionID(this.getSessionIDSuccess, this.getSessionIDFailure);
    };
    TestPage.prototype.getSessionIDSuccess = function (data) {
        console.log("RdnaClient.js: getSessionIDSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getSessionIDFailure = function (data) {
        console.log("RdnaClient.js: getSessionIDFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getAgentID = function () {
        com.uniken.rdnaplugin.RdnaClient.getAgentID(this.getAgentIDSuccess, this.getAgentIDFailure);
    };
    TestPage.prototype.getAgentIDSuccess = function (data) {
        console.log("RdnaClient.js: getAgentIDSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getAgentIDFailure = function (data) {
        console.log("RdnaClient.js: getAgentIDFailure-->" + data);
        alert(data);
    };
    TestPage.prototype.getDeviceID = function () {
        com.uniken.rdnaplugin.RdnaClient.getDeviceID(this.getDeviceIDSuccess, this.getDeviceIDFailure);
    };
    TestPage.prototype.getDeviceIDSuccess = function (data) {
        console.log("RdnaClient.js: getDeviceIDSuccess-->" + data);
        alert(data);
    };
    TestPage.prototype.getDeviceIDFailure = function (data) {
        console.log("RdnaClient.js: getDeviceIDFailure-->" + data);
        alert(data);
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/test/test.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Testing RPOC Wallet API\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block (click)="login()">{{ \'Login\' }}</button>\n  <button ion-button block (click)="register()" class="login">{{ \'Register\'}}</button>\n  <button ion-button block (click)="getServiceByServiceName()" class="login">{{ \'getServiceByServiceName\'}}</button>\n  <button ion-button block (click)="getServiceByTargetCoordinate()" class="login">{{ \'getServiceByTargetCoordinate\'}}</button>\n  <button ion-button block (click)="getAllServices()" class="login">{{ \'getAllServices\'}}</button>\n  <button ion-button block (click)="serviceAccessStart()" class="login">{{ \'serviceAccessStart\'}}</button>\n  <button ion-button block (click)="serviceAccessStop()" class="login">{{ \'serviceAccessStop\'}}</button>\n  <button ion-button block (click)="serviceAccessStartAll()" class="login">{{ \'serviceAccessStartAll\'}}</button>\n  <button ion-button block (click)="serviceAccessStopAll()" class="login">{{ \'serviceAccessStopAll\'}}</button>\n  <button ion-button block (click)="getDefaultCipherSpec()" class="login">{{ \'getDefaultCipherSpec\'}}</button>\n  <button ion-button block (click)="getDefaultCipherSalt()" class="login">{{ \'getDefaultCipherSalt\'}}</button>\n  <button ion-button block (click)="encryptDataPacket()" class="login">{{ \'encryptDataPacket\'}}</button>\n  <button ion-button block (click)="decryptDataPacket()" class="login">{{ \'decryptDataPacket\'}}</button>\n  <button ion-button block (click)="encryptHttpRequest()" class="login">{{ \'encryptHttpRequest\'}}</button>\n  <button ion-button block (click)="decryptHttpResponse()" class="login">{{ \'decryptHttpResponse\'}}</button>\n  <button ion-button block (click)="getSessionID()" class="login">{{ \'getSessionID\'}}</button>\n  <button ion-button block (click)="getAgentID()" class="login">{{ \'getAgentID\'}}</button>\n  <button ion-button block (click)="getDeviceID()" class="login">{{ \'getDeviceID\'}}</button>\n</ion-content>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/test/test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__toast_toast__["a" /* Toast */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoFactorState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_toast__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwoFactorState = (function () {
    function TwoFactorState(navCtrl, toast, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.events = events;
        if (TwoFactorState_1.listener)
            document.removeEventListener('onCheckChallengeResponseStatus', TwoFactorState_1.listener);
        TwoFactorState_1.listener = function (e) {
            _this.toast.hideLoader();
            var res = JSON.parse(e.response);
            if (res.errCode == 0) {
                var statusCode = res.pArgs.response.StatusCode;
                var statusMsg = res.pArgs.response.StatusMsg;
                console.log('TwoFactorAuthMachine - statusCode ' + statusCode);
                if (statusCode == 100) {
                    if (res.pArgs.response.ResponseData) {
                        _this.challengeJson = res.pArgs.response.ResponseData;
                        _this.challengeJsonArr = _this.challengeJson.chlng;
                        if (_this.challengeJsonArr != null)
                            _this.handleChallenges(_this.challengeJson);
                    }
                    else if (_this.method === "login") {
                        //alert("event publish login:success");
                        //this.events.publish("login:success",null);
                        _this.callback.callLoginApi();
                    }
                    else {
                        _this.callback.doDashboard();
                    }
                }
                else {
                    alert(statusMsg);
                }
            }
            else {
                alert("Internal system error\nErrorCode : " + res.errCode);
            }
        };
        document.addEventListener('onCheckChallengeResponseStatus', TwoFactorState_1.listener);
    }
    TwoFactorState_1 = TwoFactorState;
    TwoFactorState.setInitialChallenge = function (challegeJson) {
        TwoFactorState_1.initialChallengesJson = challegeJson;
    };
    TwoFactorState.prototype.checkChallenge = function (challenges, userID) {
        this.toast.showLoader();
        com.uniken.rdnaplugin.RdnaClient.checkChallengeResponse(this.onSuccess, this.onFailure, [JSON.stringify(challenges), userID]);
    };
    TwoFactorState.prototype.handleChallenges = function (rdnaChallengeJson) {
        /// alert(JSON.stringify(rdnaChallengeJson));
        var rdnaChallenges = rdnaChallengeJson.chlng;
        if (rdnaChallenges != null) {
            for (var i = 0; i < rdnaChallenges.length; i++) {
                var challenge = rdnaChallenges[i];
                var challengeName = challenge.chlng_name;
                if (challengeName === __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CHLNG_CHECK_USER */]) {
                    challenge.chlng_resp[0].response = this.userName;
                }
                else if (challengeName === __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* CHLNG_OTP */]) {
                }
                else if (challengeName === __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* CHLNG_SECONDARY_SEC_QA */]) {
                    if (challenge.challengeOperation != __WEBPACK_IMPORTED_MODULE_2__constants__["i" /* CHLNG_VERIFICATION_MODE */]) {
                        challenge.chlng_resp[0].response = __WEBPACK_IMPORTED_MODULE_2__constants__["k" /* SAMPLE_ANSWER */];
                        challenge.chlng_resp[0].challenge = __WEBPACK_IMPORTED_MODULE_2__constants__["l" /* SAMPLE_QUESTION */];
                    }
                    else {
                        challenge.chlng_resp[0].response = __WEBPACK_IMPORTED_MODULE_2__constants__["k" /* SAMPLE_ANSWER */];
                    }
                }
                else if (challengeName === (__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* CHLNG_ACTIVATION_CODE */])) {
                    challenge.chlng_resp[0].response = this.actCode;
                }
                else if (challengeName === (__WEBPACK_IMPORTED_MODULE_2__constants__["h" /* CHLNG_SEC_QA */])) {
                    if (challenge.challengeOperation != __WEBPACK_IMPORTED_MODULE_2__constants__["i" /* CHLNG_VERIFICATION_MODE */]) {
                        challenge.chlng_resp[0].response = __WEBPACK_IMPORTED_MODULE_2__constants__["k" /* SAMPLE_ANSWER */];
                        challenge.chlng_resp[0].challenge = __WEBPACK_IMPORTED_MODULE_2__constants__["l" /* SAMPLE_QUESTION */];
                    }
                    else {
                        challenge.chlng_resp[0].response = __WEBPACK_IMPORTED_MODULE_2__constants__["k" /* SAMPLE_ANSWER */];
                    }
                }
                else if (challengeName === (__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* CHLNG_PASS */])) {
                    challenge.chlng_resp[0].response = this.passcode;
                }
                else if (challengeName === (__WEBPACK_IMPORTED_MODULE_2__constants__["c" /* CHLNG_DEV_BIND */])) {
                    challenge.chlng_resp[0].response = true;
                }
                else if (challengeName === (__WEBPACK_IMPORTED_MODULE_2__constants__["d" /* CHLNG_DEV_NAME */])) {
                    challenge.chlng_resp[0].response = "My Droid";
                }
            }
            this.checkChallenge(rdnaChallengeJson, this.userName);
        }
    };
    TwoFactorState.prototype.onSuccess = function (data) {
        console.log("RdnaClient.js: initSuccess");
    };
    TwoFactorState.prototype.onFailure = function (data) {
        console.log("RdnaClient.js: initFailure");
        this.toast.hideLoader();
    };
    TwoFactorState.prototype.doLogin = function (userName, passcode) {
        this.userName = userName;
        this.passcode = passcode;
        this.method = "login";
        this.handleChallenges(TwoFactorState_1.initialChallengesJson);
    };
    TwoFactorState.prototype.startActivation = function (actCode, userName, passcode) {
        this.actCode = actCode;
        this.userName = userName;
        this.passcode = passcode;
        this.method = "activation";
        this.handleChallenges(TwoFactorState_1.initialChallengesJson);
    };
    TwoFactorState = TwoFactorState_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-twofatorstate',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/twofatorstate/twofatorstate.html"*/''/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/twofatorstate/twofatorstate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__toast_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], TwoFactorState);
    return TwoFactorState;
    var TwoFactorState_1;
}());

//# sourceMappingURL=twofatorstate.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_mri_register_mri__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notificationhistory_notificationhistory__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_test_test__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_toast_toast__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_twofatorstate_twofatorstate__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_toast_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_20__pages_twofatorstate_twofatorstate__["a" /* TwoFactorState */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_notificationhistory_notificationhistory__["a" /* NotificationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_mri_register_mri__["a" /* RegisterPageMRI */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/register_mri/register_mri.module#RegisterPageMRIModule', name: 'RegisterPageMRI', segment: 'register_mri', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_notificationhistory_notificationhistory__["a" /* NotificationHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_mri_register_mri__["a" /* RegisterPageMRI */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_20__pages_twofatorstate_twofatorstate__["a" /* TwoFactorState */],
                __WEBPACK_IMPORTED_MODULE_19__pages_toast_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_18__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_18__providers_providers__["b" /* User */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* unused harmony reexport Settings */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user__["a"]; });




//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.get('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var seq = this.api.get('register', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            // if (res.status == 'success') {
            //   this._loggedIn(res);
            // }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.addMoney = function (accountInfo) {
        var seq = this.api.get('balance', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            // if (res.status == 'success') {
            //   this._loggedIn(res);
            // }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_twofatorstate_twofatorstate__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    //rootPage:any = NotificationPage;
    function MyApp(platform, statusBar, splashScreen, push, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initPushNotification();
        });
    }
    MyApp.prototype.updateSuccess = function (data) {
        // this.toast.hideLoader();
        console.log("notifications devvice Success");
    };
    MyApp.prototype.updateFailure = function (data) {
        //alert('device token ->  notifications failed');
        console.log("notifications device failed");
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            //alert("gthhhh");
            console.log('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {
                senderID: 'YOUR_SENDER_ID'
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            var tokenid;
            tokenid = data.registrationId;
            if (tokenid)
                com.uniken.rdnaplugin.RdnaClient.setDeviceToken(_this.updateSuccess, _this.updateFailure, [tokenid]);
            //TODO - send device token to server
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            /*if (data.additionalData.foreground) {
              // if application open, show popup
              let confirmAlert = this.alertCtrl.create({
                title: 'New Notification',
                message: data.message,
                buttons: [{
                  text: 'Ignore',
                  role: 'cancel'
                }, {
                  text: 'View',
                  handler: () => {
                    //TODO: Your logic here
                    //this.nav.push(DetailsPage, { message: data.message });
                  }
                }]
              });
              confirmAlert.present();
            } else {
              //if user NOT using app and push notification comes
              //TODO: Your logic on click of push notification directly
              //this.nav.push(DetailsPage, { message: data.message });
              console.log('Push notification clicked');
            }*/
            if (__WEBPACK_IMPORTED_MODULE_6__pages_twofatorstate_twofatorstate__["a" /* TwoFactorState */].isLoginToDashboard == true) {
                var vc;
                vc = _this.nav.getByIndex((_this.nav.length()) - 1);
                alert("dashboard");
                //if(typeof vc === 'NotificationPage')
            }
            else {
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                                //this.nav.push(DetailsPage, { message: data.message });
                            }
                        }]
                });
            }
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_toast__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notificationhistory_notificationhistory__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__twofatorstate_twofatorstate__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardPage = (function () {
    function DashboardPage(navCtrl, user, toastCtrl, translateService, navParams, toast, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.toast = toast;
        this.account = {
            login_id: '',
            amount: '',
            text1: '',
            text2: '',
        };
        this.account.login_id = navParams.get('login_id');
        this.amount = navParams.get('amount');
        this.account.text1 = 'Welcome ' + this.account.login_id;
        this.account.text2 = 'Your wallet balance is ' + this.amount;
        //alert(this.account.login_id+" "+this.amount );
        //this.account.amount = this.amount;
        __WEBPACK_IMPORTED_MODULE_7__twofatorstate_twofatorstate__["a" /* TwoFactorState */].isLoginToDashboard = true;
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    DashboardPage.prototype.doAddMoney = function () {
        var _this = this;
        // Attempt to login in through our User service
        if (this.account.amount.length === 0) {
            this.toast.showToast("Please enter amount");
            return;
        }
        this.toast.showLoader();
        this.user.addMoney(this.account).subscribe(function (resp) {
            _this.toast.hideLoader();
            if (resp.error) {
                var toast = _this.toastCtrl.create({
                    message: resp.error,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                //alert(JSON.stringify(resp));
                _this.account.amount = '';
                _this.account.text2 = 'Your wallet balance is ' + resp.balance;
            }
        }, function (err) {
            // Unable to sign up
            _this.toast.hideLoader();
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    DashboardPage.prototype.showNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notification_notification__["a" /* NotificationPage */]);
    };
    DashboardPage.prototype.showNotificationHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__notificationhistory_notificationhistory__["a" /* NotificationHistoryPage */]);
    };
    DashboardPage.prototype.getRegisteredDeviceDetails = function () {
        com.uniken.rdnaplugin.RdnaClient.getRegisteredDeviceDetails(this.onSuccess, this.onFailure, [this.account.login_id]);
        document.addEventListener('onGetRegistredDeviceDetails', function (e) {
            alert("onGetRegistredDeviceDetails success");
            console.log("RdnaClient.js: onGetRegistredDeviceDetails********************************************************" + JSON.stringify(e));
        });
    };
    DashboardPage.prototype.updateDeviceDetails = function () {
        com.uniken.rdnaplugin.RdnaClient.updateDeviceDetails(this.onSuccess, this.onFailure, [this.account.login_id, JSON.stringify({ "device": [{ "devUUID": "2TSY20TYOSURSJAPXVSCQF7F7L11EXGVG14NT8IO60QGISJYN9", "devName": "swapnil", "status": "Update", "lastAccessedTs": "2018-05-18T09:07:35UTC", "createdTs": "2018-05-18T08:57:13UTC", "devBind": 0 }] })]);
        document.addEventListener('onUpdateDeviceDetails', function (e) {
            alert("onUpdateDeviceDetails success");
            console.log("RdnaClient.js: onGetRegistredDeviceDetails********************************************************" + JSON.stringify(e));
        });
    };
    DashboardPage.prototype.onSuccess = function (data) {
        alert(data);
        console.log("RdnaClient.js: onSuccess");
    };
    DashboardPage.prototype.onFailure = function (data) {
        alert(data);
        console.log("RdnaClient.js: onFailure");
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      Dashboard\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <form >\n      <ion-list>\n  \n        \n          <ion-label  >{{ account.text1  }}</ion-label>\n          <ion-label>{{ account.text2  }}</ion-label>\n       \n        <ion-item>\n          <ion-input type="text" [(ngModel)]="account.amount" name="amount"></ion-input>\n        </ion-item>\n  \n        <!--\n        Want to use a Username instead of an Email? Here you go:\n  \n        <ion-item>\n          <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n          <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n        </ion-item>\n        -->\n  \n       \n  \n        <div padding>\n          <button ion-button color="primary" block (click)="doAddMoney()">{{ \'Add Amount\' }}</button>\n        </div>\n\n        <div padding>\n          <button ion-button color="primary" block (click)="showNotification()">{{ \'Notification\' }}</button>\n        </div>\n\n        <!-- <div padding>\n          <button ion-button color="primary" block (click)="showNotificationHistory()">{{ \'Notification History\' }}</button>\n        </div>\n\n        <div padding>\n          <button ion-button color="primary" block (click)="getRegisteredDeviceDetails()">{{ \'Get Device Details\' }}</button>\n        </div>\n\n        <div padding>\n          <button ion-button color="primary" block (click)="updateDeviceDetails()">{{ \'Update Device\' }}</button>\n        </div>\n   -->\n      </ion-list>\n    </form>\n  \n</ion-content>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__toast_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twofatorstate_twofatorstate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_toast__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = (function () {
    function RegisterPage(navCtrl, user, toast, translateService, events, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toast = toast;
        this.translateService = translateService;
        this.events = events;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            // login_id: 'swap7',
            // card_no: '111111',
            // card_pin:"1111",
            // password: '1111',
            // password_cofirm:'1111'
            login_id: '',
            card_no: '',
            card_pin: "",
            password: '',
            password_cofirm: ''
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    RegisterPage.prototype.doSignup = function () {
        var _this = this;
        if (!this.validate())
            return;
        this.toast.showLoader();
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.toast.hideLoader();
            if (resp.error) {
                _this.toast.showToast(resp.error);
            }
            else {
                _this.response = resp;
                var state = void 0;
                state = new __WEBPACK_IMPORTED_MODULE_5__twofatorstate_twofatorstate__["a" /* TwoFactorState */](_this.navCtrl, _this.toast, _this.events);
                state.callback = _this;
                state.startActivation(_this.response.act_code, _this.account.login_id, _this.account.password);
            }
        }, function (err) {
            _this.toast.showToast(_this.signupErrorString);
            _this.toast.hideLoader();
            // Unable to sign up
        });
    };
    RegisterPage.prototype.doDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], {
            login_id: this.response.login_id, amount: this.response.balance
        });
    };
    RegisterPage.prototype.validate = function () {
        if (this.account.login_id.trim().length === 0) {
            this.toast.showToast("Please enter loginID");
            return false;
        }
        if (this.account.card_no.trim().length === 0) {
            this.toast.showToast("Please enter card number");
            return false;
        }
        if (this.account.card_pin.trim().length === 0) {
            this.toast.showToast("Please enter card pin");
            return false;
        }
        if (this.account.password.trim().length === 0) {
            this.toast.showToast("Please enter RPIN");
            return false;
        }
        if (this.account.password_cofirm.trim().length === 0) {
            this.toast.showToast("Please enter confirm RPIN");
            return false;
        }
        if (this.account.password_cofirm.trim() === this.account.password.trim()) {
        }
        else {
            this.toast.showToast("RPIN and Confirm RPIN should be same");
            return false;
        }
        return true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="account.login_id" name="login_id" placeholder="Login ID"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="account.card_no" name="card_no" placeholder="Card Number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="account.card_pin" name="card_pin" placeholder="Card PIN"></ion-input>\n      </ion-item>\n\n     \n      <ion-item>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="PIN"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="account.password_cofirm" name="password_cofirm" placeholder="Confirm PIN"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'SUBMIT\'  }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/nitin/Development/Uniken_Rel_id_Git/REL-ID_internal/REL-IDmobile/POCWallet/IONIC/IONICPOCWallet/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__toast_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CONST_CYPHER_SALT */
/* unused harmony export CONST_CYPHER_SPEC */
/* unused harmony export USER_ID */
/* unused harmony export LOGGED_IN_USERID */
/* unused harmony export CHLNG_TBACRED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHLNG_CHECK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHLNG_ACTIVATION_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHLNG_SEC_QA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHLNG_PASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHLNG_DEV_BIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHLNG_DEV_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHLNG_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHLNG_SECONDARY_SEC_QA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SAMPLE_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SAMPLE_ANSWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHLNG_VERIFICATION_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return IS_MRI; });
var CONST_CYPHER_SALT = "salt"; //Cipher salt to be used
var CONST_CYPHER_SPEC = "AES/128/CBC/PKCS7Padding=SHA-1"; //Cipher mode to be used
var USER_ID = "userId";
var LOGGED_IN_USERID = "loggedInUserId";
var CHLNG_TBACRED = "tbacred";
var CHLNG_CHECK_USER = "checkuser";
var CHLNG_ACTIVATION_CODE = "actcode";
var CHLNG_SEC_QA = "secqa";
var CHLNG_PASS = "pass";
var CHLNG_DEV_BIND = "devbind";
var CHLNG_DEV_NAME = "devname";
var CHLNG_OTP = "otp";
var CHLNG_SECONDARY_SEC_QA = "secondarySecqa";
var SAMPLE_QUESTION = "sampleQuestion";
var SAMPLE_ANSWER = "sampleAnswer";
var CHLNG_VERIFICATION_MODE = 0;
var IS_MRI = 0;
//# sourceMappingURL=constants.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map