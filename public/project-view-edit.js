(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-view-edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectViewEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectViewEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['t', 'pId'],
  data: function data() {
    return {
      hasChanges: false,
      countries: [],
      lifts: [],
      floorNames: [],
      cities: [],
      projectForm: new Form({
        id: "",
        name: "",
        country: "",
        city: "",
        address: "",
        contact_person: "",
        contact_number: "",
        description: "",
        status: "",
        supervisor: ""
      }),
      buildings: [],
      newBuildingForm: new Form({
        project_id: "",
        number: "",
        name: ""
      }),
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

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // fetch data for dropdown list
              _this.getCountries();

              _this.getProjectInfo();

              _this.getLifts();

              _this.getFloorNames(); //Initialize Select2 Elements


              $('.select2').select2(); // reset add country modal 

              $('#modal-add-country').on('hidden.bs.modal', function () {
                _this.newCountryForm.reset();

                _this.newCountryForm.clear();
              }); // reset add country modal 

              $('#modal-add-city').on('hidden.bs.modal', function () {
                _this.newCityForm.reset();

                _this.newCityForm.clear();
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    'projectForm.country': function projectFormCountry(newVal) {
      this.getCities(newVal);
    },
    projectForm: {
      deep: true,
      handler: function handler() {
        this.hasChanges = true;
      }
    }
  },
  methods: {
    getCountries: function getCountries() {
      var _this2 = this;

      axios.get('/countries').then(function (res) {
        _this2.countries = res.data;
      });
    },
    getProjectInfo: function getProjectInfo() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/project/' + _this3.pId).then(function (res) {
                  _this3.projectForm.id = _this3.pId;
                  _this3.projectForm.name = res.data.name;
                  _this3.projectForm.country = res.data.country_id;
                  _this3.projectForm.city = res.data.city_id;
                  _this3.projectForm.address = res.data.address;
                  _this3.projectForm.contact_person = res.data.contact_person;
                  _this3.projectForm.contact_number = res.data.contact_number;
                  _this3.projectForm.description = res.data.description;
                  _this3.projectForm.status = res.data.status;
                  _this3.projectForm.supervisor = res.data.supervisor;

                  _this3.getBuildings();
                });

              case 2:
                _this3.hasChanges = false;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updateProject: function updateProject() {
      this.projectForm.id = this.pId;
      this.projectForm.put('/project/' + this.pId).then(function (res) {
        if (res.status == 200) {
          Swal.fire('Updated!', 'Project information has been updated successfully', 'success');
        } else {
          Swal.fire('Error!', 'Unable to update project information.', 'error');
        }
      })["catch"](function (res) {
        Swal.fire('Error!', 'Unable to update project information.', 'error');
      });
    },
    getBuildings: function getBuildings() {
      var _this4 = this;

      axios.get('/buildings/' + this.pId).then(function (res) {
        _this4.buildings = res.data;
      });
    },
    addBuilding: function addBuilding() {
      var _this5 = this;

      // check if building number populated
      if (this.newBuildingForm.number && this.newBuildingForm.name) {
        // check if building already added on the list
        var result = this.buildings.find(function (building) {
          return building.number === _this5.newBuildingForm.number;
        });

        if (!result) {
          // add building to the database
          this.newBuildingForm.project_id = this.pId;
          this.newBuildingForm.post('/building').then(function (res) {
            _this5.newBuildingForm.number = "";
            _this5.newBuildingForm.name = "";

            _this5.getBuildings();

            Swal.fire('Success!', 'Building has been added successfully', 'success');
          })["catch"](function (res) {
            Swal.fire('Error!', 'Unable to save building.', 'error');
          });
        } else {
          Swal.fire('Error!', 'Building already added', 'error');
        }
      } else {
        Swal.fire('Error!', 'Please fill out all fields.', 'error');
      }
    },
    deleteBuilding: function deleteBuilding(buildingId, buildingName) {
      var _this6 = this;

      Swal.fire({
        title: 'Delete Building!',
        text: "Are you sure want to delete " + buildingName,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/building/' + buildingId).then(function (res) {
            if (res.status == 200) {
              _this6.getBuildings();

              _this6.getLifts();

              Swal.fire('Deleted!', 'Building has been deleted successfully', 'success');
            } else {
              Swal.fire('Error!', 'Unable to delete building.', 'error');
            }
          });
        }
      });
    },
    getLifts: function getLifts() {
      var _this7 = this;

      axios.get('/lifts/' + this.pId).then(function (res) {
        _this7.lifts = res.data.data;
      });
    },
    addCountry: function addCountry() {
      var _this8 = this;

      this.newCountryForm.post('/country').then(function (res) {
        if (res.status == 201) {
          _this8.getCountries();

          $('#modal-add-country').modal('hide');
          Swal.fire('Success!', 'Country has been added successfully', 'success');
        } else {
          Swal.fire('Error!', 'Unable to save country.', 'error');
        }
      });
    },
    getCities: function getCities(id) {
      var _this9 = this;

      axios.get('/cities?country_id=' + id).then(function (res) {
        _this9.cities = res.data;
      });
    },
    addCity: function addCity() {
      var _this10 = this;

      this.newCityForm.post('/city').then(function (res) {
        if (res.status == 201) {
          _this10.getCities(_this10.projectForm.country);

          $('#modal-add-city').modal('hide');
          Swal.fire('Success!', 'City has been added successfully', 'success');
        } else {
          Swal.fire('Error!', 'Unable to save city.', 'error');
        }
      });
    },
    getFloorNames: function getFloorNames() {
      var _this11 = this;

      axios.get('/floor-names').then(function (res) {
        _this11.floorNames = res.data;
      });
    },
    addLift: function addLift() {
      var _this12 = this;

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
        this.newLiftForm.project_id = this.pId;
        this.newLiftForm.post('/lift').then(function (res) {
          if (res.status == 200) {
            _this12.getLifts();

            _this12.newLiftForm.reset();

            _this12.newLiftForm.clear();

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
      var _this13 = this;

      axios["delete"]('/lift/' + liftId).then(function (res) {
        if (res.status == 200) {
          _this13.getLifts();

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectViewEdit.vue?vue&type=template&id=49797a9e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectViewEdit.vue?vue&type=template&id=49797a9e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _c("h1", [_vm._v(_vm._s(_vm.projectForm.name))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v(_vm._s(_vm.t))
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card card-info card-tabs" }, [
          _vm._m(1),
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
                    staticClass: "tab-pane fade active show",
                    attrs: {
                      id: "project-details",
                      role: "tabpanel",
                      "aria-labelledby": "project-details-tab"
                    }
                  },
                  [
                    _c("alert-errors", {
                      attrs: {
                        form: _vm.projectForm,
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
                                  value: _vm.projectForm.name,
                                  expression: "projectForm.name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.projectForm.errors.has("name")
                              },
                              attrs: {
                                type: "text",
                                id: "projectName",
                                placeholder: "Enter project name"
                              },
                              domProps: { value: _vm.projectForm.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.projectForm,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.projectForm, field: "name" }
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
                                        value: _vm.projectForm.country,
                                        expression: "projectForm.country"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "text-placeholder":
                                        _vm.projectForm.country == "",
                                      "is-invalid": _vm.projectForm.errors.has(
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
                                          _vm.projectForm,
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
                                    form: _vm.projectForm,
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
                                        value: _vm.projectForm.city,
                                        expression: "projectForm.city"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "text-placeholder":
                                        _vm.projectForm.city == "",
                                      "is-invalid": _vm.projectForm.errors.has(
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
                                          _vm.projectForm,
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
                                    form: _vm.projectForm,
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
                                      _vm.projectForm.country
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
                                value: _vm.projectForm.address,
                                expression: "projectForm.address"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectAddress",
                              placeholder: "Enter project address"
                            },
                            domProps: { value: _vm.projectForm.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.projectForm,
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
                                value: _vm.projectForm.contact_person,
                                expression: "projectForm.contact_person"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectContactPerson",
                              placeholder: "Enter project contact person"
                            },
                            domProps: { value: _vm.projectForm.contact_person },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.projectForm,
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
                                value: _vm.projectForm.contact_number,
                                expression: "projectForm.contact_number"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectContactNumber",
                              placeholder: "Enter project contact number"
                            },
                            domProps: { value: _vm.projectForm.contact_number },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.projectForm,
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
                                value: _vm.projectForm.description,
                                expression: "projectForm.description"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "projectDescription",
                              rows: "5",
                              placeholder: "Enter project description"
                            },
                            domProps: { value: _vm.projectForm.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.projectForm,
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
                                    value: _vm.projectForm.status,
                                    expression: "projectForm.status"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "text-placeholder":
                                    _vm.projectForm.status == "",
                                  "is-invalid": _vm.projectForm.errors.has(
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
                                      _vm.projectForm,
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
                              attrs: { form: _vm.projectForm, field: "status" }
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
                                value: _vm.projectForm.supervisor,
                                expression: "projectForm.supervisor"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "projectSupervisor",
                              placeholder: "Enter project supervisor"
                            },
                            domProps: { value: _vm.projectForm.supervisor },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.projectForm,
                                  "supervisor",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.hasChanges
                        ? _c("div", { staticClass: "row mt-2 text-right" }, [
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: { type: "submit" },
                                  on: {
                                    click: function($event) {
                                      return _vm.updateProject()
                                    }
                                  }
                                },
                                [_vm._v("Save Changes")]
                              )
                            ])
                          ])
                        : _vm._e(),
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
                                  form: _vm.projectForm,
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
                                      _vm._l(_vm.buildings, function(
                                        building,
                                        i
                                      ) {
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
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deleteBuilding(
                                                        building.id,
                                                        building.name
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-trash"
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      }),
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
                "router-link",
                {
                  staticClass: "btn btn-default float-right",
                  attrs: { to: "/project-site" }
                },
                [_vm._v("Return")]
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
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Project Sites")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-0 pt-1" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "custom-tabs-two-tab", role: "tablist" }
        },
        [
          _c("li", { staticClass: "pt-2 px-3" }),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
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

/***/ "./resources/js/components/projects/ProjectViewEdit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/projects/ProjectViewEdit.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectViewEdit_vue_vue_type_template_id_49797a9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectViewEdit.vue?vue&type=template&id=49797a9e& */ "./resources/js/components/projects/ProjectViewEdit.vue?vue&type=template&id=49797a9e&");
/* harmony import */ var _ProjectViewEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectViewEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectViewEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectViewEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectViewEdit_vue_vue_type_template_id_49797a9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectViewEdit_vue_vue_type_template_id_49797a9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectViewEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectViewEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectViewEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectViewEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectViewEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectViewEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectViewEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectViewEdit.vue?vue&type=template&id=49797a9e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectViewEdit.vue?vue&type=template&id=49797a9e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectViewEdit_vue_vue_type_template_id_49797a9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectViewEdit.vue?vue&type=template&id=49797a9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectViewEdit.vue?vue&type=template&id=49797a9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectViewEdit_vue_vue_type_template_id_49797a9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectViewEdit_vue_vue_type_template_id_49797a9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);