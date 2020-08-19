<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Floor;
use App\Http\Resources\FloorResource;

class FloorController extends Controller
{
    /**
     * Show all floors
     */
    public function index(Request $request, $lift_id)
    {
        if ($request['paginate']) {
            try {
                $floors =  Floor::where('lift_id',$lift_id)
                        ->orderBy('order')
                        ->paginate($request['paginate']);
            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        }else{
            $floors = Floor::where('lift_id',$lift_id)
                    ->orderBy('order')
                    ->get();
        }

        return FloorResource::collection($floors);
    }

}
