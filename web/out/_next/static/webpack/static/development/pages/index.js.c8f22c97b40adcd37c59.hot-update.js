webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tippy */ "./node_modules/react-tippy/dist/react-tippy.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _assets_logos_single_glass_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../assets/logos/single-glass.png */ "./assets/logos/single-glass.png");
/* harmony import */ var _assets_logos_single_glass_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_logos_single_glass_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_logos_logo_untapped_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../assets/logos/logo-untapped.png */ "./assets/logos/logo-untapped.png");
/* harmony import */ var _assets_logos_logo_untapped_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_logos_logo_untapped_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../components/Table */ "./components/Table.js");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../components/Chart */ "./components/Chart.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/brandonevans/Repo/SANS/untappdScraper/web/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var timeFormat = 'DD MMM YY HH:mm:ss Z';

var getHourPriority = function getHourPriority(numString) {
  var num = parseInt(numString, 10);
  var priority = num - 7;

  if (priority < 0) {
    priority = 24 + priority;
  }

  return priority;
};

var sortTimes = function sortTimes(a, b) {
  var aUnix = a.time.unix();
  var bUnix = b.time.unix();

  if (aUnix < bUnix) {
    return -1;
  }

  if (aUnix > bUnix) {
    return 1;
  }

  return 0;
};

var sortFirstDrinkTimes = function sortFirstDrinkTimes(a, b) {
  var aUnix = a.firstDrinkTime.unix();
  var bUnix = b.firstDrinkTime.unix();

  if (aUnix < bUnix) {
    return -1;
  }

  if (aUnix > bUnix) {
    return 1;
  }

  return 0;
};

var sortVisitDates = function sortVisitDates(a, b) {
  if (a.firstVisitDate && b.firstVisitDate) {
    return sortMoments(moment_timezone__WEBPACK_IMPORTED_MODULE_18__(a.firstVisitDate), moment_timezone__WEBPACK_IMPORTED_MODULE_18__(b.firstVisitDate));
  }

  if (a.lastVisitDate && b.lastVisitDate) {
    return sortDates(a.lastVisitDate, b.lastVisitDate);
  }

  return 0;
};

var sortHourEntries = function sortHourEntries(a, b) {
  // Sort from 07:00 to 06:00.
  var aPriority = getHourPriority(a[0]);
  var bPriority = getHourPriority(b[0]);

  if (aPriority < bPriority) {
    return -1;
  }

  if (aPriority > bPriority) {
    return 1;
  }

  return 0;
};

