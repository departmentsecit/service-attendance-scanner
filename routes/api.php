<?php

use Illuminate\Http\Request;

Route::prefix('/v1')->group(function(){
    
    Route::post('/login', 'API\v1\Auth\APILoginController@login');
    Route::get('/', 'API\v1\HomeController@index');

    Route::middleware('auth:api')->group(function(){
        // scan logs
        Route::apiResource('/scans', 'API\v1\ScanController')->only(['index']);
        Route::apiResource('/scan', 'API\v1\ScanController')->only(['store','show','update','destroy']);
        Route::post('/scan/bulk', 'API\v1\ScanController@storeBulk');

    });

});