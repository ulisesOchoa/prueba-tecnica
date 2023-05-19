<?php

namespace App\Http\Controllers;

use App\Http\Requests\Customer\StoreRequest;
use App\Http\Requests\Customer\UpdateRequest;
use App\Models\Customer;
use App\Models\Customers;
use Illuminate\Http\Request;

class CustomersController extends Controller
{

    public function index()
    {
        return response()->json(
            Customer::with('city')->get()
        );
    }

    public function store(StoreRequest $request)
    {
        $customer = Customer::create([
            'city_id' => $request->city_id,
            'customer_id_number' => $request->customer_id_number,
            'customer_name' => $request->customer_name,
            'customer_birth_date' => $request->customer_birth_date,
            'customer_address' => $request->customer_address,
            'customer_phone' => $request->customer_phone
        ]);

        return response()->json($customer->load('city'));

    }

    public function show(Customer $customer)
    {
        return response()->json($customer->load('city'));
    }

    public function update(UpdateRequest $request, Customer $customer)
    {
        $customer->update($request->all());

        return response()->json($customer->load('city'));
    }

    public function destroy(Customer $customer)
    {
        return response()->json(
            $customer->delete()
        );
    }
}
