<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Get all list of users
     */
    public function index()
    {
        return UserResource::collection(User::where('status','Active')->paginate(50));
    }

    /**
     * Save new user
     */
    public function store(Request $request) : UserResource
    {
        // validate data
        $request->validate([
            'first_name'    => ['required', 'string', 'max:50'],
            'last_name'     => ['required', 'string', 'max:50'],
            'username'      => ['required', 'string', 'max:255', 'unique:users'],
            'password'      => ['required', 'string', 'min:6', 'confirmed'],
            'level'         => ['required'],
        ]);

        // create password
        $user = User::create([
            'first_name'    => $request['first_name'],
            'last_name'     => $request['last_name'],
            'username'      => $request['username'],
            'password'      => Hash::make($request['password']),
            'level'         => $request['level'],
            'status'        => 'Active'
        ]);
        // return new user info
        return new UserResource($user);
    }

    /**
     * Update user information
     */
    public function update(User $user, Request $request) : UserResource
    {
        // validate data
        $request->validate([
            'first_name'    => ['required', 'string', 'max:50'],
            'last_name'     => ['required', 'string', 'max:50'],
            'password'      => ($request['password'] != '' ? ['string', 'min:6', 'confirmed'] : ''),
            'level'         => ['required'],
        ]);
        
        $user->first_name   = $request['first_name'];
        $user->last_name    = $request['last_name'];
        $user->level        = $request['level'];
        if ($request['password'] != '') {
            $user->password = Hash::make($request['password']);
        }
        $user->save();

        return new UserResource($user);
    }

    /**
     * Change user status to 'Deleted'
     */
    public function destroy(User $user)
    {
        // $person->delete();
        $user->status = 'Deleted';
        $user->save();
        return response()->json();
    }

}
