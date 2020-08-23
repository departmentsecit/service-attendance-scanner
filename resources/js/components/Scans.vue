<template>
    <div>
        
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        
                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#date-range-modal">
                            <i class="fas fa-calendar-alt mr-1"></i> Sep 1 2020 - Sep 2 2020
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#project-site-modal">
                            <i class="fas fa-building mr-1"></i> All
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#user-modal">
                            <i class="fas fa-user mr-1"></i> All
                        </button>

                        <button type="button" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#check-type-modal">
                            <i class="fas fa-stopwatch mr-1"></i> All
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
                                <input type="text" class="form-control float-right" id="date-range">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light">Set Date</button>
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
                                <select class="form-control select2" style="width: 100%;">
                                    <option selected="selected">All</option>
                                    <option>All</option>
                                    <option>NMB Head Quarter</option>
                                    <option>NHC Iconic</option>
                                    <option>Viva Tower</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light">Set</button>
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
                                    <option selected="selected">All</option>
                                    <option>Mr. Qiu</option>
                                    <option>Mr. Yang</option>
                                    <option>Mr. Zhuang</option>
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
            filters: {
                project: '',
                user: '',
                check_type: '',
            }
        }
    },
    mounted(){
        this.fetchScanLogs();

        //Date range picker
        $('#date-range').daterangepicker();

        //Initialize Select2 Elements
        $('.select2').select2();

        //Initialize Select2 Elements
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
     
        // sample changes here
        // search for rAF instead of using the setInterval
        // https://dev.opera.com/articles/better-performance-with-requestanimationframe/
        let mySetIntervalVar = setInterval(()=>this.fetchScanLogs(), 3000);

        // clearInterval(mySetIntervalVar);
    },
    methods:{
        async fetchScanLogs(){

            let myFilters = '';
            myFilters = this.filters.project != '' ? myFilters+'project='+this.filters.project+'&' : '';
            myFilters = this.filters.user != '' ? myFilters+'user='+this.filters.user+'&' : '';
            myFilters = this.filters.check_type != '' ? (myFilters+'check_type='+this.filters.check_type+'&') : '';

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
                        this.filters.project = $('#filter_date_range').val();
                        $('#date-range-modal').modal('hide');
                    break;
            }

            this.fetchScanLogs();
        }
    }
}
</script>

<style>

</style>