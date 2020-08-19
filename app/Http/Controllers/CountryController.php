<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;

class CountryController extends Controller
{
    
    /**
     * Show all countries
     */
    public function index(Request $request)
    {
        if ($request['paginate']) {
            try {
                return Country::paginate($request['paginate']);
            } catch (\Throwable $e) {
                return response(['error'=> true, 'message'=>'An error occured. Please make sure you send an integer value for paginate.']);
            }
        }else{
            return Country::all();
        }
    }

    /**
     * Save new country
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'  => ['required','string']
        ]);

        $country = Country::create($request->all());

        return $country;
    }

}
