<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\ProductsController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* Ciudades */
Route::resource('/city', CityController::class)->except(['create', 'show', 'edit']);
/* Clientes */
Route::resource('/customers', CustomersController::class)->except(['create', 'show', 'edit']);
/* Ordenes */
Route::resource('/order', OrderController::class)->except(['create', 'show', 'edit']);
/* Productos */
Route::resource('/product', ProductsController::class)->except(['create', 'show', 'edit']);
/* Detalles de ordenes */
Route::resource('/orderdetail', OrderDetailController::class)->except(['create', 'show', 'edit']);