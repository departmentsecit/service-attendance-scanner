(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-site"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectSites.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectSites.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      projects: [],
      buildings: [],
      lifts: [],
      floors: [],
      generateQRCodeForm: new Form({
        building: "",
        lift: "",
        floors: []
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getProjects(); //Date range picker

    $('#date-range').daterangepicker(); //Initialize Select2 Elements

    $('.select2').select2(); // execute this after closing generate-qr-modal

    $('#generate-qr-modal').on('hidden.bs.modal', function () {
      _this.buildings = [];
      _this.lifts = [];
      _this.floors = [];

      _this.generateQRCodeForm.reset();

      _this.generateQRCodeForm.clear();
    });
  },
  watch: {
    'generateQRCodeForm.building': function generateQRCodeFormBuilding(newVal) {
      this.lifts = [];
      this.generateQRCodeForm.lift = "";

      if (newVal != "") {
        this.getLifts(newVal);
      }
    },
    'generateQRCodeForm.lift': function generateQRCodeFormLift(newVal) {
      this.floors = [];
      this.generateQRCodeForm.floors = [];

      if (newVal != "") {
        this.getFloors(newVal);
      }
    }
  },
  methods: {
    getProjects: function getProjects() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/projects').then(function (res) {
                  if ($.fn.DataTable.isDataTable('#project-site-list')) $('#project-site-list').DataTable().destroy();
                  _this2.projects = res.data.data;
                });

              case 2:
                $('#project-site-list').DataTable({
                  "paging": true,
                  "pageLength": 100,
                  "lengthChange": false,
                  "searching": false,
                  "ordering": true,
                  "info": true,
                  "autoWidth": false,
                  "responsive": true,
                  "columnDefs": [{
                    "orderable": false,
                    "targets": [3, 4, 5]
                  }]
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getBuildings: function getBuildings(pId) {
      var _this3 = this;

      axios.get('/buildings/' + pId).then(function (res) {
        _this3.buildings = res.data;
      });
    },
    getLifts: function getLifts(bId) {
      var _this4 = this;

      axios.get('/lifts/by-building/' + bId).then(function (res) {
        _this4.lifts = res.data.data;
      });
    },
    getFloors: function getFloors(lId) {
      var _this5 = this;

      axios.get('/floors/' + lId).then(function (res) {
        _this5.floors = res.data.data;
      });
    },
    checkAllFloors: function checkAllFloors(e) {
      var _this6 = this;

      this.generateQRCodeForm.floors = [];

      if (e.target.checked) {
        this.floors.forEach(function (floor) {
          _this6.generateQRCodeForm.floors.push(floor.id);
        });
      }
    },
    generateQRCodeModal: function generateQRCodeModal() {
      // add code here to check if floors parameter is not empty 
      if (this.generateQRCodeForm.floors.length > 0) {
        window.open('/qr-code/generate/print?building=' + this.generateQRCodeForm.building + '&lift=' + this.generateQRCodeForm.lift + '&floors=' + this.generateQRCodeForm.floors, '_blank');
        $('generate-qr-modal').modal('hide');
      } else {
        Swal.fire('Error!', 'Please select at least 1 floor.', 'error');
      }
    },
    deleteProject: function deleteProject(id) {
      var _this7 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/project/' + id).then(function (res) {
            _this7.getProjects();

            toast.fire({
              icon: 'success',
              title: 'Project has bee deleted'
            });
          })["catch"](function (error) {
            if (error.response.status == 401) {
              alert('User session has expired. Please login again.');
              location.replace("/login");
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectSites.vue?vue&type=template&id=75071666&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectSites.vue?vue&type=template&id=75071666& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c(
              "form",
              { staticClass: "form-inline" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-secondary btn-sm ml-2",
                    attrs: { to: "/project-site/add" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus mr-1" }),
                    _vm._v(" New Project ")
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card card-info" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Project Sites")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }, [
              _c("div", { staticClass: "btn-group" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu dropdown-menu-right",
                    attrs: { role: "menu" }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item text-info",
                        attrs: { href: "#" }
                      },
                      [_vm._v("Countries / Cities")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item text-info",
                        attrs: { to: "/floor-names" }
                      },
                      [_vm._v("Floor Names")]
                    )
                  ],
                  1
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
                attrs: { id: "project-site-list" }
              },
              [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.projects, function(project, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(project.name))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(project.country.name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(project.city.name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(project.buildings.length))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(project.lifts.length))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#generate-qr-modal"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.getBuildings(project.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-qrcode" }),
                              _vm._v(" Code")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-info btn-sm",
                              attrs: {
                                to: {
                                  path: "/project-site/info",
                                  query: { t: "view", pId: project.id }
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-eye mr-1" }),
                              _vm._v("View")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.deleteProject(project.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-trash" }),
                              _vm._v(" Delete")
                            ]
                          )
                        ],
                        1
                      )
                    ])
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
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "generate-qr-modal" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content bg-secondary" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "building" } },
                    [_vm._v("Select building:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.generateQRCodeForm.building,
                          expression: "generateQRCodeForm.building"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "building" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.generateQRCodeForm,
                            "building",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", {
                        attrs: { value: "", selected: "", disabled: "" }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.buildings, function(building, i) {
                        return _c(
                          "option",
                          { key: i, domProps: { value: building.id } },
                          [
                            _vm._v(
                              _vm._s(building.number) +
                                " - " +
                                _vm._s(building.name)
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "lifts" } },
                    [_vm._v("Select Lift:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.generateQRCodeForm.lift,
                          expression: "generateQRCodeForm.lift"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "lift" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.generateQRCodeForm,
                            "lift",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", {
                        attrs: { value: "", selected: "", disabled: "" }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.lifts, function(lift, i) {
                        return _c(
                          "option",
                          { key: i, domProps: { value: lift.id } },
                          [_vm._v(_vm._s(lift.lift_num))]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "form-label" }, [
                  _vm._v("Select Floors:")
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-sm" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            width: "20px",
                            "vertical-align": "baseline"
                          }
                        },
                        [
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox" },
                              on: {
                                change: function($event) {
                                  return _vm.checkAllFloors($event)
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "20px" }
                        },
                        [_vm._v("#")]
                      ),
                      _vm._v(" "),
                      _c("th", [_vm._v("Floor Name")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.floors, function(floor, i) {
                      return _c("tr", { key: i }, [
                        _c("td", [
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.generateQRCodeForm.floors,
                                  expression: "generateQRCodeForm.floors"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: floor.id,
                                checked: Array.isArray(
                                  _vm.generateQRCodeForm.floors
                                )
                                  ? _vm._i(
                                      _vm.generateQRCodeForm.floors,
                                      floor.id
                                    ) > -1
                                  : _vm.generateQRCodeForm.floors
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.generateQRCodeForm.floors,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = floor.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.generateQRCodeForm,
                                          "floors",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.generateQRCodeForm,
                                          "floors",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.generateQRCodeForm,
                                      "floors",
                                      $$c
                                    )
                                  }
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(floor.floor_name.letter))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(floor.floor_name.name))])
                      ])
                    }),
                    0
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
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.generateQRCodeModal()
                    }
                  }
                },
                [_vm._v("Generate")]
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
    return _c("div", { staticClass: "input-group input-group-sm" }, [
      _c("input", {
        staticClass: "form-control form-control-navbar",
        attrs: {
          type: "search",
          placeholder: "Search Project...",
          "aria-label": "Search"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "input-group-append" }, [
        _c("button", { staticClass: "btn btn-secondary" }, [
          _c("i", { staticClass: "fas fa-search" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
        _c("li", { staticClass: "breadcrumb-item" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Project Sites")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("List")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-tool dropdown-toggle",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [_c("i", { staticClass: "fas fa-wrench" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("City")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Buildings")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Lifts")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Generate QR Code")]),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/ProjectSites.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/projects/ProjectSites.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectSites_vue_vue_type_template_id_75071666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSites.vue?vue&type=template&id=75071666& */ "./resources/js/components/projects/ProjectSites.vue?vue&type=template&id=75071666&");
/* harmony import */ var _ProjectSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectSites.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectSites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectSites_vue_vue_type_template_id_75071666___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectSites_vue_vue_type_template_id_75071666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectSites.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectSites.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectSites.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectSites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectSites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectSites.vue?vue&type=template&id=75071666&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectSites.vue?vue&type=template&id=75071666& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSites_vue_vue_type_template_id_75071666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectSites.vue?vue&type=template&id=75071666& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectSites.vue?vue&type=template&id=75071666&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSites_vue_vue_type_template_id_75071666___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSites_vue_vue_type_template_id_75071666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);