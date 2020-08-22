<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Project;
use App\Building;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{

     /**
     * Show all projects
     */
    public function index(Request $request)
    {
        if ($request['paginate']) {
            try {
                return ProjectResource::collection(Project::paginate($request['paginate']));
            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        }else{
            return ProjectResource::collection(Project::all());
        }
    }

    /**
     * Save new project
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      => ['required','string'],
            'country'   => ['required','integer'],
            'city'      => ['required','integer'],
            'status'    => ['required','string'],
            'buildings' => ['required','array']
        ]);

       
        DB::beginTransaction();
        try {
            
           
            // add new project
            $project = Project::create([
                'country_id'        => $request['country'],
                'city_id'           => $request['city'],
                'name'              => $request['name'],
                'address'           => $request['address'],
                'contact_person'    => $request['contact_person'],
                'contact_number'    => $request['contact_number'],
                'description'       => $request['description'],
                'status'            => $request['status'],
                'supervisor'        => $request['supervisor']
            ]);

            // loop thru buildings array and reconstruct fields ready for insert
            $buildings = [];
            foreach ($request['buildings'] as $building) {
                array_push($buildings,[
                    'project_id'    => $project['id'],
                    'number'        => $building['number'],
                    'name'          => $building['name'],
                    'created_at'    => \Carbon\Carbon::now(),
                    'updated_at'    => \Carbon\Carbon::now(),
                ]);
            }
            // add list building for this project
            Building::insert($buildings);

            // commit all insert commands
            DB::commit();

            // get list of added buildings with new id
            $buildings = Building::where('project_id',$project['id'])->get();

            // return response
            return response(['error'=>false,'project' => $project,'buildings' => $buildings]);

        } catch (\Throwable $th) {
            DB::rollback();
            return response(['error'=>true,'message'=>'An arror occured while saving information.'],500);
        }

       
    }
}
