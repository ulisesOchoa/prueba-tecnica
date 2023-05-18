<?php

namespace App\Http\Controllers;

use App\Http\Requests\City\StoreRequest;
use App\Http\Requests\City\UpdateRequest;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{

    public function index()
    {
        return response()->json(
            City::select('id', 'city_name')->get()
        );
    }

    public function store(StoreRequest $request)
    {
        return response()->json(
            City::create($request->only('city_name'))
        );
    }

    public function show(City $city)
    {
        return response()->json($city);
    }

    public function update(UpdateRequest $request, City $city)
    {
        return response()->json(
            $city->update($request->all())
        );
    }

    public function destroy(City $city)
    {
        return response()->json(
            $city->delete()
        );
    }
}
