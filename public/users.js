(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      addUserForm: new Form({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        password_confirmation: '',
        level: 1
      }),
      updateUserForm: new Form({
        id: '',
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        password_confirmation: '',
        level: '',
        status: ''
      }),
      isUpdate: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchUser();
    $('#add-update-user-modal-lg').on('hidden.bs.modal', function () {
      _this.addUserForm.reset();

      _this.addUserForm.clear();

      _this.updateUserForm.reset();

      _this.updateUserForm.clear();
    });
  },
  methods: {
    fetchUser: function fetchUser() {
      var _this2 = this;

      axios.get('/users').then(function (response) {
        _this2.users = response.data.data;
      })["catch"](function (error) {
        if (error.response.status == 401) {
          alert('User session has expired. Please login again.');
          location.replace("/login");
        }
      });
    },
    add: function add() {
      var _this3 = this;

      this.addUserForm.post('/user').then(function (res) {
        _this3.fetchUser();

        $('#add-update-user-modal-lg').modal('hide');
        Swal.fire('Saved!', 'User has been added successfully.', 'success');
      });
    },
    showUpdate: function showUpdate(user) {
      this.isUpdate = true;
      this.updateUserForm.id = user.id;
      this.updateUserForm.first_name = user.first_name;
      this.updateUserForm.last_name = user.last_name;
      this.updateUserForm.username = user.username;
      this.updateUserForm.password = user.password;
      this.updateUserForm.password_confirmation = user.password_confirmation;
      this.updateUserForm.level = user.level;
    },
    saveUpdate: function saveUpdate(uid) {
      var _this4 = this;

      this.updateUserForm.put('/user/' + uid).then(function (res) {
        _this4.fetchUser();

        $('#add-update-user-modal-lg').modal('hide');
        Swal.fire('Saved!', 'User has been updated successfully.', 'success');
      });
    },
    deleteUser: function deleteUser(uid) {
      var _this5 = this;

      axios["delete"]('/user/' + uid).then(function (res) {
        _this5.fetchUser();

        toast.fire({
          icon: 'success',
          title: 'User has bee deleted'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
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
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("List")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-block btn-primary btn-sm",
                  attrs: {
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#add-update-user-modal-lg"
                  },
                  on: {
                    click: function($event) {
                      _vm.isUpdate = false
                    }
                  }
                },
                [_vm._v("Add User")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-0" }, [
            _c("table", { staticClass: "table table-hover text-nowrap" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.users, function(user, index) {
                  return _c("tr", { key: index, staticClass: "clickable" }, [
                    _c("td", [_vm._v(_vm._s(user.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.username))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.first_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.last_name))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(user.level))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.status))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-sm",
                          attrs: {
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#add-update-user-modal-lg"
                          },
                          on: {
                            click: function($event) {
                              return _vm.showUpdate(user)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-pen" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm ml-2",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.deleteUser(user.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "add-update-user-modal-lg" } },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(
                  _vm._s(
                    _vm.isUpdate ? "Update User Info" : "Add New User Form"
                  )
                )
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body form-horizontal" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label text-md-right",
                      attrs: { for: "firstname" }
                    },
                    [_vm._v("First Name")]
                  ),
                  _vm._v(" "),
                  !_vm.isUpdate
                    ? _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.addUserForm.first_name,
                                expression: "addUserForm.first_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.addUserForm.errors.has(
                                "first_name"
                              )
                            },
                            attrs: {
                              type: "text",
                              id: "firsname",
                              placeholder: "Enter First Name",
                              required: ""
                            },
                            domProps: { value: _vm.addUserForm.first_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.addUserForm,
                                  "first_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.addUserForm,
                              field: "first_name"
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateUserForm.first_name,
                                expression: "updateUserForm.first_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.updateUserForm.errors.has(
                                "first_name"
                              )
                            },
                            attrs: {
                              type: "text",
                              id: "firsname",
                              placeholder: "Enter First Name",
                              required: ""
                            },
                            domProps: { value: _vm.updateUserForm.first_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateUserForm,
                                  "first_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.updateUserForm,
                              field: "first_name"
                            }
                          })
                        ],
                        1
                      )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label text-md-right",
                      attrs: { for: "lastname" }
                    },
                    [_vm._v("Last Name")]
                  ),
                  _vm._v(" "),
                  !_vm.isUpdate
                    ? _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.addUserForm.last_name,
                                expression: "addUserForm.last_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.addUserForm.errors.has(
                                "last_name"
                              )
                            },
                            attrs: {
                              type: "text",
                              id: "lastname",
                              placeholder: "Enter Last Name",
                              required: ""
                            },
                            domProps: { value: _vm.addUserForm.last_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.addUserForm,
                                  "last_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.addUserForm, field: "last_name" }
                          })
                        ],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateUserForm.last_name,
                                expression: "updateUserForm.last_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.updateUserForm.errors.has(
                                "last_name"
                              )
                            },
                            attrs: {
                              type: "text",
                              id: "lastname",
                              placeholder: "Enter Last Name",
                              required: ""
                            },
                            domProps: { value: _vm.updateUserForm.last_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateUserForm,
                                  "last_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.updateUserForm,
                              field: "last_name"
                            }
                          })
                        ],
                        1
                      )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label text-md-right",
                      attrs: { for: "username" }
                    },
                    [_vm._v("Username")]
                  ),
                  _vm._v(" "),
                  !_vm.isUpdate
                    ? _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.addUserForm.username,
                                expression: "addUserForm.username"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.addUserForm.errors.has(
                                "username"
                              )
                            },
                            attrs: {
                              type: "text",
                              id: "username",
                              placeholder: "Enter Username",
                              required: ""
                            },
                            domProps: { value: _vm.addUserForm.username },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.addUserForm,
                                  "username",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.addUserForm, field: "username" }
                          })
                        ],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateUserForm.username,
                                expression: "updateUserForm.username"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.updateUserForm.errors.has(
                                "username"
                              )
                            },
                            attrs: {
                              type: "text",
                              id: "username",
                              placeholder: "Enter Username",
                              disabled: ""
                            },
                            domProps: { value: _vm.updateUserForm.username },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateUserForm,
                                  "username",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.updateUserForm,
                              field: "username"
                            }
                          })
                        ],
                        1
                      )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label text-md-right",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  !_vm.isUpdate
                    ? _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.addUserForm.password,
                                expression: "addUserForm.password"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.addUserForm.errors.has(
                                "password"
                              )
                            },
                            attrs: {
                              type: "password",
                              id: "password",
                              placeholder: "Enter Password",
                              required: ""
                            },
                            domProps: { value: _vm.addUserForm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.addUserForm,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.addUserForm, field: "password" }
                          })
                        ],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateUserForm.password,
                                expression: "updateUserForm.password"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.updateUserForm.errors.has(
                                "password"
                              )
                            },
                            attrs: {
                              type: "password",
                              id: "password",
                              placeholder: "Enter Password"
                            },
                            domProps: { value: _vm.updateUserForm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateUserForm,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.updateUserForm,
                              field: "password"
                            }
                          })
                        ],
                        1
                      )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label text-md-right",
                      attrs: { for: "password_confirmation" }
                    },
                    [_vm._v("Confirm Password")]
                  ),
                  _vm._v(" "),
                  !_vm.isUpdate
                    ? _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.addUserForm.password_confirmation,
                              expression: "addUserForm.password_confirmation"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "password_confirmation",
                            placeholder: "Confirm Password",
                            required: ""
                          },
                          domProps: {
                            value: _vm.addUserForm.password_confirmation
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.addUserForm,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    : _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.updateUserForm.password_confirmation,
                              expression: "updateUserForm.password_confirmation"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "password_confirmation",
                            placeholder: "Confirm Password"
                          },
                          domProps: {
                            value: _vm.updateUserForm.password_confirmation
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.updateUserForm,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label text-md-right",
                      attrs: { for: "level" }
                    },
                    [_vm._v("Level")]
                  ),
                  _vm._v(" "),
                  !_vm.isUpdate
                    ? _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.addUserForm.level,
                                  expression: "addUserForm.level"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.addUserForm.errors.has(
                                  "level"
                                )
                              },
                              attrs: { id: "level" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.addUserForm,
                                    "level",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("1")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("2")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("3")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.addUserForm, field: "level" }
                          })
                        ],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "col-sm-9" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.updateUserForm.level,
                                  expression: "updateUserForm.level"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.updateUserForm.errors.has(
                                  "level"
                                )
                              },
                              attrs: { id: "level" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.updateUserForm,
                                    "level",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("1")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("2")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("3")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.updateUserForm, field: "level" }
                          })
                        ],
                        1
                      )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              !_vm.isUpdate
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.add()
                        }
                      }
                    },
                    [_vm._v("Add User")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.saveUpdate(_vm.updateUserForm.id)
                        }
                      }
                    },
                    [_vm._v("Save Update")]
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
          _c("div", { staticClass: "col-sm-6" }, [_c("h1", [_vm._v("Users")])]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Users")])
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
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Username")]),
        _vm._v(" "),
        _c("th", [_vm._v("First Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Level")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "100px" } })
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
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
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

/***/ "./resources/js/components/Users.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Users.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=30c27aa6& */ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=30c27aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);