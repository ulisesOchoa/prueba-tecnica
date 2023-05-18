<?php

namespace App\Http\Requests\OrderDetail;

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
            'order_id' => 'required',
            'product_id' => 'required',
        ];
    }
}