var makeChartData = function makeChartData(initialData, sortFn, formatX) {
  var entries = Object.entries(initialData);

  if (sortFn) {
    entries = entries.sort(sortFn);
  }

  return entries.reduce(function (acc, cur) {
    var _cur = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(cur, 2),
        x = _cur[0],
        y = _cur[1];

    if (formatX) {
      x = formatX(x);
    }

    return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(acc), [{
      x: x,
      y: y
    }]);
  }, []);
};

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this);
    _this.state = {
      username: '',
      recentActivityOnly: false,
      googleMapsApiKey: '',
      googleMapsClient: null,
      loadingGoogleMapsClient: false,
      data: null,
      error: null,
      submitting: false,
      loading: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "updateUsername",
    value: function updateUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "updateRecentActivityOnly",
    value: function updateRecentActivityOnly() {
      this.setState({
        recentActivityOnly: !this.state.recentActivityOnly
      });
    }
  }, {
    key: "updateGoogleMapsApiKey",
    value: function updateGoogleMapsApiKey(e) {
      this.setState({
        googleMapsApiKey: e.target.value
      });
    }
  }, {
    key: "getUntappdOsint",
    value: function getUntappdOsint(e) {
      var username, recentActivityOnly, googleMapsClient, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getUntappdOsint$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              this.setState({
                data: null,
                error: null,
                submitting: true,
                loading: true
              });
              username = this.state.username.trim();
              recentActivityOnly = this.state.recentActivityOnly;
              googleMapsClient = this.state.googleMapsClient;

              if (!username) {
                _context.next = 18;
                break;
              }

              _context.prev = 6;
              _context.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_15__["getUntappdOsint"])(username, recentActivityOnly, googleMapsClient));

            case 9:
              data = _context.sent;
              this.setState({
                data: data,
                username: '',
                submitting: false,
                loading: false
              });
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);
              this.setState({
                error: _context.t0.toString(),
                submitting: false,
                loading: false
              });

            case 16:
              _context.next = 19;
              break;

            case 18:
              this.setState({
                error: 'Must provide a username.',
                submitting: false,
                loading: false
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[6, 13]], Promise);
    }
  }, {
    key: "setupGoogleMapsClient",
    value: function setupGoogleMapsClient(e) {
      var googleMapsApiKey;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function setupGoogleMapsClient$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              this.setState({
                loadingGoogleMapsClient: true,
                submitting: true
              });
              googleMapsApiKey = this.state.googleMapsApiKey ? this.state.googleMapsApiKey.trim() : undefined;

              if (!googleMapsApiKey) {
                _context2.next = 15;
                break;
              }

              _context2.prev = 4;
              _context2.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_15__["loadGoogleMapsClient"])(googleMapsApiKey));

            case 7:
              this.setState({
                // eslint-disable-next-line no-undef
                googleMapsClient: google,
                loadingGoogleMapsClient: false,
                submitting: false
              });
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](4);
              this.setState({
                error: _context2.t0.toString(),
                loadingGoogleMapsClient: false,
                submitting: false
              });

            case 13:
              _context2.next = 16;
              break;

            case 15:
              this.setState({
                error: 'Must provide a Google Maps API key.',
                loadingGoogleMapsClient: false
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[4, 10]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var googleAPITooltip = 'Optionally, you can provide a valid Google Maps API key, which will enable the application to analyze the locations it finds. This key is never sent to any server other than the Google Maps API.<br/><br/>This might silently fail if the API key provided is invalid or for an account that does not have the Maps JavaScript API and Geocoding APIs enabled. Check the developer console if the Maps functionality does not work correctly after setting the API key.';
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 7
        }
      }, __jsx("menu", {
        className: "navbar-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }
      },  true && __jsx("img", {
        id: "logo-img",
        src: _assets_logos_logo_untapped_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "logoImg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }), __jsx("div", {
        id: "user-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }, __jsx("form", {
        onSubmit: function onSubmit(e) {
          _this2.getUntappdOsint(e);
        },
        disabled: this.state.submitting,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, __jsx("input", {
        className: "text-input",
        placeholder: "Username",
        type: "text",
        value: this.state.username,
        onChange: function onChange(e) {
          return _this2.updateUsername(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 15
        }
      }), __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }, "Recent Activity ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 38
        }
      }, "only")), __jsx("input", {
        type: "checkbox",
        value: this.state.recentActivityOnly,
        onChange: function onChange(e) {
          _this2.updateRecentActivityOnly(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      }), __jsx("input", {
        className: "button",
        type: "submit",
        value: "Scrape",
        disabled: this.state.submitting,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }
      }))), __jsx("div", {
        id: "maps-api-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }
      }, __jsx("form", {
        onSubmit: function onSubmit(e) {
          _this2.setupGoogleMapsClient(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }
      }, __jsx("input", {
        className: "text-input",
        placeholder: "Google Maps API Key",
        type: "password",
        value: this.state.googleMapsApiKey,
        onChange: function onChange(e) {
          _this2.updateGoogleMapsApiKey(e);
        },
        readOnly: this.state.googleMapsClient,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 15
        }
      }), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        title: googleAPITooltip,
        position: "bottom",
        trigger: "click",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faQuestionCircle"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 17
        }
      })), __jsx("input", {
        className: "button",
        type: "submit",
        value: "Set",
        disabled: this.state.loadingGoogleMapsClient || this.state.googleMapsClient,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 15
        }
      })))), __jsx("main", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 9
        }
      }, this.state.error && __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 13
        }
      }, this.state.error), this.state.loading && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }
      }, __jsx("img", {
        className: "loading-beer",
        src: _assets_logos_single_glass_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "loadingIcon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 18
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 15
        }
      }, "Scraping...")), this.state.data && this.state.data.stats && __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "User Stats for ".concat(this.state.data.username),
        data: [_objectSpread({}, this.state.data.stats)],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 13
        }
      }), this.state.data && this.state.data.recentActivity && __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Recent Activity",
        data: this.state.data.recentActivity.sort(sortTimes),
        valueFormatter: function valueFormatter(params) {
          if (params.column.colId === 'time') {
            return params.value.format(timeFormat);
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 13
        }
      }), this.state.data && this.state.data.venues && __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Venues: ",
        data: this.state.data.venues,
        valueFormatter: function valueFormatter(params) {
          var venue = params.data;
          var columnName = params.column.colId;

          if (columnName === 'geocode') {
            return "".concat(venue.geocode[0].geometry.location.lat(), ", ").concat(venue.geocode[0].geometry.location.lng());
          }

          return params.value;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 13
        }
      }), this.state.data && this.state.data.beers && __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Beers:",
        data: this.state.data.beers.sort(sortFirstDrinkTimes),
        valueFormatter: function valueFormatter(params) {
          var columnName = params.column.colId;

          if (columnName === 'firstDrinkTime') {
            return params.value.format(timeFormat);
          }

          if (columnName === 'lastDrinkTime') {
            return params.value.format(timeFormat);
          }

          return params.value;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }
      }), __jsx("div", {
        style: {
          height: this.state.data && this.state.data.map ? '400px' : 0
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "map",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 13
        }
      })), this.state.data && this.state.data.beerAnalytics && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 13
        }
      }, this.state.data && this.state.data.beerAnalytics.dayOfWeek && __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_17__["default"], {
        headerTitle: "Drinking Patterns (Last 25 beers) - Day of Week:",
        data: makeChartData(this.state.data.beerAnalytics.dayOfWeek),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 17
        }
      }), this.state.data && this.state.data.beerAnalytics.hourOfDay && __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_17__["default"], {
        headerTitle: "Drinking Patterns (Last 25 beers) - Hour of Day:",
        data: makeChartData(this.state.data.beerAnalytics.hourOfDay, sortHourEntries, _lib_utils__WEBPACK_IMPORTED_MODULE_15__["formatHour"]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 17
        }
      }), this.state.data && this.state.data.beerAnalytics.dayOfMonth && __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_17__["default"], {
        headerTitle: "Drinking Patterns (Last 25 beers) - Day of Month:",
        data: makeChartData(this.state.data.beerAnalytics.dayOfMonth),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 17
        }
      }), this.state.data && this.state.data.beerAnalytics.binges && __jsx("div", {
        className: "binges-table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 17
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 19
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }
      }, "Binge Drink Periods (5+ drinks for men / 4+ drinks for women in < 2 hours*):")), __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 19
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 23
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 25
        }
      }, "Start Time"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 25
        }
      }, "End Time"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 25
        }
      }, "Total Drinks"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 21
        }
      }, this.state.data.beerAnalytics.binges.map(function (binge, index) {
        return __jsx("tr", {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 27
          }
        }, binge[0].format(timeFormat)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 27
          }
        }, binge[binge.length - 1].format(timeFormat)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 27
          }
        }, binge.length));
      })))), this.state.data && this.state.data.beerAnalytics.heavyUses && __jsx("div", {
        className: "heavy-uses-table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 17
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 19
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 21
        }
      }, "Heavy Alcohol Uses (5+ instances of binge drinking in the past month):")), __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 19
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 23
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      }, "Start Time"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 25
        }
      }, "End Time"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 25
        }
      }, "Total Binges"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 21
        }
      }, this.state.data.beerAnalytics.heavyUses.map(function (heavyUse, index) {
        return __jsx("tr", {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 27
          }
        }, heavyUse[0][0].format(timeFormat)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 27
          }
        }, heavyUse[heavyUse.length - 1][heavyUse[heavyUse.length - 1].length - 1].format(timeFormat)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 27
          }
        }, heavyUse.length));
      })))), this.state.data && (this.state.data.beerAnalytics.binges || this.state.data.beerAnalytics.heavyUses) && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 17
        }
      }, "*", __jsx("a", {
        href: "https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/moderate-binge-drinking",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 20
        }
      }, __jsx("em", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 124
        }
      }, "Drinking Levels Definitions from the NIAAA"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.c8f22c97b40adcd37c59.hot-update.js.map