<template>
    <div>
        
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        
                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#date-range-modal">
                            <i class="fas fa-calendar-alt mr-1"></i> {{ filters.date_range }}
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#project-site-modal">
                            <i class="fas fa-building mr-1"></i> {{ filters.project != '' ? showProjectName(filters.project) : 'All' }}
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#user-modal">
                            <i class="fas fa-user mr-1"></i> {{ filters.user != '' ? showUserName(filters.user) : 'All' }}
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#check-type-modal">
                            <i class="fas fa-stopwatch mr-1"></i> {{ filters.check_type != '' ? filters.check_type : 'All' }}
                        </button>

                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Scans</a></li>
                        <li class="breadcrumb-item active">List</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">

            <div class="col-12">

                <div class="card card-secondary">
                    <div class="card-header">
                        <h3 class="card-title">Scans List</h3>
                        <div class="card-tools">
                            <div class="btn-group">
                                <button type="button" class="btn btn-tool" title="update list" @click="fetchScanLogs()">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="scans-list" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Technician</th>
                                    <th>Project Name</th>
                                    <th class="text-center">Bldg Num</th>
                                    <th class="text-center">Lift Num</th>
                                    <th class="text-center">Floor</th>
                                    <th class="text-center">Date & Time</th>
                                    <th class="text-center">Check Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(scanLog,i) in scanLogs" :key="i" :class="scanLog.check_type == 'out' ? 'text-warning' : 'text-success'">
                                    <td>{{ scanLog.user.first_name }}</td>
                                    <td>{{ scanLog.project.name }}</td>
                                    <td class="text-center">{{ scanLog.building.number }}</td>
                                    <td class="text-center">{{ scanLog.lift.number }}</td>
                                    <td class="text-center">{{ scanLog.floor.name }}</td>
                                    <td class="text-center">{{ scanLog.date_time_log }}</td>
                                    <td class="text-center">{{ scanLog.check_type }}</td>
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
        <div class="modal fade" id="date-range-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h4 class="modal-title">Filter Date Range</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="col-12">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="far fa-calendar-alt"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control float-right" id="filter_date_range">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" @click="setFilter('dateRange')">Set Date</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->


        <!-- // Filter Project Modal // -->
        <div class="modal fade" id="project-site-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h4 class="modal-title">Filter Project Site</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="col-12">
                            <div class="form-group">
                                <select class="form-control select2" id="filter_project" style="width: 100%;">
                                    <option value="" selected="selected">All</option>
                                    <option v-for="(project,i) in projects" :key="i" :value="project.id" >{{project.name}}</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" @click="setFilter('project')">Set</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <!-- // Filter User Modal // -->
        <div class="modal fade" id="user-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h4 class="modal-title">Filter User</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="col-12">
                            <div class="form-group">
                                <select class="form-control select2" id="filter_user" style="width: 100%;">
                                    <option value="" selected="selected">All</option>
                                    <option v-for="(user,i) in users" :key="i" :value="user.id">{{ user.first_name }} {{ user.last_name }}</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" @click="setFilter('user')">Set</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <!-- // Filter Check Type Modal // -->
        <div class="modal fade" id="check-type-modal">
            <div class="modal-dialog">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h4 class="modal-title">Filter Check Type</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="col-12">
                            <div class="form-group">
                                <select class="form-control select2" id="filter_check_type" style="width: 100%;">
                                    <option value="" selected="selected">All</option>
                                    <option value="in">Check In</option>
                                    <option value="out">Check Out</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" @click="setFilter('checkType')">Set</button>
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
            scanLogs: [],
            users: [],
            projects: [],
            filters: {
                project: '',
                user: '',
                check_type: '',
                date_range: '',
            }
        }
    },
    mounted(){

        // set the date default date range
        let curDate = new Date();
        let curDateFrom = this.$options.filters.formatDate(curDate,'MM/DD/YYYY');
        let curDateTo = this.$options.filters.formatDate(curDate.addDays(1),'MM/DD/YYYY');
        this.filters.date_range = curDateFrom +' - '+curDateTo;

        this.fetchScanLogs();
        this.fetchUser();
        this.fetchProjects();

        //Date range picker
        $('#filter_date_range').daterangepicker({
            startDate: curDateFrom,
            endDate: curDateTo
        });

        //Initialize Select2 Elements
        $('.select2').select2();

        //Initialize Select2 Elements
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });

        let mySetIntervalVar = setInterval(()=>this.fetchScanLogs(), 3000);
        // clearInterval(mySetIntervalVar);

    },
    methods:{
        async fetchScanLogs(){
 
            let myFilters = '';
            
            myFilters = myFilters + (this.filters.project != '' ? 'project='+this.filters.project+'&' : '');
            myFilters = myFilters + (this.filters.user != '' ? 'user='+this.filters.user+'&' : '');
            myFilters = myFilters + (this.filters.check_type != '' ? 'check_type='+this.filters.check_type+'&' : '');
            myFilters = myFilters + (this.filters.date_range != '' ? 'date_range='+this.filters.date_range+'&' : '');
 
            await axios.get('/scans?'+myFilters)
                    .then((res)=>{
                        if ($.fn.DataTable.isDataTable('#scans-list')) $('#scans-list').DataTable().destroy();
                        this.scanLogs = res.data.data;
                    });

            $('#scans-list').DataTable({
                    "paging": true,
                    "pageLength": 100,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "order": [],
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });
        },
        fetchUser(){

            // create other controller that will return limited columns only for dropdown use
            axios.get('/users')
                .then((response) => {
                    this.users = response.data.data;                   
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        alert('User session has expired. Please login again.');
                        location.replace("/login");
                    }
                });
        },
        fetchProjects(){

            // create other controller that will return limited columns only for dropdown use
            axios.get('/projects')
                .then((response) => {
                    this.projects = response.data.data;                   
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        alert('User session has expired. Please login again.');
                        location.replace("/login");
                    }
                });
        },
        setFilter(toFilter){
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
                        this.filters.date_range = $('#filter_date_range').val();
                        $('#date-range-modal').modal('hide');
                    break;
            }

            this.fetchScanLogs();
        },
        showUserName(id){
            let user = this.users.find(u => u.id == id);            
            return user.first_name;
        },
        showProjectName(id){
            let project = this.projects.find(p => p.id == id);            
            return project.name;
        }
    }
}
</script>

<style>

</style>