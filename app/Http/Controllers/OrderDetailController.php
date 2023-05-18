<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderDetail\StoreRequest;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    public function index()
    {
        return response()->json(
            OrderDetail::with(['product', 'order'])->get()
        );
    }

    public function store(StoreRequest $request)
    {
        $product = OrderDetail::create([
            'product_description' => $request->product_description,
            'product_amount' => $request->product_amount,
            'product_value' => $request->product_value,
            'product_status' => $request->product_status,
        ]);

        return response()->json($product);
    }

    public function show(OrderDetail $orderDetail)
    {
        return response()->json($orderDetail);
    }

    public function update(Request $request, OrderDetail $orderDetail)
    {
        return response()->json(
            $orderDetail->update($request->all())
        );
    }

    public function destroy(OrderDetail $orderDetail)
    {
        return response()->json(
            $orderDetail->delete()
        );
    }
}
