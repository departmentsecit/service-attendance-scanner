<?php

namespace App\Http\Controllers\API\v1\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class APILoginController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate([
            'username'     => 'required',
            'password'  => 'required'
        ]);

        $credentials = array_merge($login, ['Status' => 'Active']);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid login credentials.']);
        }

        $token = Auth::user()->createToken('authToken')->accessToken;

        return response(['user' => Auth::user(), 'access_token' => $token]);

    }

    public function logout()
    {        
        $user = Auth::user()->token();
        $user->revoke();
        return response()->json();

        // codes below will logout the user in all devices
        // DB::table('oauth_access_tokens')
        //     ->where('user_id', Auth::user()->id)
        //     ->update([
        //         'revoked' => true
        //     ]);
    }
}
