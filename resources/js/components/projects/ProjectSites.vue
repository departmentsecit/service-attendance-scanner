<template>
    <div>
        
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                       <!-- SEARCH FORM -->
                        <form class="form-inline">
                            <div class="input-group input-group-sm">
                                <input class="form-control form-control-navbar" type="search" placeholder="Search Project..." aria-label="Search">
                                <div class="input-group-append">
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <router-link to="/project-site/add" class="btn btn-secondary btn-sm ml-2"> <i class="fas fa-plus mr-1"></i> New Project </router-link>
                        </form>
                  </div>
                  <div class="col-sm-6">
                      <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item"><a href="#">Project Sites</a></li>
                      <li class="breadcrumb-item active">List</li>
                      </ol>
                  </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">

            <div class="col-12">

                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title">Project Sites</h3>

                        <div class="card-tools">

                            <div class="btn-group">
                                <button type="button" class="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                                    <i class="fas fa-wrench"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" role="menu">
                                    <a href="#" class="dropdown-item text-info">Countries / Cities</a>
                                    <router-link to="/floor-names" class="dropdown-item text-info">Floor Names</router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="project-site-list" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th class="text-center">Country</th>
                                    <th class="text-center">City</th>
                                    <th class="text-center">Buildings</th>
                                    <th class="text-center">Lifts</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr v-for="(project,i) in projects" :key="i">
                                    <td>{{ project.name }}</td>
                                    <td class="text-center">{{ project.country.name }}</td>
                                    <td class="text-center">{{ project.city.name }}</td>
                                    <td class="text-center">{{ project.buildings.length }}</td>
                                    <td class="text-center">{{ project.lifts.length }}</td>
                                    <td class="text-center">
                                      <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#generate-qr-modal" @click="getBuildings(project.id)"> <i class="fas fa-qrcode"></i> Code</button>
                                      <button class="btn btn-info btn-sm"> <i class="fas fa-eye"></i> View</button>
                                      <button class="btn btn-warning btn-sm"> <i class="fas fa-pen"></i> Edit</button>
                                      <button class="btn btn-danger btn-sm"> <i class="fas fa-trash"></i> Delete</button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->

            </div>
            <!-- /.col -->

        </section>

        <!-- // Filter Date Range Modal // -->
        <div class="modal fade" id="generate-qr-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h4 class="modal-title">Generate QR Code</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="col-12">

                            <div class="form-group">
                                <label for="building" class="form-label">Select building:</label>
                                <select class="form-control" id="building" v-model="generateQRCodeForm.building">
                                    <option value="" selected disabled></option>
                                    <option v-for="(building,i) in buildings" :key="i" :value="building.id">{{ building.number }} - {{ building.name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="lifts" class="form-label">Select Lift:</label>
                                <select class="form-control" id="lift" v-model="generateQRCodeForm.lift">
                                    <option value="" selected disabled></option>
                                    <option v-for="(lift,i) in lifts" :key="i" :value="lift.id">{{ lift.lift_num }}</option>
                                </select>
                            </div>

                            <label class="form-label">Select Floors:</label>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th style="width: 20px; vertical-align: baseline;" class="text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" @change="checkAllFloors($event)">
                                            </div>
                                        </th>
                                        <th style="width: 20px" class="text-center">#</th>
                                        <th>Floor Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(floor,i) in floors" :key="i">
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" :value="floor.id" v-model="generateQRCodeForm.floors">
                                            </div>
                                        </td>
                                        <td>{{floor.floor_name.letter}}</td>
                                        <td>{{floor.floor_name.name}}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" @click="generateQRCodeModal()">Generate</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

    </div>
</template>

<script>
export default {
    data(){
        return{
            projects: [],
            buildings: [],
            lifts: [],
            floors: [],
            generateQRCodeForm: new Form({
                building: "",
                lift: "",
                floors: []
            }),
        }
    },
    mounted(){

        this.getProjects();

        //Date range picker
        $('#date-range').daterangepicker();

        //Initialize Select2 Elements
        $('.select2').select2();

        // execute this after closing generate-qr-modal
        $('#generate-qr-modal').on('hidden.bs.modal', ()=>{
            this.buildings = [];
            this.lifts = [];
            this.floors = [];
            this.generateQRCodeForm.reset();
            this.generateQRCodeForm.clear();
        });

    },
    watch:{
        'generateQRCodeForm.building'(newVal){
            this.lifts = [];
            this.generateQRCodeForm.lift = "";
            if (newVal != "") {
                this.getLifts(newVal);
            }
        },
        'generateQRCodeForm.lift'(newVal){
            this.floors = [];
            this.generateQRCodeForm.floors = [];
            if (newVal != "") {
                this.getFloors(newVal);
            }
        }
    },
    methods:{
        async getProjects(){
            
            await axios.get('/projects')
                    .then((res)=>{
                        if ($.fn.DataTable.isDataTable('#project-site-list')) $('#project-site-list').DataTable().destroy();
                        this.projects = res.data.data;
                    });

            $('#project-site-list').DataTable({
                    "paging": true,
                    "pageLength": 100,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                    "columnDefs": [{"orderable": false, "targets": [3,4,5] }]
                });

        },
        getBuildings(pId){
            axios.get('/buildings/'+pId)
                .then((res)=>{
                    this.buildings = res.data;
                });
        },
        getLifts(bId){
            axios.get('/lifts/by-building/'+bId)
                .then((res)=>{
                    this.lifts = res.data.data;
                });
        },
        getFloors(lId){
            axios.get('/floors/'+lId)
                .then((res)=>{
                    this.floors = res.data.data;
                });
        },
        checkAllFloors(e){
            this.generateQRCodeForm.floors = [];
            if (e.target.checked) {
                this.floors.forEach(floor => {
                    this.generateQRCodeForm.floors.push(floor.id);
                });
            }
        },
        generateQRCodeModal(){

            // add code here to check if floors parameter is not empty 
            if (this.generateQRCodeForm.floors.length > 0) {
                window.open('/qr-code/generate/print?building='+this.generateQRCodeForm.building+'&lift='+this.generateQRCodeForm.lift+'&floors='+this.generateQRCodeForm.floors, '_blank');
                $('generate-qr-modal').modal('hide');
            } else {
                Swal.fire(
                        'Error!',
                        'Please select at least 1 floor.',
                        'error'
                    );
            }

            
        }
    }
}
</script>

<style>

</style>