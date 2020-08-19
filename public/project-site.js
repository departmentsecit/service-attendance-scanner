(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-site"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloorNames.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isEdit: false,
      floorNames: [],
      positions: [],
      floorNameForm: new Form({
        letter: "",
        name: "",
        description: ""
      }),
      updateFloorNameForm: new Form({
        id: null,
        letter: "",
        name: "",
        description: ""
      })
    };
  },
  mounted: function mounted() {
    // get all floor names
    this.getFloorNames(); // initialize parentThis variable to use inside the jQuery

    var parentThis = this; // loop thru tr tag and check if the position has change
    // if it change then add pos-updated class
    // then call updatePoitionDB function

    $('#tbody-sortable').sortable({
      update: function update(event, ui) {
        $(this).children().each(function (index) {
          if ($(this).attr('data-position') != index + 1) {
            $(this).attr('data-position', index + 1).addClass('pos-updated');
          }
        });
        parentThis.updatePositionInDB();
      }
    });
  },
  methods: {
    getFloorNames: function getFloorNames() {
      var _this = this;

      axios.get('/floor-names').then(function (res) {
        _this.floorNames = res.data;
      });
    },
    updatePositionInDB: function updatePositionInDB() {
      // loop thru tr tag and check for pos-updated class
      // add those to positions array and removed class name
      // initialize parentThis variable to use inside the jQuery
      var parentThis = this;
      $('.pos-updated').each(function () {
        parentThis.positions.push([$(this).attr('data-id'), $(this).attr('data-position')]);
        $(this).removeClass('pos-updated');
      }); //  send axios request to server

      axios.post('/floor-names/update-position', {
        positions: this.positions
      }).then(function (res) {
        if (res.status == 200) {
          toast.fire({
            icon: 'success',
            title: 'New position saved successfully.'
          });
        } else {
          toast.fire({
            icon: 'error',
            title: 'Unable to save new position.'
          });
        }
      });
    },
    add: function add() {
      var _this2 = this;

      this.floorNameForm.post('/floor-name').then(function (res) {
        if (res.status == 201) {
          _this2.getFloorNames();

          _this2.floorNameForm.reset();

          toast.fire({
            icon: 'success',
            title: 'New floor name has been added.'
          });
        } else {
          Swal.fire('Error!', 'Unable to save new floor name.', 'error');
        }
      });
    },
    update: function update(fn) {
      this.isEdit = true;
      this.updateFloorNameForm.id = fn.id;
      this.updateFloorNameForm.letter = fn.letter;
      this.updateFloorNameForm.name = fn.name;
      this.updateFloorNameForm.description = fn.description;
    },
    saveUpdate: function saveUpdate() {
      var _this3 = this;

      this.updateFloorNameForm.put('/floor-name/' + this.updateFloorNameForm.id).then(function (res) {
        _this3.cancelUpdate();

        _this3.getFloorNames();

        toast.fire({
          icon: 'success',
          title: 'New floor name has been added.'
        });
      });
    },
    cancelUpdate: function cancelUpdate() {
      this.isEdit = false;
      this.updateFloorNameForm.clear();
      this.updateFloorNameForm.reset();
    },
    deleteFloorName: function deleteFloorName(fnId) {
      var _this4 = this;

      axios["delete"]('/floor-name/' + fnId).then(function (res) {
        _this4.getFloorNames();

        toast.fire({
          icon: 'success',
          title: 'Floor name has been deleted.'
        });
      });
    }
  }
});

