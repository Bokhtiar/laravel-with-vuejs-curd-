<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/category/index', [App\Http\Controllers\CategoryController::class, 'index']);
Route::post('/category/store', [App\Http\Controllers\CategoryController::class, 'store']);
Route::get('/category/edit/{id}', [App\Http\Controllers\CategoryController::class, 'edit']);
Route::post('/category/update/{id}', [App\Http\Controllers\CategoryController::class, 'update']);
Route::get('/category/delete/{id}', [App\Http\Controllers\CategoryController::class, 'delete']);

//subscriber
Route::get('/subscriber/index', [App\Http\Controllers\SubscriberController::class, 'index']);
Route::post('/subscriber/store', [App\Http\Controllers\SubscriberController::class, 'store']);
Route::get('/subscriber/edit/{id}', [App\Http\Controllers\SubscriberController::class, 'edit']);
Route::post('/subscriber/update/{id}', [App\Http\Controllers\SubscriberController::class, 'update']);
Route::get('/subscriber/delete/{id}', [App\Http\Controllers\SubscriberController::class, 'delete']);

