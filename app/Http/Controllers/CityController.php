<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;

class CityController extends Controller
{
    /**
     * Show all cities
     */
    public function index(Request $request)
    {
        if ($request['paginate']) {
            try {
                return City::when($request['country_id'],function($q,$cID){
                        return $q->where('country_id',$cID);
                    })
                    ->paginate($request['paginate']);
            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        }else{
            return City::when($request['country_id'],function($q,$cID){
                    return $q->where('country_id',$cID);
                })
                ->get();
        }
    }

    /**
     * Save new country
     */
    public function store(Request $request)
    {
        $request->validate([
            'country_id'    => ['required','integer'],
            'name'          => ['required','string'],
        ]);

        $city = City::create($request->all());

        return $city;
    }
}
