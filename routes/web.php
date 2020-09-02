<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
// Route::get('/download/sas-v2', function(){
//     $file=Storage::disk('public/assets/app')->get('sas-v1.apk');
 
// 		return (new Response($file, 200))
//               ->header('Content-Type', 'image/jpeg');
// });

Route::middleware('auth')->group(function(){

    // User
    Route::apiResource('/users', 'UserController')->only(['index']);
    Route::apiResource('/user', 'UserController')->only(['store','show','update','destroy']);
    // Country
    Route::apiResource('/countries', 'CountryController')->only(['index']);
    Route::apiResource('/country', 'CountryController')->only(['store','show','update','destroy']);
    // City
    Route::apiResource('/cities', 'CityController')->only(['index']);
    Route::apiResource('/city', 'CityController')->only(['store','show','update','destroy']);
    // Project
    Route::apiResource('/projects', 'ProjectController')->only(['index']);
    Route::apiResource('/project', 'ProjectController')->only(['store','show','update','destroy']);
    // Building
    Route::apiResource('/buildings/{project_id?}', 'BuildingController')->only(['index']);
    Route::apiResource('/building', 'BuildingController')->only(['store','show','update','destroy']);
    // Lift
    Route::apiResource('/lifts/{project_id?}', 'LiftController')->only(['index']);
    Route::apiResource('/lift', 'LiftController')->only(['store','show','update','destroy']);
    Route::get('/lifts/by-building/{building_id}', 'LiftController@getLiftByBuilding');
    // Floor
    Route::apiResource('/floors/{lift_id}', 'FloorController')->only(['index']);
    Route::apiResource('/floor', 'FloorController')->only(['store','show','update','destroy']);
    // Floor Name
    Route::apiResource('/floor-names', 'FloorNameController')->only(['index']);
    Route::apiResource('/floor-name', 'FloorNameController')->only(['store','show','update','destroy']);
    Route::post('/floor-names/update-position', 'FloorNameController@updatePosition');
    // QR Code
    Route::get('/qr-code/generate/print', 'MahQrCodeController@generateForPrinting');
    // Scan
    Route::apiResource('/scans', 'ScanController')->only(['index']);
    Route::apiResource('/scan', 'ScanController')->only(['store','show','update','destroy']);

});
