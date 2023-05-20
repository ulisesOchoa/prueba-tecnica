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

    public function show(OrderDetail $orderdetail)
    {
        return response()->json(
            $orderdetail->load('product')
        );
    }

    public function update(Request $request, OrderDetail $orderdetail)
    {
        return response()->json(
            $orderdetail->update($request->all())
        );
    }

    public function destroy(OrderDetail $orderdetail)
    {
        return response()->json(
            $orderdetail->delete()
        );
    }
}
