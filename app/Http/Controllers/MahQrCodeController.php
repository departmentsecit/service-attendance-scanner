<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\MyCustomQRCode;
use App\FloorName;
use App\Floor;
use app\Lift;

class MahQrCodeController extends Controller
{

    public function generateForPrinting(Request $request)
    {

        /*
        ####### Qr Code Format Below #######
        'in' => '{
                    "cT":"in",
                    "p":{"id":1,"name":"GSM Mall Project Mikocheni Area"},
                    "b":{"id":300,"num":"1"},
                    "l":{"id":1300,"num":"2"},
                    "f":{"id":5300,"ltr":"P1"}
                }',
        */



        $floors = $request['floors'] ? explode(',', $request['floors']) : [];
    
        if (count($floors) > 0) {

            $qrCodes = [];
            foreach ($floors as $key => $flrId) {

                $floorInfo = DB::table('floors')
                        ->select(
                            'id', 
                            'lift_id',
                            DB::raw('(SELECT letter FROM `floor_names` WHERE id = floors.floor_name_id) as floor_letter'),
                            DB::raw('(SELECT lift_num FROM `lifts` WHERE id =  floors.lift_id) as lift_num'),
                            DB::raw('(SELECT building_id FROM `lifts` WHERE id =  floors.lift_id) as building_id'),
                            DB::raw('(SELECT project_id FROM `lifts` WHERE id =  floors.lift_id) as project_id'),
                            DB::raw('(SELECT number FROM `buildings` WHERE id =  building_id) as building_num'),
                            DB::raw('(SELECT name FROM `projects` WHERE id =  project_id) as project_name'))
                        ->where('id',$flrId)
                        ->first();

                $projId = $floorInfo->project_id;
                $projName = $floorInfo->project_name;
                $bldgId = $floorInfo->building_id;
                $bldgNum = $floorInfo->building_num;
                $liftId = $floorInfo->lift_id;
                $liftNum = $floorInfo->lift_num;
                $flrId = $floorInfo->id;
                $flrLtr = $floorInfo->floor_letter;

                $qrCodeSet = [
                        'info' => $floorInfo,
                        'in' => '{"cT":"in","p":{"id":'.$projId.',"name":"'.$projName.'"},"b":{"id":'.$bldgId.',"num":"'.$bldgNum.'"},"l":{"id":'.$liftId.',"num":"'.$liftNum.'"},"f":{"id":'.$flrId.',"ltr":"'.$flrLtr.'"}}',
                        'out' => '{"cT":"out","p":{"id":'.$projId.',"name":"'.$projName.'"},"b":{"id":'.$bldgId.',"num":"'.$bldgNum.'"},"l":{"id":'.$liftId.',"num":"'.$liftNum.'"},"f":{"id":'.$flrId.',"ltr":"'.$flrLtr.'"}}',
                    ];

                array_push($qrCodes,$qrCodeSet);
            }

            return view('print_views.qr_code')
                    ->with('datas',$qrCodes); 
        }else{
            return 'Error! No data to generarate the QR code.';
        }

    }
}
