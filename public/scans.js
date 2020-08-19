(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scans"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scans.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Scans.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  mounted: function mounted() {
    $('#scans-list').DataTable({
      "paging": true,
      "pageLength": 100,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true
    }); //Date range picker

    $('#date-range').daterangepicker(); //Initialize Select2 Elements

    $('.select2').select2(); //Initialize Select2 Elements

    $('.select2bs4').select2({
      theme: 'bootstrap4'
    });
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("section", { staticClass: "content-header" }, [
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
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card card-secondary" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Scans List")])
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
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Technician")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Project Name")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("Bldg Num")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("Left Num")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("Floor")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("Date & Time")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("Check Type")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Jun Rey")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("NMB Head Quarter")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("G")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("Sep 4, 2020 1:12:00 PM")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("Out")])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
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
              _c(
                "div",
                { staticClass: "modal-footer justify-content-between" },
                [
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
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
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
              _c(
                "div",
                { staticClass: "modal-footer justify-content-between" },
                [
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
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "user-modal" } }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content bg-secondary" }, [
            _c("div", { staticClass: "modal-header" }, [
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
                      _c("option", [_vm._v("Mr. Qiu")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("Mr. Yang")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("Mr. Zhuang")])
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
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal fade", attrs: { id: "check-type-modal" } },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content bg-secondary" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h4", { staticClass: "modal-title" }, [
                  _vm._v("Filter Check Type")
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
                        _c("option", [_vm._v("Check In")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Check Out")])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer justify-content-between" },
                [
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
                ]
              )
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


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