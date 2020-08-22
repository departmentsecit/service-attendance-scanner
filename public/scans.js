(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scans"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scans.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Scans.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      scanLogs: [],
      filters: {
        project: '',
        user: '',
        check_type: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchScanLogs(); //Date range picker

    $('#date-range').daterangepicker(); //Initialize Select2 Elements

    $('.select2').select2(); //Initialize Select2 Elements

    $('.select2bs4').select2({
      theme: 'bootstrap4'
    }); // search for rAF instead of using the setInterval
    // https://dev.opera.com/articles/better-performance-with-requestanimationframe/

    var myVar = setInterval(function () {
      return _this.fetchScanLogs();
    }, 3000); // clearInterval(myVar);
  },
  methods: {
    fetchScanLogs: function fetchScanLogs() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var myFilters;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                myFilters = '';
                myFilters = _this2.filters.project != '' ? myFilters + 'project=' + _this2.filters.project + '&' : '';
                myFilters = _this2.filters.user != '' ? myFilters + 'user=' + _this2.filters.user + '&' : '';
                myFilters = _this2.filters.check_type != '' ? myFilters + 'check_type=' + _this2.filters.check_type + '&' : '';
                _context.next = 6;
                return axios.get('/scans?' + myFilters).then(function (res) {
                  if ($.fn.DataTable.isDataTable('#scans-list')) $('#scans-list').DataTable().destroy();
                  _this2.scanLogs = res.data.data;
                });

              case 6:
                $('#scans-list').DataTable({
                  "paging": true,
                  "pageLength": 100,
                  "lengthChange": false,
                  "searching": false,
                  "ordering": true,
                  "info": true,
                  "autoWidth": false,
                  "responsive": true
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchUser: function fetchUser() {
      var _this3 = this;

      // create other controller that will return limited columns only for dropdown use
      axios.get('/users').then(function (response) {
        _this3.users = response.data.data;
      })["catch"](function (error) {
        if (error.response.status == 401) {
          alert('User session has expired. Please login again.');
          location.replace("/login");
        }
      });
    },
    setFilter: function setFilter(toFilter) {
      switch (toFilter) {
        case 'checkType':
          this.filters.check_type = $('#filter_check_type').val();
          $('#check-type-modal').modal('hide');
          break;

        case 'user':
          this.filters.user = $('#filter_user').val();
          $('#user-modal').modal('hide');
          break;

        case 'project':
          this.filters.project = $('#filter_project').val();
          $('#project-site-modal').modal('hide');
          break;

        case 'dateRange':
          this.filters.project = $('#filter_date_range').val();
          $('#date-range-modal').modal('hide');
          break;
      }

      this.fetchScanLogs();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scans.vue?vue&type=template&id=6696c73b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Scans.vue?vue&type=template&id=6696c73b& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card card-secondary" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Scans List")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }, [
              _c("div", { staticClass: "btn-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-tool",
                    attrs: { type: "button", title: "update list" },
                    on: {
                      click: function($event) {
                        return _vm.fetchScanLogs()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-sync-alt" })]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "table",
              {
                staticClass: "table table-bordered table-hover",
                attrs: { id: "scans-list" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.scanLogs, function(scanLog, i) {
                    return _c(
                      "tr",
                      {
                        key: i,
                        class:
                          scanLog.check_type == "out"
                            ? "text-warning"
                            : "text-success"
                      },
                      [
                        _c("td", [_vm._v(_vm._s(scanLog.user.first_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(scanLog.project.name))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(scanLog.building.number))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(scanLog.lift.number))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(scanLog.floor.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(scanLog.date_time_log))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(scanLog.check_type))
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "user-modal" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content bg-secondary" }, [
          _vm._m(4),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer justify-content-between" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-light",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v("Close")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-outline-light",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.setFilter("user")
                  }
                }
              },
              [_vm._v("Set")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "check-type-modal" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content bg-secondary" }, [
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.setFilter("checkType")
                    }
                  }
                },
                [_vm._v("Set")]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#date-range-modal"
                }
              },
              [
                _c("i", { staticClass: "fas fa-calendar-alt mr-1" }),
                _vm._v(" Sep 1 2020 - Sep 2 2020\n                    ")
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#project-site-modal"
                }
              },
              [
                _c("i", { staticClass: "fas fa-building mr-1" }),
                _vm._v(" All\n                    ")
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#user-modal"
                }
              },
              [
                _c("i", { staticClass: "fas fa-user mr-1" }),
                _vm._v(" All\n                    ")
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#check-type-modal"
                }
              },
              [
                _c("i", { staticClass: "fas fa-stopwatch mr-1" }),
                _vm._v(" All\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Scans")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("List")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Technician")]),
        _vm._v(" "),
        _c("th", [_vm._v("Project Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Bldg Num")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Lift Num")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Floor")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Date & Time")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Type")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "date-range-modal" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content bg-secondary" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v("Filter Date Range")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", { staticClass: "input-group-text" }, [
                      _c("i", { staticClass: "far fa-calendar-alt" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control float-right",
                    attrs: { type: "text", id: "date-range" }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light",
                  attrs: { type: "button" }
                },
                [_vm._v("Set Date")]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "project-site-modal" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content bg-secondary" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v("Filter Project Site")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "select",
                    {
                      staticClass: "form-control select2",
                      staticStyle: { width: "100%" }
                    },
                    [
                      _c("option", { attrs: { selected: "selected" } }, [
                        _vm._v("All")
                      ]),
                      _vm._v(" "),
                      _c("option", [_vm._v("All")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("NMB Head Quarter")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("NHC Iconic")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("Viva Tower")])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light",
                  attrs: { type: "button" }
                },
                [_vm._v("Set")]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Filter User")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "select",
            {
              staticClass: "form-control select2",
              staticStyle: { width: "100%" },
              attrs: { id: "filter_user" }
            },
            [
              _c("option", { attrs: { selected: "selected" } }, [
                _vm._v("All")
              ]),
              _vm._v(" "),
              _c("option", [_vm._v("Mr. Qiu")]),
              _vm._v(" "),
              _c("option", [_vm._v("Mr. Yang")]),
              _vm._v(" "),
              _c("option", [_vm._v("Mr. Zhuang")])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Filter Check Type")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "select",
            {
              staticClass: "form-control select2",
              staticStyle: { width: "100%" },
              attrs: { id: "filter_check_type" }
            },
            [
              _c("option", { attrs: { value: "", selected: "selected" } }, [
                _vm._v("All")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "in" } }, [_vm._v("Check In")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "out" } }, [_vm._v("Check Out")])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Scans.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Scans.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scans_vue_vue_type_template_id_6696c73b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scans.vue?vue&type=template&id=6696c73b& */ "./resources/js/components/Scans.vue?vue&type=template&id=6696c73b&");
/* harmony import */ var _Scans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scans.vue?vue&type=script&lang=js& */ "./resources/js/components/Scans.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scans_vue_vue_type_template_id_6696c73b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scans_vue_vue_type_template_id_6696c73b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Scans.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Scans.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Scans.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Scans.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scans.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Scans.vue?vue&type=template&id=6696c73b&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Scans.vue?vue&type=template&id=6696c73b& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scans_vue_vue_type_template_id_6696c73b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Scans.vue?vue&type=template&id=6696c73b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scans.vue?vue&type=template&id=6696c73b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scans_vue_vue_type_template_id_6696c73b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scans_vue_vue_type_template_id_6696c73b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);