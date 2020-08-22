<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * This will response nothing... 
     * This is just to check if the server is accessable or not
     */
    public function index(){
        return response()->json();
    }
}
