<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\FloorName;

class FloorNameController extends Controller
{
    
    /**
     * Get all floor names
     */
    public function index(Request $request)
    {
        if ($request['paginate']) {
            try {
                return FloorName::paginate($request['paginate'])->orderBy('position');
            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        } else {
            return FloorName::orderBy('position')->get();
        }
        
    }

    /**
     * Add new floor name
     */
    public function store(Request $request)
    {
        $request->validate([
            'letter'    =>  ['required','string','unique:floor_names'],
            'name'      =>  ['required','string'],
        ]);

        // get max position number
        $position = FloorName::max('position') + 1;

        return FloorName::create([
            'letter' => $request['letter'],
            'name' => $request['name'],
            'description' => $request['description'],
            'position' => $position,
        ]);
    }

    /**
     * update floor name position
     */
    public function updatePosition(Request $request)
    {
     
        
        DB::beginTransaction();
        try {
            
            foreach ($request['positions'] as $position) {
                FloorName::where('id',$position[0])->update(['position' => $position[1]]);
            }
            
            // commit all query commands
            DB::commit();

            return response()->json();

        } catch (\Throwable $th) {
            DB::rollback();
            return response(['error'=>true,'message'=>'An arror occured while saving information.'],500);
        }

        
    }

    /**
     * Update or Edit floor name information
     */
    public function update(Request $request, FloorName $floorName)
    {
        $request->validate([
            'letter'    =>  ['required','string'],
            'name'      =>  ['required','string']
        ]);

        $floorName->update($request->all());
        return $floorName;
    }

    /**
     * Delete floor name
     */
    public function destroy(FloorName $floorName)
    {

        // get the current position
        $deletedPosition = $floorName->position;
        // delete selected floor name
        $floorName->delete();
        // then update all position which is greater than current position of the floor name to delete
        $needToUpdate = FloorName::where('position','>',$deletedPosition)->get();
        // FloorName::where
        foreach ($needToUpdate as  $floorName) {
            $floorName->update(['position' => ($floorName->position - 1)]);
        }
        return response()->json();
    }


}
