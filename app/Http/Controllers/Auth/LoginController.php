<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Override the default username from 'email' to 'username' field or column
     */
    public function username()
    {
        return 'username';
    }
<<<<<<< HEAD
=======

    /**
     * Override the default function for checking the credentials
     */
    public function credentials(Request $request)
    {
   
        return array_merge($request->only($this->username(), 'password'), ['status' => 'Active']);
    }
>>>>>>> c35af27bf97fe60b62b041d006c140982546dc96
}
