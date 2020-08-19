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
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="scans-list" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Technician</th>
                                    <th>Project Name</th>
                                    <th class="text-center">Bldg Num</th>
                                    <th class="text-center">Left Num</th>
                                    <th class="text-center">Floor</th>
                                    <th class="text-center">Date & Time</th>
                                    <th class="text-center">Check Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jun Rey</td>
                                    <td>NMB Head Quarter</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">3</td>
                                    <td class="text-center">G</td>
                                    <td class="text-center">Sep 4, 2020 1:12:00 PM</td>
                                    <td class="text-center">Out</td>
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
                                <select class="form-control select2" style="width: 100%;">
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
                        <button type="button" class="btn btn-outline-light">Set</button>
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
                                <select class="form-control select2" style="width: 100%;">
                                    <option selected="selected">All</option>
                                    <option>Check In</option>
                                    <option>Check Out</option>
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

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

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

        //Date range picker
        $('#date-range').daterangepicker();

        //Initialize Select2 Elements
        $('.select2').select2();

        //Initialize Select2 Elements
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
    }
}
</script>

<style>

</style>