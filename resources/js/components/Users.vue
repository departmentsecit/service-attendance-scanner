<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Users</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Users</a></li>
                    <li class="breadcrumb-item active">List</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">
 

                <div class="col-12">
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">List</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-block btn-primary btn-sm" data-toggle="modal" data-target="#add-update-user-modal-lg" @click="isUpdate=false">Add User</button>
                        </div>

                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th class="text-center">Level</th>
                                <th>Status</th>
                                <th width="100px"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user,index) in users" :key="index" class="clickable">
                                <td>{{user.id}}</td>
                                <td>{{user.username}}</td>
                                <td>{{user.first_name}}</td>
                                <td>{{user.last_name}}</td>
                                <td class="text-center">{{user.level}}</td>
                                <td>{{user.status}}</td>
                                <td>
                                    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#add-update-user-modal-lg" @click="showUpdate(user)">
                                        <i class="fas fa-pen"></i>
                                    </button>

                                    <button type="button" class="btn btn-danger btn-sm ml-2" @click="deleteUser(user.id)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                    <!-- <button type="button" class="btn btn-danger btn-xs">
                                    </button> -->
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>


        </section>


        <div class="modal fade" id="add-update-user-modal-lg">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ isUpdate ? 'Update User Info' : 'Add New User Form' }}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body form-horizontal">

                        <div class="col-12">
                            <div class="form-group row">
                                <label for="firstname" class="col-sm-3 col-form-label text-md-right">First Name</label>
                                <div v-if="!isUpdate" class="col-sm-9">
                                    <input type="text" class="form-control" :class="{ 'is-invalid': addUserForm.errors.has('first_name') }" 
                                        id="firsname" placeholder="Enter First Name" v-model="addUserForm.first_name" required>
                                    <has-error :form="addUserForm" field="first_name"></has-error>
                                </div>
                                <div  v-else  class="col-sm-9">
                                    <input type="text" class="form-control" :class="{ 'is-invalid': updateUserForm.errors.has('first_name') }" 
                                        id="firsname" placeholder="Enter First Name" v-model="updateUserForm.first_name" required>
                                    <has-error :form="updateUserForm" field="first_name"></has-error>
                                </div>

                            </div>

                            <div class="form-group row">
                                <label for="lastname" class="col-sm-3 col-form-label text-md-right">Last Name</label>
                                <div v-if="!isUpdate" class="col-sm-9">
                                    <input type="text" class="form-control" :class="{ 'is-invalid': addUserForm.errors.has('last_name') }" 
                                        id="lastname" placeholder="Enter Last Name" v-model="addUserForm.last_name" required>
                                    <has-error :form="addUserForm" field="last_name"></has-error>
                                </div>
                                <div v-else class="col-sm-9">
                                    <input type="text" class="form-control" :class="{ 'is-invalid': updateUserForm.errors.has('last_name') }" 
                                        id="lastname" placeholder="Enter Last Name" v-model="updateUserForm.last_name" required>
                                    <has-error :form="updateUserForm" field="last_name"></has-error>
                                </div>

                            </div>

                            <div class="form-group row">
                                <label for="username" class="col-sm-3 col-form-label text-md-right">Username</label>
                                <div v-if="!isUpdate" class="col-sm-9">
                                    <input type="text" class="form-control" :class="{ 'is-invalid': addUserForm.errors.has('username') }" 
                                        id="username" placeholder="Enter Username" v-model="addUserForm.username" required>
                                    <has-error :form="addUserForm" field="username"></has-error>
                                </div>
                                <div v-else class="col-sm-9">
                                    <input type="text" class="form-control" :class="{ 'is-invalid': updateUserForm.errors.has('username') }" 
                                        id="username" placeholder="Enter Username" v-model="updateUserForm.username" disabled>
                                    <has-error :form="updateUserForm" field="username"></has-error>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-sm-3 col-form-label text-md-right">Password</label>
                                <div v-if="!isUpdate" class="col-sm-9">
                                    <input type="password" class="form-control" :class="{ 'is-invalid': addUserForm.errors.has('password') }"
                                        id="password" placeholder="Enter Password" v-model="addUserForm.password" required>
                                    <has-error :form="addUserForm" field="password"></has-error>
                                </div>
                                <div v-else class="col-sm-9">
                                    <input  type="password" class="form-control" :class="{ 'is-invalid': updateUserForm.errors.has('password') }"
                                        id="password" placeholder="Enter Password" v-model="updateUserForm.password">
                                    <has-error :form="updateUserForm" field="password"></has-error>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password_confirmation" class="col-sm-3 col-form-label text-md-right">Confirm Password</label>
                                <div v-if="!isUpdate" class="col-sm-9">
                                    <input type="password" class="form-control" id="password_confirmation" placeholder="Confirm Password" v-model="addUserForm.password_confirmation" required>
                                </div>
                                <div v-else class="col-sm-9">
                                    <input type="password" class="form-control" id="password_confirmation" placeholder="Confirm Password" v-model="updateUserForm.password_confirmation">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="level" class="col-sm-3 col-form-label text-md-right">Level</label>
                                <div v-if="!isUpdate" class="col-sm-9">
                                    <select class="form-control" id="level" v-model="addUserForm.level" :class="{ 'is-invalid': addUserForm.errors.has('level') }">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <has-error :form="addUserForm" field="level"></has-error>
                                </div>
                                <div v-else class="col-sm-9">
                                    <select class="form-control" id="level" v-model="updateUserForm.level" :class="{ 'is-invalid': updateUserForm.errors.has('level') }">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <has-error :form="updateUserForm" field="level"></has-error>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button v-if="!isUpdate" type="button" class="btn btn-primary" @click="add()">Add User</button>
                        <button v-else type="button" class="btn btn-primary" @click="saveUpdate(updateUserForm.id)">Save Update</button>
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
            isUpdate: false,
        }
    },
    mounted(){
        this.fetchUser();
        $('#add-update-user-modal-lg').on('hidden.bs.modal', ()=>{
            this.addUserForm.reset();
            this.addUserForm.clear();
            this.updateUserForm.reset();
            this.updateUserForm.clear();
        });
    },
    methods:{
        fetchUser() {
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
        add(){
            this.addUserForm.post('/user')
                .then((res)=>{
                    this.fetchUser();
                    $('#add-update-user-modal-lg').modal('hide');   
                    Swal.fire(
                        'Saved!',
                        'User has been added successfully.',
                        'success'
                    );
                });
        },
        showUpdate(user){   
            this.isUpdate = true;
            
            this.updateUserForm.id = user.id;
            this.updateUserForm.first_name = user.first_name;
            this.updateUserForm.last_name = user.last_name;
            this.updateUserForm.username = user.username;
            this.updateUserForm.password = user.password;
            this.updateUserForm.password_confirmation = user.password_confirmation;
            this.updateUserForm.level = user.level;
        },
        saveUpdate(uid){
            this.updateUserForm.put('/user/'+uid)
                .then((res)=>{
                    this.fetchUser();
                    $('#add-update-user-modal-lg').modal('hide');   
                    Swal.fire(
                        'Saved!',
                        'User has been updated successfully.',
                        'success'
                    );
                });
        },
        deleteUser(uid){

            Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {

                        axios.delete('/user/'+uid)
                            .then((res)=>{
                                this.fetchUser();
                                toast.fire({
                                    icon: 'success',
                                    title: 'User has bee deleted'
                                });
                            })
                            .catch((error) => {
                                if (error.response.status == 401) {
                                    alert('User session has expired. Please login again.');
                                    location.replace("/login");
                                }
                            });
                    }
                });

        }
    }
}
</script>

<style>
</style>