<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                      <!--  -->
                  </div>
                  <div class="col-sm-6">
                      <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item"><a href="#">Project Sites</a></li>
                      <li class="breadcrumb-item active">Add</li>
                      </ol>
                  </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">

            <div class="col-12">
                <div class="card card-info card-tabs">

                    <div class="card-header p-0 pt-1">

                        <ul class="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                            <li class="pt-2 px-3"><h3 class="card-title text-bold">Add New Project</h3></li>
                            <li class="nav-item">
                                <a class="nav-link" :class="saved?'':'active'" id="project-details-tab" data-toggle="pill" href="#project-details" role="tab" aria-controls="project-details" aria-selected="true">
                                    Project Details
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="saved?'active':'disabled'"  id="lifts-details-tab" data-toggle="pill" href="#lifts-details" role="tab" aria-controls="lifts-details" aria-selected="false">
                                    Lifts Details
                                </a>
                            </li>
                        </ul>
                        
                    </div>

                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-two-tabContent">

                            <!-- first tab -->
                            <div class="tab-pane fade" :class="saved?'':'show active'" id="project-details" role="tabpanel" aria-labelledby="project-details-tab">
                                <alert-errors :form="newProjectForm" message="There were some problems with your input."></alert-errors>
                                <div class="card-body">
                                    <!-- name -->
                                    <div class="form-group row">
                                        <label for="projectName" class="col-sm-2 col-form-label text-sm-right"> <span class="text-danger">*</span>Name:</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" :class="{'is-invalid': newProjectForm.errors.has('name')}" id="projectName" placeholder="Enter project name" v-model="newProjectForm.name">
                                            <has-error :form="newProjectForm" field="name"></has-error>
                                        </div>
                                    </div>
                                    <!-- country -->
                                    <div class="form-group row">
                                        <label for="projectCountry" class="col-sm-2 col-form-label text-sm-right"> <span class="text-danger">*</span>Country:</label>
                                        <div class="col-sm-10">
                                            <div class="row">
                                                <div class="col-11">
                                                    <select class="form-control" :class="{'text-placeholder': newProjectForm.country=='','is-invalid':newProjectForm.errors.has('country')}" id="projectCountry" v-model="newProjectForm.country">
                                                        <option value="" selected disabled>Select country</option>
                                                        <option class="text-black" v-for="(country,i) in countries" :key="i" :value="country.id">{{country.name}}</option>
                                                    </select>
                                                    <has-error :form="newProjectForm" field="country"></has-error>
                                                </div>
                                                <div class="col-1">
                                                    <i class="fas fa-plus clickable text-primary mt-2" data-toggle="modal" data-target="#modal-add-country"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- country -->
                                    <div class="form-group row">
                                        <label for="projectCity" class="col-sm-2 col-form-label text-sm-right"> <span class="text-danger">*</span>City:</label>
                                        <div class="col-sm-10">
                                            <div class="row">
                                                <div class="col-11">
                                                    <select class="form-control" :class="{'text-placeholder': newProjectForm.city=='','is-invalid':newProjectForm.errors.has('city')}" id="projectCity" v-model="newProjectForm.city">
                                                        <option value="" selected disabled>Select city</option>
                                                        <option class="text-black" v-for="(city,i) in cities" :key="i" :value="city.id">{{city.name}}</option>
                                                    </select>
                                                    <has-error :form="newProjectForm" field="city"></has-error>
                                                </div>
                                                <div class="col-1">
                                                    <i class="fas fa-plus clickable text-primary mt-2" data-toggle="modal" data-target="#modal-add-city" @click="newCityForm.country_id=newProjectForm.country"></i>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                    <!-- complete address -->
                                    <div class="form-group row">
                                        <label for="projectAddress" class="col-sm-2 col-form-label text-sm-right">Address:</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="projectAddress" placeholder="Enter project address" v-model="newProjectForm.address">
                                        </div>
                                    </div>
                                    <!-- contact person -->
                                    <div class="form-group row">
                                        <label for="projectContactPerson" class="col-sm-2 col-form-label text-sm-right">Contact Person:</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="projectContactPerson" placeholder="Enter project contact person" v-model="newProjectForm.contact_person">
                                        </div>
                                    </div>
                                    <!-- contact number -->
                                    <div class="form-group row">
                                        <label for="projectContactNumber" class="col-sm-2 col-form-label text-sm-right">Contact Number:</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="projectContactNumber" placeholder="Enter project contact number" v-model="newProjectForm.contact_number">
                                        </div>
                                    </div>
                                    <!-- project description -->
                                    <div class="form-group row">
                                        <label for="projectDescription" class="col-sm-2 col-form-label text-sm-right">Project Description:</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" id="projectDescription" rows="5" placeholder="Enter project description" v-model="newProjectForm.description"></textarea>
                                        </div>
                                    </div>
                                    <!-- status -->
                                    <div class="form-group row">
                                        <label for="projectStatus" class="col-sm-2 col-form-label text-sm-right"> <span class="text-danger">*</span>Status:</label>
                                        <div class="col-sm-10">
                                            <select class="form-control" :class="{'text-placeholder': newProjectForm.status=='','is-invalid':newProjectForm.errors.has('status')}"   id="projectStatus" v-model="newProjectForm.status">
                                                <option selected="" disabled="" value="">Select one</option>
                                                <option class="text-black" value="Active">Active</option>
                                                <option class="text-black" value="On-Hold">On-Hold</option>
                                                <option class="text-black" value="Canceled">Canceled</option>
                                            </select>
                                            <has-error :form="newProjectForm" field="status"></has-error>
                                        </div>
                                    </div>
                                    <!-- project supervisor -->
                                    <div class="form-group row">
                                        <label for="projectSupervisor" class="col-sm-2 col-form-label text-sm-right">Project Supervisor:</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="projectSupervisor" placeholder="Enter project supervisor" v-model="newProjectForm.supervisor">
                                        </div>
                                    </div>

                                    <hr class="mt-4 mb-4">

                                    <div class="form-group row">
                                        <label for="buildingNum" class="col-sm-2 col-form-label text-sm-right">Building:</label>
                                        <div class="col-sm-10">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <select class="form-control" :class="newBuildingForm.number==''?'text-placeholder':''" id="buildingNum" v-model="newBuildingForm.number">
                                                        <option value="">Select building number</option>
                                                        <option class="text-black" v-for="i in 10" :key="i" :value="i">{{i}}</option>
                                                    </select>
                                                </div>

                                                <div class="col-sm-6 mt-3 mt-sm-0">
                                                    <input type="text" class="form-control" id="buildingName" placeholder="Enter building name" v-model="newBuildingForm.name">
                                                </div>

                                                <div class="col-sm-2 mt-3 mt-sm-0">
                                                    <button class="btn btn-primary btn-block" @click="addBuilding()"><i class="fas fa-plus"></i> Add Building</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-10 offset-sm-2">

                                            <div class="card">
                                                <has-error :form="newProjectForm" field="buildings"></has-error>
                                                <div class="card-body">
                                                    <table class="table table-bordered">
                                                        <thead>                  
                                                            <tr>
                                                                <th class="text-center">Building Num</th>
                                                                <th class="text-center">Building Name</th>
                                                                <th style="width: 40px"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(building,i) in newProjectForm.buildings" :key="i">
                                                                <td class="text-center">{{building.number}}</td>
                                                                <td class="text-center">{{building.name}}</td>
                                                                <td class="text-center">
                                                                    <button class="btn btn-xs btn-danger" @click="removeBuilding(i)" :disabled="saved">
                                                                        <i class="fas fa-trash"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div><!-- /.first tab -->
                            
                            <!-- Second tab -->
                            <div class="tab-pane fade" :class="saved?'show active':''" id="lifts-details" role="tabpanel" aria-labelledby="lifts-details-tab">
                                <div class="row">
                                    <!-- List of Lifts -->
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="card-title">List of Lifts</h3>

                                                <!-- <div class="card-tools">
                                                    <button class="btn btn-primary btn-sm"> Add New</button>
                                                </div> -->
                                            </div>
                                            <!-- /.card-header -->
                                            <div class="card-body p-0">
                                                <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center">Bldg #</th>
                                                        <th class="text-center">Lift #</th>
                                                        <th>Description</th>
                                                        <th class="text-center">Floors Count</th>
                                                        <th class="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(lift,i) in lifts" :key="i">
                                                        <td class="text-center">{{lift.building.number}}</td>
                                                        <td class="text-center">{{lift.lift_num}}</td>
                                                        <td>{{lift.description}}</td>
                                                        <td class="text-center">{{lift.floor_count}}</td>
                                                        <td class="text-center">
                                                            <!-- <button class="btn btn-warning btn-sm mr-2"> <i class="fas fa-pen"></i> </button> -->
                                                            <button class="btn btn-info btn-sm mr-2" @click="copyLift(lift)"> <i class="fas fa-copy"></i> </button>
                                                            <button class="btn btn-danger btn-sm" @click="deleteLift(lift.id)"> <i class="fas fa-trash"></i> </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div> <!-- /.card-body -->
                                        </div> <!-- /.card -->
                                    </div><!-- /.List of Lifts -->

                                    <!-- Add new lifts -->
                                    <div class="col-sm-6">
                                        
                                        <!-- Horizontal Form -->
                                        <div class="card card-outline card-info">
                                            <div class="card-header">
                                                <h3 class="card-title">Add New Lifts</h3>
                                            </div>
                                            <!-- /.card-header -->
                                            <!-- form start -->
                                            
                                            <div class="card-body form-horizontal">

                                                <alert-errors :form="newLiftForm" message="There were some problems with your input."></alert-errors>

                                                <div class="form-group row">
                                                    <label for="buildingNumber" class="col-sm-2 col-form-label text-sm-right">Bldg #</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-control" :class="{'is-invalid':newLiftForm.errors.has('building')}"  id="buildingNumber" v-model="newLiftForm.building">
                                                            <option value="" selected disabled>Select building #</option>
                                                            <option v-for="(building,i) in buildings" :key="i" :value="building.id">{{building.number}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="liftNumber" class="col-sm-2 col-form-label text-sm-right">Lift #</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-control" :class="{'is-invalid':newLiftForm.errors.has('lift_number')}"  id="liftNumber" v-model="newLiftForm.lift_number">
                                                            <option value="" selected disabled>Select lift #</option>
                                                            <option v-for="i in 30" :key="i" :value="i">{{i}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="description" class="col-sm-2 col-form-label text-sm-right">Description</label>
                                                    <div class="col-sm-10">
                                                        <textarea class="form-control" id="description" rows="3" placeholder="Enter lift description" v-model="newLiftForm.description"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="floorCount" class="col-sm-2 col-form-label text-sm-right">Floors</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-control" id="floorCount" v-model="newLiftForm.floor_count">
                                                            <option value="0" selected disabled>Select number of floors</option>
                                                            <option v-for="i in 50" :key="i" :value="i">{{i}}</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 offset-sm-2">
                                                    <table class="table table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th style="width: 50px">#</th>
                                                                <th>Floor</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="i in newLiftForm.floor_count" :key="i">
                                                                <td>{{i}}.</td>
                                                                <td>
                                                                    <div class="form-group">
                                                                        <select class="form-control form-control-sm select2" :id="'floor-name-'+i" style="width: 100%;">
                                                                            <option value="" selected disabled></option>
                                                                            <option v-for="(floorName, i) in floorNames" :key="i" :value="floorName.id">{{floorName.letter}} - {{floorName.name}}</option>
                                                                        </select>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!-- /.card-body -->
                                            <div class="card-footer">
                                                <button type="button" class="btn btn-info" @click="addLift()">Save</button>
                                                <button type="button" class="btn btn-default float-right" @click="cancelAddLift()">Cancel</button>
                                            </div>
                                            <!-- /.card-footer -->
                                            
                                        </div>
                                        <!-- /.card -->

                                    </div><!-- /.Add new lifts -->

                                </div>
                            </div> <!-- /.Second tab -->

                        </div>
                    </div>
                    
                    <div class="card-footer">
                        <button v-show="!saved" type="submit" class="btn btn-info float-right ml-2" @click="saveProject()">Save</button>
                        <router-link to="/project-site" class="btn btn-default float-right">Cancel</router-link>
                    </div>

                </div>
            </div>
           
        </section>


        <!-- Add Country Modal -->
        <div class="modal fade" id="modal-add-country">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-info">Add Country</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body horizontal-form">
                        <!-- country name -->
                        <div class="form-group row">
                            <label for="countryName" class="col-form-label col-sm-2 text-sm-right">Name:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" :class="{'is-invalid': newCountryForm.errors.has('name')}" id="contryName" placeholder="Enter country name" v-model="newCountryForm.name">
                                <has-error :form="newCountryForm" field="name"></has-error>
                            </div>
                        </div>
                        <!-- country abbreviation -->
                        <div class="form-group row">
                            <label for="countryAbrv" class="col-form-label col-sm-2 text-sm-right">Abbrev:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="countryAbrv" placeholder="Enter country abbrev." v-model="newCountryForm.abrv">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addCountry()">Add</button>
                    </div>
                </div> <!-- /.modal-content -->
            </div> <!-- /.modal-dialog -->
        </div> <!-- /.Add Country Modal -->


        <!-- Add City Modal -->
        <div class="modal fade" id="modal-add-city">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-info">Add City</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body horizontal-form">
                        <!-- country list -->
                        <div class="form-group row">
                            <label for="country" class="col-form-label col-sm-2 text-sm-right">Name:</label>
                            <div class="col-sm-10">
                                <select class="form-control" :class="{'is-invalid': newCityForm.errors.has('country_id')}" id="country" v-model="newCityForm.country_id">
                                    <option value="" selected disabled>Select country</option>
                                    <option v-for="(country,i) in countries" :key="i" :value="country.id">{{country.name}}</option>
                                </select>
                                <has-error :form="newCityForm" field="country_id"></has-error>
                            </div>
                        </div>
                        <!-- city name -->
                        <div class="form-group row">
                            <label for="cityName" class="col-form-label col-sm-2 text-sm-right">Name:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" :class="{'is-invalid': newCityForm.errors.has('name')}" id="cityName" placeholder="Enter city name" v-model="newCityForm.name">
                                <has-error :form="newCityForm" field="name"></has-error>
                            </div>
                        </div>
                        <!-- city abbreviation -->
                        <div class="form-group row">
                            <label for="cityAbrv" class="col-form-label col-sm-2 text-sm-right">Abbrev:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="cityAbrv" placeholder="Enter city abbrev." v-model="newCityForm.abrv">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addCity()">Add</button>
                    </div>
                </div> <!-- /.modal-content -->
            </div> <!-- /.modal-dialog -->
        </div> <!-- /.Add City Modal -->


    </div>
</template>

<script>
export default {
    data(){
        return{
            projectId: null,
            saved: false,
            countries:[],
            cities:[],
            buildings:[],
            lifts: [],
            floorNames:[],
            newProjectForm: new Form({
                name: "",
                country: "",
                city: "",
                address: "",
                contact_person: "",
                contact_number: "",
                description: "",
                status:"",
                supervisor: "",
                buildings: [],
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
                floors:[]
            }),
            newCountryForm: new Form({
                name: "",
                abrv: ""
            }),
            newCityForm: new Form({
                country_id: "",
                name: "",
                abrv: "",
            })
        }
    },
    mounted(){
        // fetch data for dropdown list
        this.getCountries();

        //Initialize Select2 Elements
        $('.select2').select2();

        // reset add country modal 
        $('#modal-add-country').on('hidden.bs.modal', ()=>{
            this.newCountryForm.reset();
            this.newCountryForm.clear();
        });
        // reset add country modal 
        $('#modal-add-city').on('hidden.bs.modal', ()=>{
            this.newCityForm.reset();
            this.newCityForm.clear();
        });

    },
    watch:{
        'newProjectForm.country'(newVal){
            this.getCities(newVal);
        }
    },
    methods:{
        addBuilding(){
            // check if building number populated
            if (this.newBuildingForm.number && this.newBuildingForm.name) {
                // check if building already added on the list
                let result = this.newProjectForm.buildings.find(building => building.number === this.newBuildingForm.number);
                
                if (!result) {    
                    this.newProjectForm.buildings.push(_.cloneDeep(this.newBuildingForm));
                    this.newBuildingForm.number = "";
                    this.newBuildingForm.name = "";
                }else{
                    Swal.fire(
                        'Error!',
                        'Building already added',
                        'error'
                    );
                }    
            }else{
                Swal.fire(
                    'Error!',
                    'Please fill out all fields.',
                    'error'
                );
            }

        },
        removeBuilding(index){
            this.newProjectForm.buildings.splice(index,1);
        },
        saveProject(){
            this.newProjectForm.post('/project')
                .then((res)=>{
                    if (res.status == 200) {
                        
                        this.projectId = res.data.project.id;
                        
                        this.getFloorNames();
                        this.getBuildings();

                        this.saved = true;

                        toast.fire({
                            icon: 'success',
                            title: 'Project has bee saved.'
                        });
                    } else {
                        Swal.fire(
                            'Error!',
                            'Unable to save project.',
                            'error'
                        );
                    }

                })
                .catch((res)=>{
                    Swal.fire(
                        'Error!',
                        'Unable to save project.',
                        'error'
                    );
                });
        },
        getCountries(){
            axios.get('/countries')
                .then((res)=>{
                    this.countries = res.data;
                });
        },
        addCountry(){
            this.newCountryForm.post('/country')
                .then((res)=>{
                    if (res.status == 201) {
                        this.getCountries();
                        $('#modal-add-country').modal('hide');
                        Swal.fire(
                            'Success!',
                            'Country has been added successfully',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Error!',
                            'Unable to save country.',
                            'error'
                        );
                    }

                });
        },
        getCities(id){
            axios.get('/cities?country_id='+id)
                .then((res)=>{
                    this.cities = res.data;
                });
        },
        addCity(){
            this.newCityForm.post('/city')
                .then((res)=>{
                    if (res.status == 201) {
                        this.getCities(this.newProjectForm.country);
                        $('#modal-add-city').modal('hide');
                        Swal.fire(
                            'Success!',
                            'City has been added successfully',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Error!',
                            'Unable to save city.',
                            'error'
                        );
                    }
                });
        },
        getFloorNames(){
            axios.get('/floor-names')
                .then((res)=>{
                    this.floorNames = res.data;
                });
        },
        getLifts(){
            axios.get('/lifts/'+this.projectId)
                .then((res)=>{
                    this.lifts = res.data.data;
                });
        },
        getBuildings(){
            axios.get('/buildings/'+this.projectId)
                .then((res)=>{
                    this.buildings = res.data;
                });
        },
        addLift(){

            // get all floors and push to array
            this.newLiftForm.floors = [];
            for (let i = 1; i <= this.newLiftForm.floor_count; i++) {
                let floorNameId = $('#floor-name-'+i).val();
                if (floorNameId) {
                    this.newLiftForm.floors.push(floorNameId);
                } else {
                    this.newLiftForm.floors = [];
                    break;
                }
            }

            if (this.newLiftForm.floors.length > 0) {
                this.newLiftForm.project_id = this.projectId;
                this.newLiftForm.post('/lift')
                    .then((res)=>{
                        if (res.status == 200) {
                            this.getLifts();

                            this.newLiftForm.reset();
                            this.newLiftForm.clear();

                            toast.fire({
                                icon: 'success',
                                title: 'Lift has been saved.'
                            });
                        } else {
                            Swal.fire(
                                'Error!',
                                'Unable to save lift.',
                                'error'
                            );
                        }
                    })
                    .catch((res)=>{
                        Swal.fire(
                            'Error!',
                            'Unable to save lift.',
                            'error'
                        );
                    });

            } else {
                Swal.fire(
                    'Error',
                    'Please complete filling out the floor names',
                    'error'
                );
            }


           
        },
        cancelAddLift(){
            this.newLiftForm.clear();
            this.newLiftForm.reset();
        },
        copyLift(lift){

            this.newLiftForm.building = lift.building.id;
            this.newLiftForm.description = lift.description;
            this.newLiftForm.floor_count = lift.floor_count;

            axios.get('/floors/'+lift.id)
                .then((res)=>{

                    let floors = res.data.data;
                    for (let i = 1; i <= lift.floor_count; i++) {
                        
                        $('#floor-name-'+ i).val(floors[i-1].floor_name.id);
                    }

                });
        },
        deleteLift(liftId){
            axios.delete('/lift/'+liftId)
                .then((res)=>{
                    if (res.status == 200) {
                        this.getLifts();
                        toast.fire({
                                icon: 'success',
                                title: 'Lift has been deleted.'
                            });
                    }else{
                        toast.fire({
                                icon: 'error',
                                title: 'Unable to delete lift.'
                            });
                    }
                })
        }
    }
}
</script>

<style>
</style>