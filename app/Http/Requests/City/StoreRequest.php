<?php

namespace App\Http\Requests\City;

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
            'city_name' => 'required'
        ];
    }
}
