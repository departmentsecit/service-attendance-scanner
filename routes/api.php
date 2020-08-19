<?php

use Illuminate\Http\Request;

Route::prefix('/v1')->group(function(){
    
    Route::post('/login', 'API\v1\Auth\APILoginController@login');

    Route::middleware('auth:api')->group(function(){
        
        // Route::apiResource('/users', 'UserController')->only(['index']);
        // Route::apiResource('/user', 'UserController')->only(['store','show','update','destroy']);

    });

});