(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      projectId: null,
      saved: false,
      countries: [],
      cities: [],
      buildings: [],
      lifts: [],
      floorNames: [],
      newProjectForm: new Form({
        name: "",
        country: "",
        city: "",
        address: "",
        contact_person: "",
        contact_number: "",
        description: "",
        status: "",
        supervisor: "",
        buildings: []
      }),
      newBuildingForm: {
        number: "",
        name: ""
      },
      newLiftForm: new Form({
        project_id: null,
        building: "",
        lift_number: "",
        description: "",
        floor_count: 0,
        floors: []
      }),
      newCountryForm: new Form({
        name: "",
        abrv: ""
      }),
      newCityForm: new Form({
        country_id: "",
        name: "",
        abrv: ""
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    // fetch data for dropdown list
    this.getCountries(); //Initialize Select2 Elements

    $('.select2').select2(); // reset add country modal 

    $('#modal-add-country').on('hidden.bs.modal', function () {
      _this.newCountryForm.reset();

      _this.newCountryForm.clear();
    }); // reset add city modal 

    $('#modal-add-city').on('hidden.bs.modal', function () {
      _this.newCityForm.reset();

      _this.newCityForm.clear();
    });
  },
  watch: {
    'newProjectForm.country': function newProjectFormCountry(newVal) {
      this.getCities(newVal);
    }
  },
  methods: {
    addBuilding: function addBuilding() {
      var _this2 = this;

      // check if building number populated
      if (this.newBuildingForm.number && this.newBuildingForm.name) {
        // check if building already added on the list
        var result = this.newProjectForm.buildings.find(function (building) {
          return building.number === _this2.newBuildingForm.number;
        });

        if (!result) {
          this.newProjectForm.buildings.push(_.cloneDeep(this.newBuildingForm));
          this.newBuildingForm.number = "";
          this.newBuildingForm.name = "";
        } else {
          Swal.fire('Error!', 'Building already added', 'error');
        }
      } else {
        Swal.fire('Error!', 'Please fill out all fields.', 'error');
      }
    },
    removeBuilding: function removeBuilding(index) {
      this.newProjectForm.buildings.splice(index, 1);
    },
    saveProject: function saveProject() {
      var _this3 = this;

      this.newProjectForm.post('/project').then(function (res) {
        if (res.status == 200) {
          _this3.projectId = res.data.project.id;

          _this3.getFloorNames();

          _this3.getBuildings();

          _this3.saved = true;
          toast.fire({
            icon: 'success',
            title: 'Project has been saved.'
          });
        } else {
          Swal.fire('Error!', 'Unable to save project.', 'error');
        }
      })["catch"](function (res) {
        Swal.fire('Error!', 'Unable to save project.', 'error');
      });
    },
    getCountries: function getCountries() {
      var _this4 = this;

      axios.get('/countries').then(function (res) {
        _this4.countries = res.data;
      });
    },
    addCountry: function addCountry() {
      var _this5 = this;

      this.newCountryForm.post('/country').then(function (res) {
        if (res.status == 201) {
          _this5.getCountries();

          $('#modal-add-country').modal('hide');
          Swal.fire('Success!', 'Country has been added successfully', 'success');
        } else {
          Swal.fire('Error!', 'Unable to save country.', 'error');
        }
      });
    },
    getCities: function getCities(id) {
      var _this6 = this;

      axios.get('/cities?country_id=' + id).then(function (res) {
        _this6.cities = res.data;
      });
    },
    addCity: function addCity() {
      var _this7 = this;

      this.newCityForm.post('/city').then(function (res) {
        if (res.status == 201) {
          _this7.getCities(_this7.newProjectForm.country);

          $('#modal-add-city').modal('hide');
          Swal.fire('Success!', 'City has been added successfully', 'success');
        } else {
          Swal.fire('Error!', 'Unable to save city.', 'error');
        }
      });
    },
    getFloorNames: function getFloorNames() {
      var _this8 = this;

      axios.get('/floor-names').then(function (res) {
        _this8.floorNames = res.data;
      });
    },
    getLifts: function getLifts() {
      var _this9 = this;

      axios.get('/lifts/' + this.projectId).then(function (res) {
        _this9.lifts = res.data.data;
      });
    },
    getBuildings: function getBuildings() {
      var _this10 = this;

      axios.get('/buildings/' + this.projectId).then(function (res) {
        _this10.buildings = res.data;
      });
    },
    addLift: function addLift() {
      var _this11 = this;

      // get all floors and push to array
      this.newLiftForm.floors = [];

      for (var i = 1; i <= this.newLiftForm.floor_count; i++) {
        var floorNameId = $('#floor-name-' + i).val();

        if (floorNameId) {
          this.newLiftForm.floors.push(floorNameId);
        } else {
          this.newLiftForm.floors = [];
          break;
        }
      }

      if (this.newLiftForm.floors.length > 0) {
        this.newLiftForm.project_id = this.projectId;
        this.newLiftForm.post('/lift').then(function (res) {
          if (res.status == 200) {
            _this11.getLifts();

            _this11.newLiftForm.reset();

            _this11.newLiftForm.clear();

            toast.fire({
              icon: 'success',
              title: 'Lift has been saved.'
            });
          } else {
            Swal.fire('Error!', 'Unable to save lift.', 'error');
          }
        })["catch"](function (res) {
          Swal.fire('Error!', 'Unable to save lift.', 'error');
        });
      } else {
        Swal.fire('Error', 'Please complete filling out the floor names', 'error');
      }
    },
    cancelAddLift: function cancelAddLift() {
      this.newLiftForm.clear();
      this.newLiftForm.reset();
    },
    copyLift: function copyLift(lift) {
      this.newLiftForm.building = lift.building.id;
      this.newLiftForm.description = lift.description;
      this.newLiftForm.floor_count = lift.floor_count;
      axios.get('/floors/' + lift.id).then(function (res) {
        var floors = res.data.data;

        for (var i = 1; i <= lift.floor_count; i++) {
          $('#floor-name-' + i).val(floors[i - 1].floor_name.id);
        }
      });
    },
    deleteLift: function deleteLift(liftId) {
      var _this12 = this;

      axios["delete"]('/lift/' + liftId).then(function (res) {
        if (res.status == 200) {
          _this12.getLifts();

          toast.fire({
            icon: 'success',
            title: 'Lift has been deleted.'
          });
        } else {
          toast.fire({
            icon: 'error',
            title: 'Unable to delete lift.'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectAdd.vue?vue&type=template&id=d98ff1bc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectAdd.vue?vue&type=template&id=d98ff1bc& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card card-info card-tabs" }, [
          _c("div", { staticClass: "card-header p-0 pt-1" }, [
            _c(
              "ul",
              {
                staticClass: "nav nav-tabs",
                attrs: { id: "custom-tabs-two-tab", role: "tablist" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: _vm.saved ? "" : "active",
                      attrs: {
                        id: "project-details-tab",
                        "data-toggle": "pill",
                        href: "#project-details",
                        role: "tab",
                        "aria-controls": "project-details",
                        "aria-selected": "true"
                      }
                    },
                    [
                      _vm._v(
                        "\n                                Project Details\n                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: _vm.saved ? "active" : "disabled",
                      attrs: {
                        id: "lifts-details-tab",
                        "data-toggle": "pill",
                        href: "#lifts-details",
                        role: "tab",
                        "aria-controls": "lifts-details",
                        "aria-selected": "false"
                      }
                    },
                    [
                      _vm._v(
                        "\n                                Lifts Details\n                            "
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              {
                staticClass: "tab-content",
                attrs: { id: "custom-tabs-two-tabContent" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    class: _vm.saved ? "" : "show active",
                    attrs: {
                      id: "project-details",
                      role: "tabpanel",
                      "aria-labelledby": "project-details-tab"
                    }
                  },
                  [
                    _c("alert-errors", {
                      attrs: {
                        form: _vm.newProjectForm,
                        message: "There were some problems with your input."
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-10" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newProjectForm.name,
                                  expression: "newProjectForm.name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.newProjectForm.errors.has(
                                  "name"
                                )
                              },
                              attrs: {
                                type: "text",
                                id: "projectName",
                                placeholder: "Enter project name"
                              },
                              domProps: { value: _vm.newProjectForm.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newProjectForm,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.newProjectForm, field: "name" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-11" },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.newProjectForm.country,
                                        expression: "newProjectForm.country"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "text-placeholder":
                                        _vm.newProjectForm.country == "",
                                      "is-invalid": _vm.newProjectForm.errors.has(
                                        "country"
                                      )
                                    },
                                    attrs: { id: "projectCountry" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.newProjectForm,
                                          "country",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "",
                                          selected: "",
                                          disabled: ""
                                        }
                                      },
                                      [_vm._v("Select country")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.countries, function(country, i) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass: "text-black",
                                          domProps: { value: country.id }
                                        },
                                        [_vm._v(_vm._s(country.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.newProjectForm,
                                    field: "country"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._m(4)
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-11" },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.newProjectForm.city,
                                        expression: "newProjectForm.city"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "text-placeholder":
                                        _vm.newProjectForm.city == "",
                                      "is-invalid": _vm.newProjectForm.errors.has(
                                        "city"
                                      )
                                    },
                                    attrs: { id: "projectCity" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.newProjectForm,
                                          "city",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "",
                                          selected: "",
                                          disabled: ""
                                        }
                                      },
                                      [_vm._v("Select city")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.cities, function(city, i) {
                                      return _c(
                                        "option",
                                        {
                                          key: i,
                                          staticClass: "text-black",
                                          domProps: { value: city.id }
                                        },
                                        [_vm._v(_vm._s(city.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.newProjectForm,
                                    field: "city"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-1" }, [
                              _c("i", {
                                staticClass:
                                  "fas fa-plus clickable text-primary mt-2",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target": "#modal-add-city"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.newCityForm.country_id =
                                      _vm.newProjectForm.country
                                  }
                                }
                              })
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "col-sm-2 col-form-label text-sm-right",
                            attrs: { for: "projectAddress" }
                          },
                          [_vm._v("Address:")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newProjectForm.address,
                                expression: "newProjectForm.address"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectAddress",
                              placeholder: "Enter project address"
                            },
                            domProps: { value: _vm.newProjectForm.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newProjectForm,
                                  "address",
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
                            staticClass:
                              "col-sm-2 col-form-label text-sm-right",
                            attrs: { for: "projectContactPerson" }
                          },
                          [_vm._v("Contact Person:")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newProjectForm.contact_person,
                                expression: "newProjectForm.contact_person"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectContactPerson",
                              placeholder: "Enter project contact person"
                            },
                            domProps: {
                              value: _vm.newProjectForm.contact_person
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newProjectForm,
                                  "contact_person",
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
                            staticClass:
                              "col-sm-2 col-form-label text-sm-right",
                            attrs: { for: "projectContactNumber" }
                          },
                          [_vm._v("Contact Number:")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newProjectForm.contact_number,
                                expression: "newProjectForm.contact_number"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectContactNumber",
                              placeholder: "Enter project contact number"
                            },
                            domProps: {
                              value: _vm.newProjectForm.contact_number
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newProjectForm,
                                  "contact_number",
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
                            staticClass:
                              "col-sm-2 col-form-label text-sm-right",
                            attrs: { for: "projectDescription" }
                          },
                          [_vm._v("Project Description:")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newProjectForm.description,
                                expression: "newProjectForm.description"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "projectDescription",
                              rows: "5",
                              placeholder: "Enter project description"
                            },
                            domProps: { value: _vm.newProjectForm.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newProjectForm,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _vm._m(6),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-10" },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newProjectForm.status,
                                    expression: "newProjectForm.status"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "text-placeholder":
                                    _vm.newProjectForm.status == "",
                                  "is-invalid": _vm.newProjectForm.errors.has(
                                    "status"
                                  )
                                },
                                attrs: { id: "projectStatus" },
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
                                      _vm.newProjectForm,
                                      "status",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: {
                                      selected: "",
                                      disabled: "",
                                      value: ""
                                    }
                                  },
                                  [_vm._v("Select one")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  {
                                    staticClass: "text-black",
                                    attrs: { value: "Active" }
                                  },
                                  [_vm._v("Active")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  {
                                    staticClass: "text-black",
                                    attrs: { value: "On-Hold" }
                                  },
                                  [_vm._v("On-Hold")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  {
                                    staticClass: "text-black",
                                    attrs: { value: "Canceled" }
                                  },
                                  [_vm._v("Canceled")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.newProjectForm,
                                field: "status"
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
                            staticClass:
                              "col-sm-2 col-form-label text-sm-right",
                            attrs: { for: "projectSupervisor" }
                          },
                          [_vm._v("Project Supervisor:")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newProjectForm.supervisor,
                                expression: "newProjectForm.supervisor"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectSupervisor",
                              placeholder: "Enter project supervisor"
                            },
                            domProps: { value: _vm.newProjectForm.supervisor },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newProjectForm,
                                  "supervisor",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "mt-4 mb-4" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "col-sm-2 col-form-label text-sm-right",
                            attrs: { for: "buildingNum" }
                          },
                          [_vm._v("Building:")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newBuildingForm.number,
                                      expression: "newBuildingForm.number"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class:
                                    _vm.newBuildingForm.number == ""
                                      ? "text-placeholder"
                                      : "",
                                  attrs: { id: "buildingNum" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.newBuildingForm,
                                        "number",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("Select building number")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(10, function(i) {
                                    return _c(
                                      "option",
                                      {
                                        key: i,
                                        staticClass: "text-black",
                                        domProps: { value: i }
                                      },
                                      [_vm._v(_vm._s(i))]
                                    )
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-sm-6 mt-3 mt-sm-0" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newBuildingForm.name,
                                      expression: "newBuildingForm.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "buildingName",
                                    placeholder: "Enter building name"
                                  },
                                  domProps: { value: _vm.newBuildingForm.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.newBuildingForm,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-sm-2 mt-3 mt-sm-0" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary btn-block",
                                    on: {
                                      click: function($event) {
                                        return _vm.addBuilding()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-plus" }),
                                    _vm._v(" Add Building")
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-10 offset-sm-2" }, [
                          _c(
                            "div",
                            { staticClass: "card" },
                            [
                              _c("has-error", {
                                attrs: {
                                  form: _vm.newProjectForm,
                                  field: "buildings"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-bordered" },
                                  [
                                    _vm._m(7),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.newProjectForm.buildings,
                                        function(building, i) {
                                          return _c("tr", { key: i }, [
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v(_vm._s(building.number))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v(_vm._s(building.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-xs btn-danger",
                                                    attrs: {
                                                      disabled: _vm.saved
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.removeBuilding(
                                                          i
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-trash"
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        }
                                      ),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    class: _vm.saved ? "show active" : "",
                    attrs: {
                      id: "lifts-details",
                      role: "tabpanel",
                      "aria-labelledby": "lifts-details-tab"
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "card" }, [
                          _vm._m(8),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body p-0" }, [
                            _c("table", { staticClass: "table" }, [
                              _vm._m(9),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.lifts, function(lift, i) {
                                  return _c("tr", { key: i }, [
                                    _c("td", { staticClass: "text-center" }, [
                                      _vm._v(_vm._s(lift.building.number))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _vm._v(_vm._s(lift.lift_num))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(lift.description))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _vm._v(_vm._s(lift.floor_count))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-info btn-sm mr-2",
                                          on: {
                                            click: function($event) {
                                              return _vm.copyLift(lift)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-copy"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteLift(lift.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash"
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "card card-outline card-info" },
                          [
                            _vm._m(10),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "card-body form-horizontal" },
                              [
                                _c("alert-errors", {
                                  attrs: {
                                    form: _vm.newLiftForm,
                                    message:
                                      "There were some problems with your input."
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-2 col-form-label text-sm-right",
                                      attrs: { for: "buildingNumber" }
                                    },
                                    [_vm._v("Bldg #")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newLiftForm.building,
                                            expression: "newLiftForm.building"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.newLiftForm.errors.has(
                                            "building"
                                          )
                                        },
                                        attrs: { id: "buildingNumber" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.newLiftForm,
                                              "building",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              value: "",
                                              selected: "",
                                              disabled: ""
                                            }
                                          },
                                          [_vm._v("Select building #")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.buildings, function(
                                          building,
                                          i
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: i,
                                              domProps: { value: building.id }
                                            },
                                            [_vm._v(_vm._s(building.number))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-2 col-form-label text-sm-right",
                                      attrs: { for: "liftNumber" }
                                    },
                                    [_vm._v("Lift #")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newLiftForm.lift_number,
                                            expression:
                                              "newLiftForm.lift_number"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.newLiftForm.errors.has(
                                            "lift_number"
                                          )
                                        },
                                        attrs: { id: "liftNumber" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.newLiftForm,
                                              "lift_number",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              value: "",
                                              selected: "",
                                              disabled: ""
                                            }
                                          },
                                          [_vm._v("Select lift #")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(30, function(i) {
                                          return _c(
                                            "option",
                                            { key: i, domProps: { value: i } },
                                            [_vm._v(_vm._s(i))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-2 col-form-label text-sm-right",
                                      attrs: { for: "description" }
                                    },
                                    [_vm._v("Description")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newLiftForm.description,
                                          expression: "newLiftForm.description"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "description",
                                        rows: "3",
                                        placeholder: "Enter lift description"
                                      },
                                      domProps: {
                                        value: _vm.newLiftForm.description
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newLiftForm,
                                            "description",
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
                                      staticClass:
                                        "col-sm-2 col-form-label text-sm-right",
                                      attrs: { for: "floorCount" }
                                    },
                                    [_vm._v("Floors")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-10" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newLiftForm.floor_count,
                                            expression:
                                              "newLiftForm.floor_count"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { id: "floorCount" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.newLiftForm,
                                              "floor_count",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              value: "0",
                                              selected: "",
                                              disabled: ""
                                            }
                                          },
                                          [_vm._v("Select number of floors")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(50, function(i) {
                                          return _c(
                                            "option",
                                            { key: i, domProps: { value: i } },
                                            [_vm._v(_vm._s(i))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-6 offset-sm-2" },
                                  [
                                    _c(
                                      "table",
                                      { staticClass: "table table-sm" },
                                      [
                                        _vm._m(11),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(
                                            _vm.newLiftForm.floor_count,
                                            function(i) {
                                              return _c("tr", { key: i }, [
                                                _c("td", [
                                                  _vm._v(_vm._s(i) + ".")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "form-group"
                                                    },
                                                    [
                                                      _c(
                                                        "select",
                                                        {
                                                          staticClass:
                                                            "form-control form-control-sm select2",
                                                          staticStyle: {
                                                            width: "100%"
                                                          },
                                                          attrs: {
                                                            id:
                                                              "floor-name-" + i
                                                          }
                                                        },
                                                        [
                                                          _c("option", {
                                                            attrs: {
                                                              value: "",
                                                              selected: "",
                                                              disabled: ""
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.floorNames,
                                                            function(
                                                              floorName,
                                                              i
                                                            ) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  key: i,
                                                                  domProps: {
                                                                    value:
                                                                      floorName.id
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      floorName.letter
                                                                    ) +
                                                                      " - " +
                                                                      _vm._s(
                                                                        floorName.name
                                                                      )
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ])
                                            }
                                          ),
                                          0
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-footer" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addLift()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-default float-right",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelAddLift()
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-footer" },
            [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.saved,
                      expression: "!saved"
                    }
                  ],
                  staticClass: "btn btn-info float-right ml-2",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      return _vm.saveProject()
                    }
                  }
                },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default float-right",
                  attrs: { to: "/project-site" }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "modal-add-country" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(12),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body horizontal-form" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-form-label col-sm-2 text-sm-right",
                    attrs: { for: "countryName" }
                  },
                  [_vm._v("Name:")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-10" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newCountryForm.name,
                          expression: "newCountryForm.name"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.newCountryForm.errors.has("name")
                      },
                      attrs: {
                        type: "text",
                        id: "contryName",
                        placeholder: "Enter country name"
                      },
                      domProps: { value: _vm.newCountryForm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newCountryForm,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.newCountryForm, field: "name" }
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
                    staticClass: "col-form-label col-sm-2 text-sm-right",
                    attrs: { for: "countryAbrv" }
                  },
                  [_vm._v("Abbrev:")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newCountryForm.abrv,
                        expression: "newCountryForm.abrv"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "countryAbrv",
                      placeholder: "Enter country abbrev."
                    },
                    domProps: { value: _vm.newCountryForm.abrv },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newCountryForm,
                          "abrv",
                          $event.target.value
                        )
                      }
                    }
                  })
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
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.addCountry()
                    }
                  }
                },
                [_vm._v("Add")]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "modal-add-city" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(13),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body horizontal-form" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-form-label col-sm-2 text-sm-right",
                  attrs: { for: "country" }
                },
                [_vm._v("Name:")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-sm-10" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newCityForm.country_id,
                          expression: "newCityForm.country_id"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.newCityForm.errors.has("country_id")
                      },
                      attrs: { id: "country" },
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
                            _vm.newCityForm,
                            "country_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c(
                        "option",
                        { attrs: { value: "", selected: "", disabled: "" } },
                        [_vm._v("Select country")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.countries, function(country, i) {
                        return _c(
                          "option",
                          { key: i, domProps: { value: country.id } },
                          [_vm._v(_vm._s(country.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.newCityForm, field: "country_id" }
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
                  staticClass: "col-form-label col-sm-2 text-sm-right",
                  attrs: { for: "cityName" }
                },
                [_vm._v("Name:")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-sm-10" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newCityForm.name,
                        expression: "newCityForm.name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.newCityForm.errors.has("name") },
                    attrs: {
                      type: "text",
                      id: "cityName",
                      placeholder: "Enter city name"
                    },
                    domProps: { value: _vm.newCityForm.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newCityForm, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.newCityForm, field: "name" }
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
                  staticClass: "col-form-label col-sm-2 text-sm-right",
                  attrs: { for: "cityAbrv" }
                },
                [_vm._v("Abbrev:")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newCityForm.abrv,
                      expression: "newCityForm.abrv"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "cityAbrv",
                    placeholder: "Enter city abbrev."
                  },
                  domProps: { value: _vm.newCityForm.abrv },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.newCityForm, "abrv", $event.target.value)
                    }
                  }
                })
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
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.addCity()
                  }
                }
              },
              [_vm._v("Add")]
            )
          ])
        ])
      ])
    ])
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
          _c("div", { staticClass: "col-sm-6" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Project Sites")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Add")
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
    return _c("li", { staticClass: "pt-2 px-3" }, [
      _c("h3", { staticClass: "card-title text-bold" }, [
        _vm._v("Add New Project")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "col-sm-2 col-form-label text-sm-right",
        attrs: { for: "projectName" }
      },
      [
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
        _vm._v("Name:")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "col-sm-2 col-form-label text-sm-right",
        attrs: { for: "projectCountry" }
      },
      [
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
        _vm._v("Country:")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1" }, [
      _c("i", {
        staticClass: "fas fa-plus clickable text-primary mt-2",
        attrs: { "data-toggle": "modal", "data-target": "#modal-add-country" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "col-sm-2 col-form-label text-sm-right",
        attrs: { for: "projectCity" }
      },
      [
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
        _vm._v("City:")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "col-sm-2 col-form-label text-sm-right",
        attrs: { for: "projectStatus" }
      },
      [
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
        _vm._v("Status:")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("Building Num")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Building Name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "40px" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("List of Lifts")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("Bldg #")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Lift #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Floors Count")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Add New Lifts")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "50px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Floor")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title text-info" }, [
        _vm._v("Add Country")
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
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title text-info" }, [_vm._v("Add City")]),
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

/***/ "./resources/js/components/projects/ProjectAdd.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/projects/ProjectAdd.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectAdd_vue_vue_type_template_id_d98ff1bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectAdd.vue?vue&type=template&id=d98ff1bc& */ "./resources/js/components/projects/ProjectAdd.vue?vue&type=template&id=d98ff1bc&");
/* harmony import */ var _ProjectAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAdd.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectAdd_vue_vue_type_template_id_d98ff1bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectAdd_vue_vue_type_template_id_d98ff1bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectAdd.vue?vue&type=template&id=d98ff1bc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectAdd.vue?vue&type=template&id=d98ff1bc& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAdd_vue_vue_type_template_id_d98ff1bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectAdd.vue?vue&type=template&id=d98ff1bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectAdd.vue?vue&type=template&id=d98ff1bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAdd_vue_vue_type_template_id_d98ff1bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectAdd_vue_vue_type_template_id_d98ff1bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);