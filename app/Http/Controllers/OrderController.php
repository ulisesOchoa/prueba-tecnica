<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\StoreRequest;
use App\Http\Requests\Order\UpdateRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Products;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    use HttpResponses;

    public function index()
    {
        $order = Order::with('customer:id,customer_name', 'orderDetails:id')
            ->withCount('orderDetails')
            ->get();

        return response()->json(
            $order
        );
    }

    public function store(StoreRequest $request)
    {
        DB::beginTransaction();

        try {
            $product = Products::whereId($request->product_id)->first();

            $order = Order::create([
                'customer_id' => $request->customer_id,
                'order_date' => $request->order_date,
                'order_total' => $request->order_total,
                'order_date_delivery' => $request->order_date_delivery,
                'order_status' => $request->order_status,
            ]);

            OrderDetail::create([
                'order_id' => $order->id,
                'product_id' => $request->product_id
            ]);

            // se descuenta los productos
            $product->decrement('product_amount', $order->order_total);
            $product->save();

            DB::commit();

            return $this->success([
                new OrderResource($order->load('customer'))
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();

            return $this->error($th, 'Ha ocurrido un error', 401);
        }
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
