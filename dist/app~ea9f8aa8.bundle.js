(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([[183],{

/***/ 61:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var RestoBannerDetail = /*#__PURE__*/function (_HTMLElement) {
  function RestoBannerDetail() {
    var _this;
    _classCallCheck(this, RestoBannerDetail);
    _this = _callSuper(this, RestoBannerDetail);
    // Make <style> tag that will store the CSS for this component
    _this.styleElement = document.createElement('style');
    return _this;
  }
  _inherits(RestoBannerDetail, _HTMLElement);
  return _createClass(RestoBannerDetail, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var title = this.getAttribute('title');
      var subtitle = this.getAttribute('subtitle');
      var srcBackground = this.getAttribute('srcBackground');
      var srcBackgroundMin = this.getAttribute('srcBackgroundMin');
      this.render(title, subtitle, srcBackground, srcBackgroundMin);
    }
  }, {
    key: "emptyContent",
    value: function emptyContent() {
      this.innerHTML = '';
    }
  }, {
    key: "render",
    value: function render(title, subtitle, srcBackground, srcBackgroundMin) {
      this.emptyContent();
      this.renderAll(title, subtitle, srcBackground, srcBackgroundMin);
    }
  }, {
    key: "renderAll",
    value: function renderAll(title, subtitle, srcBackground, srcBackgroundMin) {
      // Check screen width
      var screenWidth = window.innerWidth;

      // Define the CSS includes background-image based on screen width
      var backgroundUrl;
      if (screenWidth < 800) {
        backgroundUrl = "url('".concat(srcBackgroundMin, "')");
      } else {
        backgroundUrl = "url('".concat(srcBackground, "')");
      }
      var styles = "\n        #resto_banner {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            height: 400px;\n            width: 100%;\n            background: linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%),\n                        lightgray ".concat(backgroundUrl, " no-repeat center / cover;\n        }\n    ");
      this.styleElement.textContent = styles;
      // Append this to head
      document.head.appendChild(this.styleElement);

      // Make HTML component
      var bannerSection = document.createElement('section');
      bannerSection.id = 'resto_banner';
      bannerSection.innerHTML = "\n        <h1 tabindex=\"0\" aria-label=\"Restaurant name: ".concat(title, "\" tabindex=\"0\">").concat(title, "</h1>\n        <h2 tabindex=\"0\" aria-label=\"Restaurant city: ").concat(subtitle, "\" tabindex=\"0\">").concat(subtitle, "</h2>\n    ");
      this.appendChild(bannerSection);
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('resto-banner-detail', RestoBannerDetail);

/***/ }),

/***/ 600:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _data_therestaurantdb_source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(684);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* eslint-disable object-shorthand */
/* eslint-disable no-useless-constructor */


var Swal = __webpack_require__(465);
var ReviewForm = /*#__PURE__*/function (_HTMLElement) {
  function ReviewForm() {
    _classCallCheck(this, ReviewForm);
    return _callSuper(this, ReviewForm);
  }
  _inherits(ReviewForm, _HTMLElement);
  return _createClass(ReviewForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var id = this.getAttribute('id');
      this.render(id);
    }
  }, {
    key: "emptyContent",
    value: function emptyContent() {
      this.innerHTML = '';
    }
  }, {
    key: "render",
    value: function render(id) {
      this.emptyContent();
      this.renderAll(id);
    }
  }, {
    key: "renderAll",
    value: function renderAll(id) {
      var formSection = document.createElement('section');
      formSection.id = 'review_section';
      formSection.innerHTML = "\n            <div class=\"review_title\">\n                <i class=\"ri-search-eye-line\"></i>\n                <h3 tabindex=\"0\">Customer Review</h3>\n            </div>\n            <form id=\"review_form\">\n                <input tabindex=\"0\" type=\"text\" name=\"name_input\" id=\"name_input\" placeholder=\"Your name...\" aria-label=\"Insert your name\">\n                <h5 tabindex=\"0\" id=\"error_name\">Test</h5>\n                <textarea tabindex=\"0\" placeholder=\"Review about the restaurant...\" name=\"review_input\" id=\"review_input\" cols=\"30\" rows=\"10\"></textarea>\n                <h5 tabindex=\"0\" id=\"error_review\"></h5>\n                <button tabindex=\"0\" aria-label=\"Review Submit Button\" type=\"submit\" id=\"submit_review\">Submit</button>\n            </form>\n        ";
      this.appendChild(formSection);

      // Form selector
      var reviewForm = formSection.querySelector('#review_form');
      var nameInput = formSection.querySelector('#name_input');
      var reviewInput = formSection.querySelector('#review_input');
      var errorName = formSection.querySelector('#error_name');
      var errorReview = formSection.querySelector('#error_review');

      // Submit event
      reviewForm.addEventListener('submit', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
          var reviewData, startTime, endTime, apiLatency, timerDuration;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                // Custom validation
                if (!(nameInput.value.trim() === '' && reviewInput.value.trim() === '')) {
                  _context.next = 7;
                  break;
                }
                errorName.textContent = 'Name cannot be empty';
                errorName.style.display = 'block';
                errorReview.textContent = 'Review cannot be empty';
                errorReview.style.display = 'block';
                return _context.abrupt("return");
              case 7:
                if (!(nameInput.value.trim() === '')) {
                  _context.next = 11;
                  break;
                }
                errorName.textContent = 'Name cannot be empty';
                errorName.style.display = 'block';
                return _context.abrupt("return");
              case 11:
                if (!(reviewInput.value.trim() === '')) {
                  _context.next = 15;
                  break;
                }
                errorReview.textContent = 'Review cannot be empty';
                errorReview.style.display = 'block';
                return _context.abrupt("return");
              case 15:
                if (nameInput.value.length < 3) {
                  errorName.textContent = 'Name must be at least 3 characters';
                  errorName.style.display = 'block';
                }
                if (!(nameInput && reviewInput)) {
                  _context.next = 35;
                  break;
                }
                reviewData = {
                  id: id,
                  name: nameInput.value,
                  review: reviewInput.value
                };
                _context.prev = 18;
                startTime = performance.now();
                _data_therestaurantdb_source_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.addReview(reviewData);
                endTime = performance.now();
                apiLatency = endTime - startTime;
                timerDuration = Math.max(apiLatency, 1000);
                _context.next = 26;
                return Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Sucessfully added the review!',
                  showConfirmButton: false,
                  background: '#212330',
                  color: 'white',
                  timer: timerDuration
                });
              case 26:
                // Reload the page
                location.reload();

                // Reset form
                nameInput.value = '';
                reviewInput.value = '';
                _context.next = 35;
                break;
              case 31:
                _context.prev = 31;
                _context.t0 = _context["catch"](18);
                console.error('Error sending review:', _context.t0);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong while adding the review. Please try again later.',
                  background: '#212330',
                  color: 'white'
                });
              case 35:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[18, 31]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('review-form', ReviewForm);

/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ createLikeButtonTemplate),
/* harmony export */   s: () => (/* binding */ createLikedButtonTemplate)
/* harmony export */ });
var createLikeButtonTemplate = function createLikeButtonTemplate() {
  return "\n    <button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\n        <i class=\"ri-heart-add-2-fill\" aria-hidden=\"true\"></i>\n    </button>\n";
};
var createLikedButtonTemplate = function createLikedButtonTemplate() {
  return "\n    <button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\n        <i class=\"ri-heart-fill\" aria-hidden=\"true\"></i>\n    </button>\n";
};


