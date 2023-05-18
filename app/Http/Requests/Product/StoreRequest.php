<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'product_description' => 'required',
            'product_amount' => 'required',
            'product_value' => 'required',
            'product_status' => 'required',
        ];
    }
}
