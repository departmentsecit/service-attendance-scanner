<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MyCustomQRCode;

class MahQrCodeController extends Controller
{

    public function generateForPrinting(Request $request)
    {

        /*
        [{
            "type": "in",
            "project": {
                "id": "1",
                "name": "GSM Mall"
            },
            "building":{
                "id":"1",
                "name":""
            }
        }]
        */



        $floors = explode(',', $request['floors']);
        
        if (count($floors) > 0) {

            $qrCodes = [];
            foreach ($floors as $key => $floor) {
                
                // qr code format: [check_type]|[project_id]|[project_name]|[building_number]|[floor_number]|[country_id]|[city_id]|
                $qrCodeSet = [
                        // 'in'    =>  '1|'.$request['building'].'|'.$request['lift'].'|'.$floor,
                        // 'out'   =>  '0|'.$request['building'].'|'.$request['lift'].'|'.$floor,
                        'in'    => '[{"type": "in","project": {"id": "1","name": "GSM Mall"},"building":{"id":"1","name":""}}]',
                        'out'    => '[{"type": "out","project": {"id": "1","name": "GSM Mall"},"building":{"id":"1","name":""}}]',
                    ];
                array_push($qrCodes,$qrCodeSet);
            }

            return view('print_views.qr_code')
                    ->with('datas',$qrCodes); 
        }else{
            return 'Error!';
        }

    }
}
