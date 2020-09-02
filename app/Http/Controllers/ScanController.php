<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ScanResource;
use App\Scan;
use Illuminate\Validation\Rule;
use Carbon\Carbon;

class ScanController extends Controller
{

  

    /**
     * Shall all list of scan logs
     */
    public function index(Request $request)
    {
        $request->validate([
            'paginate'      => ['integer'],
            'project'       => ['integer'],
            'user'          => ['integer'],
            'check_type'    => [Rule::in(['in', 'out'])],
        ]);

        $floorInfo = Scan::select(
                                '*',
                                DB::raw('(SELECT first_name FROM `users` WHERE id = scans.user_id) as first_name'),
                                DB::raw('(SELECT last_name FROM `users` WHERE id = scans.user_id) as last_name'),
                                DB::raw('(SELECT name FROM `countries` WHERE id = scans.country_id) as country_name'),
                                DB::raw('(SELECT name FROM `cities` WHERE id = scans.city_id) as city_name'),
                                DB::raw('(SELECT name FROM `projects` WHERE id = scans.project_id) as project_name'),
                                DB::raw('(SELECT name FROM `buildings` WHERE id = scans.building_id) as building_name'),
                                DB::raw('(SELECT number FROM `buildings` WHERE id = scans.building_id) as building_number'),
                                DB::raw('(SELECT description FROM `lifts` WHERE id = scans.lift_id) as lift_description'),
                                DB::raw('(SELECT lift_num FROM `lifts` WHERE id = scans.lift_id) as lift_number'),
                                DB::raw('(SELECT (SELECT name FROM `floor_names` WHERE id = floors.floor_name_id) FROM `floors` WHERE id = scans.floor_id) as floor_name')
                            )
                            ->when($request['project'],function($q,$projectId){
                                return $q->where('project_id',$projectId);
                            })
                            ->when($request['user'],function($q,$userId){
                                return $q->where('user_id',$userId);
                            })
                            ->when($request['check_type'],function($q,$check_type){
                                return $q->where('check_type',$check_type);
                            })
                            ->when($request['date_range'],function($q,$date_range){
                                $dateRange = explode(' - ',$date_range);
                                $dateRangeFrom = new  Carbon($dateRange[0]);
                                $dateRangeTo = new Carbon($dateRange[1]);
                                // return $q->where('date_time_log','>=',$dateRangeFrom)->where('date_time_log','<=');
                                return $q->whereBetween('date_time_log', [$dateRangeFrom, $dateRangeTo]);
                            })
                            ->orderBy('date_time_log','desc');
                            
        return ScanResource::collection($request['paginate'] ? $floorInfo->paginate($request['paginate']) : $floorInfo->get());
        
    }
}
