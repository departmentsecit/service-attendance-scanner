<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Scan;

class ScanController extends Controller
{

    /**
     * Save new scan logs
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id'   => ['required','integer'],
            'floor_id'  => ['required', 'integer'],
            'check_type'   => ['required', 'string'],
            'date_time_log' => ['required', 'date_format:"Y-m-d H:i:s"']   
        ]);
        
        // retrieve other floor information
        $floorInfo = DB::table('floors')
                        ->select(
                            'id', 
                            'lift_id',
                            DB::raw('(SELECT building_id FROM `lifts` WHERE id =  floors.lift_id) as building_id'),
                            DB::raw('(SELECT project_id FROM `lifts` WHERE id =  floors.lift_id) as project_id'),
                            DB::raw('(SELECT country_id FROM `projects` WHERE id =  project_id) as country_id'),
                            DB::raw('(SELECT city_id FROM `projects` WHERE id =  project_id) as city_id'))
                        ->where('id',$request['floor_id'])
                        ->first();

        // Add scan log to scans table
        Scan::create([
            'user_id' => $request['user_id'],
            'country_id' => $floorInfo->country_id,
            'city_id' => $floorInfo->city_id, 
            'project_id' => $floorInfo->project_id,
            'building_id' => $floorInfo->building_id,
            'lift_id' => $floorInfo->lift_id,
            'floor_id' => $floorInfo->id,
            'check_type' => $request['check_type'],
            'date_time_log' => $request['date_time_log']
        ]);

        return response(['error'=>false,'message','successfully added.']);
        
    }
}
