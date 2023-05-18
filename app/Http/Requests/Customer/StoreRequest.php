<?php

namespace App\Http\Requests\Customer;

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
            'city_id' => 'required',
            'customer_id_number' => 'required',
            'customer_name' => 'required',
            'customer_birth_date' => 'required',
            'customer_address' => 'required',
            'customer_phone' => 'required'
        ];
    }
}
