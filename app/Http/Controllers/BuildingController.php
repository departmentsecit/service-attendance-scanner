<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Building;
use App\Lift;

class BuildingController extends Controller
{
     /**
     * Get all buildings
     */
    public function index(Request $request, $project_id=null)
    {
        if ($request['paginate']) {
            try {
                return Building::when($project_id,function($q,$pID){
                            return $q->where('project_id',$pID);
                        })
                        ->paginate($request['paginate']);
            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        } else {
            return Building::when($project_id,function($q,$pID){
                        return $q->where('project_id',$pID);
                    })
                    ->get();
        }
        
    }

    /**
     * Add new building
     */
    public function store(Request $request)
    {
        $request->validate([
            'project_id'    => ['required','integer'],
            'number'        => ['required','integer'],
            'name'          => ['required','string'],
        ]);
    
        return Building::create([
            'project_id'    => $request['project_id'],
            'number'        => $request['number'],
            'name'          => $request['name'],
        ]);

    }

    /**
     * Delete building
     */
    public function destroy($buildingId)
    {

        DB::beginTransaction();
        try {

             // delete building
            Building::destroy($buildingId);
            // delete lift for this building
            Lift::where('building_id',$buildingId)->delete();

            DB::commit();

            // return response
            return response(['error'=>false,'message' => 'Building deleted.']);

        } catch (\Throwable $th) {
            DB::rollback();
            return response(['error'=>true,'message'=>'An arror occured while deleting building.'],500);
        }
    }
}