/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(552);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_api_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750);
/* eslint-disable arrow-parens */
/* eslint-disable new-cap */



var createRestoItemTemplate = function createRestoItemTemplate(resto) {
  return "\n    <div class=\"resto_item restaurant-item\">\n        <div tabindex=\"0\" class=\"location_item\">\n            <h4 aria-label=\"Restaurant location: ".concat(resto.city, "\">").concat(resto.city, "</h4>\n        </div>\n        <img tabindex=\"0\" class=\"img_resto lazyload\" data-src=\"").concat(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.MEDIUM_IMAGE(resto.pictureId), "\" alt=\"restaurant image\">\n        <div class=\"resto_item_textwrap\">\n            <h5 tabindex=\"0\" class=\"rating_item\">Rating: ").concat(resto.rating, " / 5</h5>\n            <h3 tabindex=\"0\" aria-label=\"Restaurant name: ").concat(resto.name, "\" class=\"title_item restaurant__name\">\n                <a href=\"/#/detail/").concat(resto.id, "\" class=\"restaurant__name\">").concat(resto.name, "</a>\n            </h3>\n            <p tabindex=\"0\" aria-label=\"Restaurant description: ").concat(resto.description, "\" class=\"desc_item\">").concat(resto.description.slice(0, 100), "...</p>\n        </div>\n    </div>\n");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestoItemTemplate);

/***/ })

}]);
//# sourceMappingURL=app~ea9f8aa8.bundle.js.map