/***/ }),

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
    this.getCountries();
    this.getFloorNames();
    this.getBuildings();
    this.getLifts(); //Initialize Select2 Elements

    $('.select2').select2(); // reset add country modal 

    $('#modal-add-country').on('hidden.bs.modal', function () {
      _this.newCountryForm.reset();

      _this.newCountryForm.clear();
    }); // reset add country modal 

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
      if (this.newBuildingForm.number) {
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
        Swal.fire('Error!', 'Please select building number.', 'error');
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
            title: 'Project has bee saved.'
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
      generateQRCodeForm: {
        building: "",
        lift: "",
        floors: []
      }
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
      window.open('/qr-code/generate/print?building=' + this.generateQRCodeForm.building + '&lift=' + this.generateQRCodeForm.lift + '&floors=' + this.generateQRCodeForm.floors, '_blank');
      $('generate-qr-modal').modal('hide');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntd:hover{\r\n\t\tcursor:move;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorNames.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=template&id=cd972d72&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloorNames.vue?vue&type=template&id=cd972d72& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        _c(
          "table",
          {
            staticClass: "table table-sm table-hover",
            attrs: { id: "myTable" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c(
                  "td",
                  { staticClass: "text-center" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.floorNameForm.letter,
                          expression: "floorNameForm.letter"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.floorNameForm.errors.has("letter")
                      },
                      attrs: { type: "text" },
                      domProps: { value: _vm.floorNameForm.letter },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.floorNameForm,
                            "letter",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      staticClass: "text-left",
                      attrs: { form: _vm.floorNameForm, field: "letter" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.floorNameForm.name,
                          expression: "floorNameForm.name"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.floorNameForm.errors.has("name")
                      },
                      attrs: { type: "text" },
                      domProps: { value: _vm.floorNameForm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.floorNameForm,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      staticClass: "text-left",
                      attrs: { form: _vm.floorNameForm, field: "name" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.floorNameForm.description,
                        expression: "floorNameForm.description"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "text" },
                    domProps: { value: _vm.floorNameForm.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.floorNameForm,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "Button",
                      {
                        staticClass: "btn btn-xs btn-primary",
                        on: {
                          click: function($event) {
                            return _vm.add()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Add")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              { attrs: { id: "tbody-sortable" } },
              _vm._l(_vm.floorNames, function(fn, i) {
                return _c(
                  "tr",
                  {
                    key: i,
                    attrs: { "data-id": fn.id, "data-position": fn.position }
                  },
                  [
                    _c("td", { staticClass: "text-center" }, [
                      _vm.isEdit && _vm.updateFloorNameForm.id == fn.id
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateFloorNameForm.letter,
                                expression: "updateFloorNameForm.letter"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              "is-invalid": _vm.updateFloorNameForm.errors.has(
                                "letter"
                              )
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.updateFloorNameForm.letter },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateFloorNameForm,
                                  "letter",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        : _c("span", [_vm._v(_vm._s(fn.letter))])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.isEdit && _vm.updateFloorNameForm.id == fn.id
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateFloorNameForm.name,
                                expression: "updateFloorNameForm.name"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              "is-invalid": _vm.updateFloorNameForm.errors.has(
                                "name"
                              )
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.updateFloorNameForm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateFloorNameForm,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        : _c("span", [_vm._v(_vm._s(fn.name))])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.isEdit && _vm.updateFloorNameForm.id == fn.id
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.updateFloorNameForm.description,
                                expression: "updateFloorNameForm.description"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              "is-invalid": _vm.updateFloorNameForm.errors.has(
                                "description"
                              )
                            },
                            attrs: { type: "text" },
                            domProps: {
                              value: _vm.updateFloorNameForm.description
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.updateFloorNameForm,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        : _c("span", [_vm._v(_vm._s(fn.description))])
                    ]),
                    _vm._v(" "),
                    _vm.isEdit && _vm.updateFloorNameForm.id == fn.id
                      ? _c(
                          "td",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "Button",
                              {
                                staticClass: "btn btn-xs btn-primary mr-2",
                                on: {
                                  click: function($event) {
                                    return _vm.saveUpdate()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-save" }),
                                _vm._v(" Save")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "Button",
                              {
                                staticClass: "btn btn-xs btn-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.cancelUpdate()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-times" }),
                                _vm._v(" Cancel")
                              ]
                            )
                          ],
                          1
                        )
                      : _c(
                          "td",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "Button",
                              {
                                staticClass: "btn btn-xs btn-warning mr-2",
                                on: {
                                  click: function($event) {
                                    return _vm.update(fn)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-pen" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "Button",
                              {
                                staticClass: "btn btn-xs btn-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteFloorName(fn.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          ],
                          1
                        )
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
            _c("h1", [_vm._v("Floor Names")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Floor Names")])
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
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "100px" } },
          [_vm._v("Letter")]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "350px" } }, [_vm._v("Floor Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



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
                            _c("form", { staticClass: "form-horizontal" }, [
                              _c(
                                "div",
                                { staticClass: "card-body" },
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
                                              value:
                                                _vm.newLiftForm.lift_number,
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
                                              {
                                                key: i,
                                                domProps: { value: i }
                                              },
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
                                            expression:
                                              "newLiftForm.description"
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
                                              value:
                                                _vm.newLiftForm.floor_count,
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
                                              {
                                                key: i,
                                                domProps: { value: i }
                                              },
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
                                                        staticClass:
                                                          "form-group"
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
                                                                "floor-name-" +
                                                                i
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
                                    attrs: { type: "submit" },
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
                                    attrs: { type: "submit" },
                                    on: {
                                      click: function($event) {
                                        return _vm.cancelAddLift()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                )
                              ])
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
                      _c("td", { staticClass: "text-center" }, [
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
                        _vm._m(4, true),
                        _vm._v(" "),
                        _vm._m(5, true),
                        _vm._v(" "),
                        _vm._m(6, true)
                      ])
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
            _vm._m(7),
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
    return _c("button", { staticClass: "btn btn-info btn-sm" }, [
      _c("i", { staticClass: "fas fa-eye" }),
      _vm._v(" View")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-warning btn-sm" }, [
      _c("i", { staticClass: "fas fa-pen" }),
      _vm._v(" Edit")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-danger btn-sm" }, [
      _c("i", { staticClass: "fas fa-trash" }),
      _vm._v(" Delete")
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

/***/ "./resources/js/components/FloorNames.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FloorNames.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FloorNames_vue_vue_type_template_id_cd972d72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FloorNames.vue?vue&type=template&id=cd972d72& */ "./resources/js/components/FloorNames.vue?vue&type=template&id=cd972d72&");
/* harmony import */ var _FloorNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloorNames.vue?vue&type=script&lang=js& */ "./resources/js/components/FloorNames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloorNames.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FloorNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FloorNames_vue_vue_type_template_id_cd972d72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FloorNames_vue_vue_type_template_id_cd972d72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FloorNames.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FloorNames.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FloorNames.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorNames.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorNames.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/FloorNames.vue?vue&type=template&id=cd972d72&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FloorNames.vue?vue&type=template&id=cd972d72& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_template_id_cd972d72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorNames.vue?vue&type=template&id=cd972d72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloorNames.vue?vue&type=template&id=cd972d72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_template_id_cd972d72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorNames_vue_vue_type_template_id_cd972d72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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