<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Building;

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
}
