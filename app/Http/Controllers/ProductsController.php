<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return response()->json(
            Products::paginate(10)
                ->through(fn ($product) => [
                    'id' => $product->id,
                    'product_description'=> $product->product_description,
                    'product_amount'=> $product->product_amount,
                    'product_value'=> $product->product_value,
                    'product_status'=> $product->product_status,
                ]),
        );
    }

    public function store(StoreRequest $request)
    {
        $product = Products::create([
            'product_description' => $request->product_description,
            'product_amount' => $request->product_amount,
            'product_value' => $request->product_value,
            'product_status' => $request->product_status,
        ]);

        return response()->json($product);
    }

    public function show(Products $product)
    {
        return response()->json($product);
    }

    public function update(UpdateRequest $request, Products $product)
    {
        return response()->json(
            $product->update($request->all())
        );
    }

    public function destroy(Products $product)
    {
        return response()->json(
            $product->delete()
        );
    }
}
