<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\LiftResource;
use Illuminate\Support\Facades\DB;
use App\Lift;
use App\Floor;


class LiftController extends Controller
{
   /**
     * Get all lifts by project(optional)
     */
    public function index(Request $request, $project_id=null)
    {
        if ($request['paginate']) {
            try {
                $lifts = Lift::when($project_id,function($q,$pID){
                            return $q->where('project_id',$pID);
                        })
                        ->paginate($request['paginate']);

            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        } else {
            $lifts = Lift::when($project_id,function($q,$pID){
                        return $q->where('project_id',$pID);
                    })
                    ->get();
        }

        return LiftResource::collection($lifts);
    }

    /**
     * Get all lifts by building
     */
    public function getLiftByBuilding($building_id)
    {
        return LiftResource::collection(Lift::where('building_id',$building_id)->get());
    }


    /**
     * Save new lift
     */
    public function store(Request $request)
    {
        $request->validate([
            'project_id'    => ['required','integer'],
            'building'      => ['required','integer'],
            'lift_number'   => ['required','integer'],
            'floors'        => ['required','array'],
        ]);

        // check if the lift already exist in the building
        $result = Lift::where('project_id',$request['project_id'])
                        ->where('building_id',$request['building'])
                        ->where('lift_num',$request['lift_number'])
                        ->where('status','<>','Deleted')
                        ->count();
        if ($result > 0) {
            return response(['message'=>'This lift already exist.'],422);
        }




        DB::beginTransaction();
        try {

            // add new lift
            $lift = Lift::create([
                'project_id'    => $request['project_id'],
                'building_id'   => $request['building'],
                'lift_num'      => $request['lift_number'],
                'description'   => $request['description'],
                'floor_count'   => $request['floor_count']
                ]);

            // loop thru floors array and reconstruct fields ready for insert
            $floors = [];
            $order = 1;
            foreach ($request['floors'] as $floor) {
                array_push($floors,[
                    'lift_id'       => $lift['id'],
                    'order'         => $order++,
                    'floor_name_id' => $floor,
                    'created_at'    => \Carbon\Carbon::now(),
                    'updated_at'    => \Carbon\Carbon::now(),
                ]);
            }
            // add list of floors for this lift
            Floor::insert($floors);

            // commit all insert commands
            DB::commit();

            // get list of added floors with new id
            $floors = Floor::where('lift_id',$lift['id'])->get();

            // return response
            return response(['error'=>false,'lift_info' => $lift,'floors' => $floors]);

        } catch (\Throwable $th) {
            DB::rollback();
            return response(['error'=>true,'message'=>'An arror occured while saving information.'],500);
        }
    }


    public function destroy(Lift $lift)
    {

        // delete all floors for this lift
        Floor::where('lift_id',$lift->id)->delete();

        // delete lift
        $lift->delete();
        return response(['message' => 'lift deleted', 'lift_id' => $lift->id]);

    }

}
