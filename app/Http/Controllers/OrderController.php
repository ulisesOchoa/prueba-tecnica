<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\StoreRequest;
use App\Http\Requests\Order\UpdateRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return response()->json(
            Order::with('customer')->get()
        );
    }

    public function store(StoreRequest $request)
    {
        $order = Order::create([
            'customer_id' => $request->customer_id,
            'order_date' => $request->order_date,
            'order_total' => $request->order_total,
            'order_date_delivery' => $request->order_date_delivery,
            'order_status' => $request->order_status,
        ]);

        return response()->json($order->load('customer'));
    }

    public function show(Order $order)
    {
        return response()->json($order->load('customer'));
    }

    public function update(UpdateRequest $request, Order $order)
    {
        return response()->json(
            $order->update($request->all())
        );
    }

    public function destroy(Order $order)
    {
        return response()->json(
            $order->delete()
        );
    }
}
