<?php

namespace App\Http\Requests\Order;

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
            'customer_id' => 'required',
            'order_date' => 'required|date',
            'order_total' => 'required|numeric',
            'order_date_delivery' => 'required|date',
            'order_status' => 'required|boolean'
        ];
    }
}
