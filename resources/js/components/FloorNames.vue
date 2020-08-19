<template>
    <div>

        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Floor Names</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Floor Names</a></li>
                    <li class="breadcrumb-item active">List</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">

            <div class="col-12">
                <table class="table table-sm table-hover" id="myTable">
                <thead>
                    <tr>
                        <th class="text-center" style="width: 100px;">Letter</th>
                        <th style="width: 350px;">Floor Name</th>
                        <th>Description</th>
                        <th class="text-center">Actions</th>
                    </tr>
                </thead>
                 <tbody>
                    <tr>
                        <td class="text-center">
                            <input class="form-control form-control-sm" :class="{'is-invalid': floorNameForm.errors.has('letter')}" type="text" v-model="floorNameForm.letter">
                            <has-error :form="floorNameForm" field="letter" class="text-left"></has-error>
                        </td>
                        <td>
                            <input class="form-control form-control-sm" :class="{'is-invalid': floorNameForm.errors.has('name')}" type="text" v-model="floorNameForm.name">
                            <has-error :form="floorNameForm" field="name" class="text-left"></has-error>
                        </td>
                        <td>
                            <input class="form-control form-control-sm" type="text" v-model="floorNameForm.description">
                        </td>
                        <td class="text-center">
                            <Button class="btn btn-xs btn-primary" @click="add()"> <i class="fas fa-plus"></i> Add</Button>
                        </td>
                    </tr>
                </tbody>
                <tbody id="tbody-sortable">
                    <tr v-for="(fn,i) in floorNames" :key="i" :data-id="fn.id" :data-position="fn.position">
                        <td class="text-center">
                            <input v-if="isEdit && updateFloorNameForm.id == fn.id" class="form-control form-control-sm" 
                                :class="{'is-invalid': updateFloorNameForm.errors.has('letter')}" type="text" v-model="updateFloorNameForm.letter">
                            <span v-else>{{ fn.letter }}</span>
                        </td>
                        <td>
                            <input v-if="isEdit && updateFloorNameForm.id == fn.id" class="form-control form-control-sm" 
                                :class="{'is-invalid': updateFloorNameForm.errors.has('name')}" type="text" v-model="updateFloorNameForm.name">
                            <span v-else>{{ fn.name }}</span>
                        </td>
                        <td>
                            <input v-if="isEdit && updateFloorNameForm.id == fn.id" class="form-control form-control-sm" 
                                :class="{'is-invalid': updateFloorNameForm.errors.has('description')}" type="text" v-model="updateFloorNameForm.description">
                            <span v-else>{{ fn.description }}</span>
                        </td>
                        
                         <td v-if="isEdit && updateFloorNameForm.id == fn.id" class="text-center">
                            <Button class="btn btn-xs btn-primary mr-2" @click="saveUpdate()"> <i class="fas fa-save"></i> Save</Button>
                            <Button class="btn btn-xs btn-danger" @click="cancelUpdate()"> <i class="fas fa-times"></i> Cancel</Button>
                        </td>
                        <td v-else class="text-center">
                            <Button class="btn btn-xs btn-warning mr-2" @click="update(fn)"> <i class="fas fa-pen"></i> </Button>
                            <Button class="btn btn-xs btn-danger" @click="deleteFloorName(fn.id)"> <i class="fas fa-trash"></i> </Button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
          
        </section>

    </div>
</template>

<script>

export default {
    data(){
        return{
            isEdit: false,
            floorNames:[],
            positions: [],
            floorNameForm: new Form({
                letter: "",
                name: "",
                description: "",
            }),
            updateFloorNameForm: new Form({
                id: null,
                letter: "",
                name: "",
                description: "",
            }),
        }
    },
    mounted(){
        // get all floor names
        this.getFloorNames();
        // initialize parentThis variable to use inside the jQuery
        let parentThis = this;
        // loop thru tr tag and check if the position has change
        // if it change then add pos-updated class
        // then call updatePoitionDB function
        $('#tbody-sortable').sortable({
            update: function( event, ui ) {
                $(this).children().each(function(index){
                    if($(this).attr('data-position') != (index+1)){
                        $(this).attr('data-position',(index+1)).addClass('pos-updated');
                    }
                });
                parentThis.updatePositionInDB();
            },
        });
    },
    methods:{
        getFloorNames(){
            axios.get('/floor-names')
                .then((res)=>{
                    this.floorNames = res.data;
                });
        },
        updatePositionInDB(){
            // loop thru tr tag and check for pos-updated class
            // add those to positions array and removed class name
            
            // initialize parentThis variable to use inside the jQuery
            let parentThis = this;
            $('.pos-updated').each(function(){
                parentThis.positions.push([
                    $(this).attr('data-id'),
                    $(this).attr('data-position')
                    ]);
                $(this).removeClass('pos-updated');
            });

            //  send axios request to server
            axios.post('/floor-names/update-position',{ positions: this.positions })
                .then((res)=>{
                    if (res.status == 200) {
                        toast.fire({
                            icon: 'success',
                            title: 'New position saved successfully.'
                        });
                    }else{
                        toast.fire({
                            icon: 'error',
                            title: 'Unable to save new position.'
                        });
                    }
                });

        },
        add(){
            this.floorNameForm.post('/floor-name')
                .then((res)=>{
                    if(res.status == 201){
                        this.getFloorNames();
                        this.floorNameForm.reset();
                        toast.fire({
                                icon: 'success',
                                title: 'New floor name has been added.'
                            });
                    }else{
                        Swal.fire(
                            'Error!',
                            'Unable to save new floor name.',
                            'error'
                        );
                    }
                });
        },
        update(fn){
            this.isEdit = true;
            this.updateFloorNameForm.id = fn.id;
            this.updateFloorNameForm.letter = fn.letter;
            this.updateFloorNameForm.name = fn.name;
            this.updateFloorNameForm.description = fn.description;
        },
        saveUpdate(){
            this.updateFloorNameForm.put('/floor-name/'+this.updateFloorNameForm.id)
                .then((res)=>{
                    this.cancelUpdate();
                    this.getFloorNames();
                    toast.fire({
                            icon: 'success',
                            title: 'New floor name has been added.'
                        });
                });
        },
        cancelUpdate(){
            this.isEdit = false;
            this.updateFloorNameForm.clear();
            this.updateFloorNameForm.reset();
        },
        deleteFloorName(fnId){
            axios.delete('/floor-name/'+fnId)
                .then((res)=>{
                    this.getFloorNames();
                    toast.fire({
                            icon: 'success',
                            title: 'Floor name has been deleted.'
                        });
                });
        }
    }
}
</script>

<style>
td:hover{
		cursor:move;
		}
</style>